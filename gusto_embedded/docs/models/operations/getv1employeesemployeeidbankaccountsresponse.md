# GetV1EmployeesEmployeeIdBankAccountsResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdBankAccountsResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidbankaccounts.js";

let value: GetV1EmployeesEmployeeIdBankAccountsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `httpMeta`                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `employeeBankAccountList`                                                          | [components.EmployeeBankAccount](../../models/components/employeebankaccount.md)[] | :heavy_minus_sign:                                                                 | Example response                                                                   |