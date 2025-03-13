# GetV1EmployeesEmployeeIdI9AuthorizationResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdI9AuthorizationResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidi9authorization.js";

let value: GetV1EmployeesEmployeeIdI9AuthorizationResponse = {
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