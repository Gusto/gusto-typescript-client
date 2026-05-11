# PostV1EmployeesEmployeeIdWorkAddressesRequestBody

## Example Usage

```typescript
import { PostV1EmployeesEmployeeIdWorkAddressesRequestBody } from "openapi/models/operations";

let value: PostV1EmployeesEmployeeIdWorkAddressesRequestBody = {
  locationUuid: "6a119be7-b4b0-4e27-aaa0-89d5f2524635",
  effectiveDate: new Date("2023-05-15"),
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `locationUuid`                                          | *string*                                                | :heavy_minus_sign:                                      | Reference to a company location                         | 6a119be7-b4b0-4e27-aaa0-89d5f2524635                    |
| `effectiveDate`                                         | [Date](../../types/rfcdate.md)                          | :heavy_minus_sign:                                      | Date the employee began working at the company location | 2023-05-15                                              |