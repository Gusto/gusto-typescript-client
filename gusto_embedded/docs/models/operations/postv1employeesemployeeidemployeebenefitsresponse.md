# PostV1EmployeesEmployeeIdEmployeeBenefitsResponse

## Example Usage

```typescript
import { PostV1EmployeesEmployeeIdEmployeeBenefitsResponse } from "@gusto/embedded-api/models/operations/postv1employeesemployeeidemployeebenefits.js";

let value: PostV1EmployeesEmployeeIdEmployeeBenefitsResponse = {
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
| `employeeBenefit`                                                        | [components.EmployeeBenefit](../../models/components/employeebenefit.md) | :heavy_minus_sign:                                                       | Example response                                                         |