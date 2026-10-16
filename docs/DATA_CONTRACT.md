# Preliminary novel data contract

This is a **proposed interface**, not a settled schema. Catalogue, logic and UI owners should review it before implementation.

```json
{
  "id": "sample-001",
  "title": "Example Novel",
  "author": "Example Author",
  "synopsis": "Fictional sample description.",
  "genres": ["Fantasy"],
  "tags": ["Adventure"],
  "status": "Unknown",
  "coverUrl": null,
  "sourceUrl": null
}
```

Rules for the first release:
- `id` and `title` are required; other fields may be absent or unknown.
- The interface must gracefully handle missing covers and summaries.
- Do not represent invented sample entries as real novels.
- Record sources, permission/reuse limitations and collection date before incorporating real metadata.
- Selection logic must avoid endlessly repeating the same novel in a session.
- Log disagreements about schema in an Issue or decision record.
