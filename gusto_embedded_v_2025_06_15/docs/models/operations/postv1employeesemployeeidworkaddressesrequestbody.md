# PostV1EmployeesEmployeeIdWorkAddressesRequestBody

## Example Usage

```typescript
import { PostV1EmployeesEmployeeIdWorkAddressesRequestBody } from "@gusto/embedded-api/models/operations/postv1employeesemployeeidworkaddresses.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

let value: PostV1EmployeesEmployeeIdWorkAddressesRequestBody = {
  locationUuid: "6a119be7-b4b0-4e27-aaa0-89d5f2524635",
  effectiveDate: new RFCDate("2023-05-15"),
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `locationUuid`                                          | *string*                                                | :heavy_minus_sign:                                      | Reference to a company location                         | 6a119be7-b4b0-4e27-aaa0-89d5f2524635                    |
| `effectiveDate`                                         | [RFCDate](../../types/rfcdate.md)                       | :heavy_minus_sign:                                      | Date the employee began working at the company location | 2023-05-15                                              |