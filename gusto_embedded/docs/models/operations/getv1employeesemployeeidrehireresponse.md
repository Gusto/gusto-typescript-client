# GetV1EmployeesEmployeeIdRehireResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdRehireResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidrehire.js";

let value: GetV1EmployeesEmployeeIdRehireResponse = {
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
| `rehire`                                                           | [components.Rehire](../../models/components/rehire.md)             | :heavy_minus_sign:                                                 | Example response                                                   |