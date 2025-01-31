# PostV1CompanySignatoriesRequestBody

## Example Usage

```typescript
import { PostV1CompanySignatoriesRequestBody } from "@gusto/embedded-api/models/operations";

let value: PostV1CompanySignatoriesRequestBody = {
  ssn: "<value>",
  firstName: "Sabina",
  lastName: "Glover",
  email: "Amya68@gmail.com",
  title: "<value>",
  phone: "517-267-7235 x231",
  birthday: "<value>",
  homeAddress: {
    street1: "<value>",
    city: "Alvenafield",
    state: "Arkansas",
    zip: "35960-4556",
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