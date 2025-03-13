# PutV1EmployeesEmployeeIdStateTaxesResponse

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdStateTaxesResponse } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidstatetaxes.js";

let value: PutV1EmployeesEmployeeIdStateTaxesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `httpMeta`                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)           | :heavy_check_mark:                                                           | N/A                                                                          |
| `employeeStateTaxesList`                                                     | [components.EmployeeStateTax](../../models/components/employeestatetax.md)[] | :heavy_minus_sign:                                                           | Example response                                                             |