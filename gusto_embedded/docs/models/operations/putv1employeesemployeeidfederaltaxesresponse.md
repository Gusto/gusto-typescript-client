# PutV1EmployeesEmployeeIdFederalTaxesResponse

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdFederalTaxesResponse } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidfederaltaxes.js";

let value: PutV1EmployeesEmployeeIdFederalTaxesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `httpMeta`                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)             | :heavy_check_mark:                                                             | N/A                                                                            |
| `employeeFederalTax`                                                           | [components.EmployeeFederalTax](../../models/components/employeefederaltax.md) | :heavy_minus_sign:                                                             | Example response                                                               |