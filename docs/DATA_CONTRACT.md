# Data Contract: Novel Catalogue

**Version:** 0.1 (agreed)
**Owner:** Member 2 (Novel Data and Catalogue)
**Consumers:** Application Logic (Member 3), Interface and Deployment (Member 4)
**Files:** `data/sample-novels.json` (test data), `data/catalogue.json` (real data, to be added)

## 1. File format

- The catalogue is a **plain JSON array** of novel records.
- Field names are `camelCase`.
- Text is UTF-8.
- v0.1 keeps the array format so existing code keeps working. A `version` wrapper may be introduced in a later version.
- v0.1 only **adds** fields to the original sample. No existing field was renamed or removed.

## 2. Fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | string | Yes | Unique, stable, never reused. Test records use `sample-NNN`. |
| `title` | string | Yes | Non-empty. Test records start with `[TEST]`. |
| `author` | string or null | Yes (may be null) | `null` if unknown. |
| `synopsis` | string or null | Yes (may be null) | Short description. Real records use text rewritten by the team. |
| `genres` | string[] | Yes (may be `[]`) | Title Case, e.g. `"Fantasy"`, `"Sci-Fi"`. |
| `tags` | string[] | Yes (may be `[]`) | Title Case free-form tags. |
| `status` | enum | Yes | One of `ongoing`, `completed`, `hiatus`, `unknown` (lowercase). |
| `coverUrl` | string or null | Yes (may be null) | Image URL, or `null`. |
| `sourceUrl` | string or null | Real: **required**. Test: null | Link to the novel's listing page. |
| `sourceName` | string or null | Real: **required**. Test: null | e.g. `"Novel Updates"`. |
| `retrievedAt` | string or null | Real: **required**. Test: null | Date the data was checked, `YYYY-MM-DD`. |
| `reuseTerms` | string or null | Real: **required**. Test: null | One sentence: what we may do with this record and why. |
| `isFictional` | boolean | Yes | `true` for test entries, `false` for real novels. |

Every record contains **all** fields. Missing data is expressed with `null` or `[]`, never by omitting the key.

## 3. Missing-data rules

- **Never use an empty string** for "no data". Use `null` for single values and `[]` for lists.
- `coverUrl` is `null`: UI shows a placeholder image.
- `synopsis` is `null`: UI hides the synopsis block (or shows "No synopsis available").
- `author` is `null`: UI hides the author line.
- `genres` or `tags` is `[]`: UI shows no chips. Genre filtering simply never matches this record.
- `status` is `unknown`: UI hides the status badge or shows "Unknown".
- `sourceUrl` is `null`: UI hides the "View listing" button.
- Unknown `status` values must be treated as `unknown`, not as an error.

## 4. Provenance and reuse (real records only)

For every record with `isFictional: false`:

1. `sourceUrl`, `sourceName`, `retrievedAt` and `reuseTerms` must all be filled in.
2. Synopses are **rewritten by the team**, not copied from the source.
3. Cover images are **not stored**. `coverUrl` is `null` unless reuse permission has been checked and recorded in `reuseTerms`.
4. The terms-of-service / robots.txt check for each source is recorded in `docs/ENGINEERING_DECISIONS.md` with the date checked.
5. Data is entered manually. No scraping.

## 5. Fictional test entries

- `isFictional` is `true`.
- `title` starts with `[TEST]`.
- `sourceUrl`, `sourceName`, `retrievedAt`, `reuseTerms` are `null`.
- Some test entries deliberately have missing optional data (see `sample-003`, `sample-004`) so the UI and logic can be tested on edge cases.
- Before any user testing, the UI/logic must be able to exclude records where `isFictional` is `true`.

## 6. Example: real record (structure only)

```json
{
  "id": "nu-0001",
  "title": "<real title>",
  "author": "<real author>",
  "synopsis": "<short summary written by the team>",
  "genres": ["Fantasy", "Action"],
  "tags": ["Cultivation"],
  "status": "ongoing",
  "coverUrl": null,
  "sourceUrl": "https://www.novelupdates.com/series/<slug>/",
  "sourceName": "Novel Updates",
  "retrievedAt": "2026-10-26",
  "reuseTerms": "Metadata for internal testing only; synopsis rewritten by team; no cover stored.",
  "isFictional": false
}
```

## 7. Changing the contract

- Adding an optional field is allowed with a note in `ENGINEERING_DECISIONS.md`.
- Renaming or removing a field, or changing a type, requires a version bump and a message to Members 3 and 4.
- Final decisions on this contract are made by the data owner.

## 8. Known limitations

- The catalogue is small (10-20 real entries), so results are biased toward the titles chosen.
- Real data is limited by the terms of the sources, so synopses are rewritten and covers are not stored.
- Genres and tags are entered by hand and may be inconsistent between sources.
