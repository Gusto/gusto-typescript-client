# PutV1EmployeeFormSignResponse

## Example Usage

```typescript
import { PutV1EmployeeFormSignResponse } from "@gusto/embedded-api/models/operations/putv1employeeformsign.js";

let value: PutV1EmployeeFormSignResponse = {
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