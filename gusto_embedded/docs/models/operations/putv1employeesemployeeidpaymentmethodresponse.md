# PutV1EmployeesEmployeeIdPaymentMethodResponse

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdPaymentMethodResponse } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidpaymentmethod.js";

let value: PutV1EmployeesEmployeeIdPaymentMethodResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `httpMeta`                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `employeePaymentMethod`                                                              | [components.EmployeePaymentMethod](../../models/components/employeepaymentmethod.md) | :heavy_minus_sign:                                                                   | Example response                                                                     |