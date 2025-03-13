# GetDepartmentResponse

## Example Usage

```typescript
import { GetDepartmentResponse } from "@gusto/embedded-api/models/operations/getdepartment.js";

let value: GetDepartmentResponse = {
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
| `department`                                                       | [components.Department](../../models/components/department.md)     | :heavy_minus_sign:                                                 | Department Object Example                                          |