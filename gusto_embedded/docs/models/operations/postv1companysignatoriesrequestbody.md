# PostV1CompanySignatoriesRequestBody

## Example Usage

```typescript
import { PostV1CompanySignatoriesRequestBody } from "@gusto/embedded-api/models/operations/postv1companysignatories.js";

let value: PostV1CompanySignatoriesRequestBody = {
  ssn: "<value>",
  firstName: "Catharine",
  lastName: "Brakus",
  email: "Leonor_Schroeder@gmail.com",
  title: "<value>",
  phone: "358-787-3159",
  birthday: "<value>",
  homeAddress: {
    street1: "<value>",
    city: "Haleyport",
    state: "Idaho",
    zip: "25196",
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