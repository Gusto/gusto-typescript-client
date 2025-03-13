# GetCompaniesDepartmentsResponse

## Example Usage

```typescript
import { GetCompaniesDepartmentsResponse } from "@gusto/embedded-api/models/operations/getcompaniesdepartments.js";

let value: GetCompaniesDepartmentsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `departmentList`                                                   | [components.Department](../../models/components/department.md)[]   | :heavy_minus_sign:                                                 | List of departments                                                |