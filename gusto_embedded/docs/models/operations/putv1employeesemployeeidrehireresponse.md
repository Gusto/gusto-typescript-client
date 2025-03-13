# PutV1EmployeesEmployeeIdRehireResponse

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdRehireResponse } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidrehire.js";

let value: PutV1EmployeesEmployeeIdRehireResponse = {
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