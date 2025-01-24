# PostV1CompanySignatoriesRequestBody

## Example Usage

```typescript
import { PostV1CompanySignatoriesRequestBody } from "gusto-embedded/models/operations";

let value: PostV1CompanySignatoriesRequestBody = {
  ssn: "<value>",
  firstName: "Kylie",
  lastName: "Carroll",
  email: "Brendon_Hyatt18@yahoo.com",
  title: "<value>",
  phone: "497.790.5592 x210",
  birthday: "<value>",
  homeAddress: {
    street1: "<value>",
    city: "Passaic",
    state: "South Carolina",
    zip: "50498",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `ssn`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `firstName`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `middleInitial`                                                  | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `lastName`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `email`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `title`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `phone`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `birthday`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `homeAddress`                                                    | [operations.HomeAddress](../../models/operations/homeaddress.md) | :heavy_check_mark:                                               | The signatory's home address                                     |