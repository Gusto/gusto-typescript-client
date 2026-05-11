# GetV1CompanyFormsSortBy

Sort company forms by a given field. Append `:asc` or `:desc` to specify direction (e.g., `name:asc`). Defaults to ascending.

## Example Usage

```typescript
import { GetV1CompanyFormsSortBy } from "openapi/models/operations";

let value: GetV1CompanyFormsSortBy = "quarter";
```

## Values

```typescript
"name" | "year" | "quarter" | "draft" | "document_content_type" | "created_at"
```