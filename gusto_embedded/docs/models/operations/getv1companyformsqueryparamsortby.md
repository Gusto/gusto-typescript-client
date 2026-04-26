# GetV1CompanyFormsQueryParamSortBy

Sort company forms by a given field. Append `:asc` or `:desc` to specify direction (e.g., `name:asc`). Defaults to ascending.

## Example Usage

```typescript
import { GetV1CompanyFormsQueryParamSortBy } from "@gusto/embedded-api/models/operations/getv1companyforms.js";

let value: GetV1CompanyFormsQueryParamSortBy = "draft";
```

## Values

```typescript
"name" | "year" | "quarter" | "draft" | "document_content_type" | "created_at"
```