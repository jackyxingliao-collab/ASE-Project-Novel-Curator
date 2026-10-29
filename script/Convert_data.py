import json
import re
from datetime import datetime

def convert_anilist_to_catalogue(input_filepath='Data.json', output_filepath='Novel.json'):
    # 1. Đọc dữ liệu thô từ AniList
    with open(input_filepath, 'r', encoding='utf-8') as f:
        raw_data = json.load(f)

    media_list = raw_data.get('data', {}).get('Page', {}).get('media', [])
    catalogue_entries = []

    # Map status sang enum viết thường (lowercase) theo đúng quy định Contract
    status_mapping = {
        "FINISHED": "completed",
        "RELEASING": "ongoing",
        "HIATUS": "hiatus",
        "CANCELLED": "unknown"
    }

    # Ngày lấy dữ liệu YYYY-MM-DD
    today_str = datetime.now().strftime("%Y-%m-%d")

    for item in media_list:
        # 1. ID
        item_id = f"anilist-{item.get('id')}"

        # 2. Title (Ưu tiên tên Tiếng Anh, nếu không có lấy tên Romaji)
        title_obj = item.get('title') or {}
        title = title_obj.get('english') or title_obj.get('romaji') or "Untitled"

        # 3. Author (Trích xuất từ danh sách staff có role Story/Author, nếu thiếu trả về null)
        author = None
        staff_edges = item.get('staff', {}).get('edges', [])
        for edge in staff_edges:
            role = edge.get('role', '').strip().lower()
            if any(k in role for k in ['story', 'author', 'original']):
                author = edge.get('node', {}).get('name', {}).get('full')
                if author:
                    break
        if not author and staff_edges:
            author = staff_edges[0].get('node', {}).get('name', {}).get('full')

        # 4. Synopsis (Xóa bỏ các thẻ HTML như <br>, <b>, nếu trống trả về null)
        raw_desc = item.get('description') or ""
        clean_desc = re.sub(r'<[^>]+>', '', raw_desc).strip()
        synopsis = clean_desc if clean_desc else None

        # 5. Genres (Mảng danh mục)
        genres = item.get('genres') or []

        # 6. Tags (Rút gọn từ mảng Object thành mảng chuỗi)
        raw_tags = item.get('tags') or []
        tags = [t.get('name') for t in raw_tags if t.get('name')]

        # 7. Status (Viết thường: ongoing, completed, hiatus, unknown)
        raw_status = item.get('status', '').upper()
        status = status_mapping.get(raw_status, "unknown")

        # 8. Cover URL (Để null theo quy định về bản quyền ảnh bìa của Contract)
        cover_url = None

        # 9. Source URL (Đường dẫn gốc)
        source_url = item.get('siteUrl')

        # 10. Source Name (Tên nguồn)
        source_name = "AniList"

        # 11. Retrieved At (Ngày kiểm tra dữ liệu)
        retrieved_at = today_str

        # 12. Reuse Terms (Điều khoản tái sử dụng)
        reuse_terms = "Metadata from AniList GraphQL API for academic non-commercial project."

        # 13. Is Fictional (False đối với dữ liệu thật)
        is_fictional = False

        # Đảm bảo mỗi bản ghi chứa ĐỦ 13 TRƯỜNG bắt buộc
        record = {
            "id": item_id,
            "title": title,
            "author": author,
            "synopsis": synopsis,
            "genres": genres,
            "tags": tags,
            "status": status,
            "coverUrl": cover_url,
            "sourceUrl": source_url,
            "sourceName": source_name,
            "retrievedAt": retrieved_at,
            "reuseTerms": reuse_terms,
            "isFictional": is_fictional
        }
        catalogue_entries.append(record)

    # 2. Xuất dữ liệu ra file catalogue.json
    with open(output_filepath, 'w', encoding='utf-8') as f:
        json.dump(catalogue_entries, f, ensure_ascii=False, indent=2)

    print(f"Created '{output_filepath}' DATA_CONTRACT.md!")

if __name__ == '__main__':
    convert_anilist_to_catalogue()