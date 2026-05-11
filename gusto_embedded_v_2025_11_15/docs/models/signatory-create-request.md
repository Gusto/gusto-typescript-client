# SignatoryCreateRequest

Request body for creating a signatory with complete information. All listed required fields must be provided.

## Example Usage

```typescript
import { SignatoryCreateRequest } from "openapi/models";

let value: SignatoryCreateRequest = {
  firstName: "Corrine",
  lastName: "Schaden",
  title: "<value>",
  phone: "1-236-416-1168 x284",
  birthday: new Date("2024-10-14"),
  email: "Elmer20@yahoo.com",
  ssn: "<value>",
  homeAddress: {
    street1: "<value>",
    city: "Plantation",
    state: "South Carolina",
    zip: "93931",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `firstName`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The signatory's first name.                                                                    |
| `middleInitial`                                                                                | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `lastName`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | The signatory's last name.                                                                     |
| `title`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | The signatory's title (e.g. CEO, President).                                                   |
| `phone`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | The signatory's phone number.                                                                  |
| `birthday`                                                                                     | [Date](../types/rfcdate.md)                                                                    | :heavy_check_mark:                                                                             | The signatory's date of birth.                                                                 |
| `email`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | The signatory's email address.                                                                 |
| `ssn`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | The signatory's SSN.                                                                           |
| `homeAddress`                                                                                  | [models.SignatoryCreateRequestHomeAddress](../models/signatory-create-request-home-address.md) | :heavy_check_mark:                                                                             | The signatory's home address.                                                                  |