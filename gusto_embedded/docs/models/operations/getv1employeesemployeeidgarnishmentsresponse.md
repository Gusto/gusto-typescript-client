# GetV1EmployeesEmployeeIdGarnishmentsResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdGarnishmentsResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidgarnishments.js";

let value: GetV1EmployeesEmployeeIdGarnishmentsResponse = {
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
| `garnishmentList`                                                  | [components.Garnishment](../../models/components/garnishment.md)[] | :heavy_minus_sign:                                                 | Example response                                                   |