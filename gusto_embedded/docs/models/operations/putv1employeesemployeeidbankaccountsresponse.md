# PutV1EmployeesEmployeeIdBankAccountsResponse

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdBankAccountsResponse } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidbankaccounts.js";

let value: PutV1EmployeesEmployeeIdBankAccountsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `employeeBankAccount`                                                            | [components.EmployeeBankAccount](../../models/components/employeebankaccount.md) | :heavy_minus_sign:                                                               | Example response                                                                 |