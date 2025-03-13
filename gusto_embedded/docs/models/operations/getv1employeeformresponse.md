# GetV1EmployeeFormResponse

## Example Usage

```typescript
import { GetV1EmployeeFormResponse } from "@gusto/embedded-api/models/operations/getv1employeeform.js";

let value: GetV1EmployeeFormResponse = {
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
| `form`                                                             | [components.Form](../../models/components/form.md)                 | :heavy_minus_sign:                                                 | Example response                                                   |