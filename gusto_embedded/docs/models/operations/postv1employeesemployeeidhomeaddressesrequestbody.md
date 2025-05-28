# PostV1EmployeesEmployeeIdHomeAddressesRequestBody

## Example Usage

```typescript
import { PostV1EmployeesEmployeeIdHomeAddressesRequestBody } from "@gusto/embedded-api/models/operations/postv1employeesemployeeidhomeaddresses.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

let value: PostV1EmployeesEmployeeIdHomeAddressesRequestBody = {
  street1: "300 3rd Street",
  city: "San Francisco",
  state: "CA",
  zip: "94107",
  effectiveDate: new RFCDate("2022-01-31"),
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `street1`                         | *string*                          | :heavy_minus_sign:                | N/A                               | 300 3rd Street                    |
| `street2`                         | *string*                          | :heavy_minus_sign:                | N/A                               |                                   |
| `city`                            | *string*                          | :heavy_minus_sign:                | N/A                               | San Francisco                     |
| `state`                           | *string*                          | :heavy_minus_sign:                | N/A                               | CA                                |
| `zip`                             | *string*                          | :heavy_minus_sign:                | N/A                               | 94107                             |
| `effectiveDate`                   | [RFCDate](../../types/rfcdate.md) | :heavy_minus_sign:                | N/A                               | 2022-01-31                        |
| `courtesyWithholding`             | *boolean*                         | :heavy_minus_sign:                | N/A                               |                                   |