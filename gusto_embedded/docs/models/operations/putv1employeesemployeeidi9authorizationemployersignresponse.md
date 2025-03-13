# PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidi9authorizationemployersign.js";

let value: PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `httpMeta`                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `i9Authorization`                                                        | [components.I9Authorization](../../models/components/i9authorization.md) | :heavy_minus_sign:                                                       | Example response                                                         |