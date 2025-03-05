# PostV1EmployeesEmployeeIdWorkAddressesRequestBody

## Example Usage

```typescript
import { PostV1EmployeesEmployeeIdWorkAddressesRequestBody } from "@gusto/embedded-api/models/operations/postv1employeesemployeeidworkaddresses.js";

let value: PostV1EmployeesEmployeeIdWorkAddressesRequestBody = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `locationUuid`                                          | *string*                                                | :heavy_minus_sign:                                      | Reference to a company location                         |
| `effectiveDate`                                         | [RFCDate](../../types/rfcdate.md)                       | :heavy_minus_sign:                                      | Date the employee began working at the company location |