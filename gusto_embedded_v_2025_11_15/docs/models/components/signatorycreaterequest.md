# SignatoryCreateRequest

Request body for creating a signatory with complete information. All listed required fields must be provided.

## Example Usage

```typescript
import { SignatoryCreateRequest } from "@gusto/embedded-api-v-2025-11-15/models/components/signatorycreaterequest.js";
import { RFCDate } from "@gusto/embedded-api-v-2025-11-15/types/rfcdate.js";

let value: SignatoryCreateRequest = {
  firstName: "Corrine",
  lastName: "Schaden",
  title: "<value>",
  phone: "1-236-416-1168 x284",
  birthday: new RFCDate("2024-10-14"),
  email: "Elmer20@yahoo.com",
  ssn: "<value>",
  homeAddress: {
    street1: "<value>",
    city: "West Erynshire",
    state: "Connecticut",
    zip: "44594-7261",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `firstName`                                                      | *string*                                                         | :heavy_check_mark:                                               | The signatory's first name.                                      |
| `middleInitial`                                                  | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `lastName`                                                       | *string*                                                         | :heavy_check_mark:                                               | The signatory's last name.                                       |
| `title`                                                          | *string*                                                         | :heavy_check_mark:                                               | The signatory's title (e.g. CEO, President).                     |
| `phone`                                                          | *string*                                                         | :heavy_check_mark:                                               | The signatory's phone number.                                    |
| `birthday`                                                       | [RFCDate](../../types/rfcdate.md)                                | :heavy_check_mark:                                               | The signatory's date of birth.                                   |
| `email`                                                          | *string*                                                         | :heavy_check_mark:                                               | The signatory's email address.                                   |
| `ssn`                                                            | *string*                                                         | :heavy_check_mark:                                               | The signatory's SSN.                                             |
| `homeAddress`                                                    | [components.HomeAddress](../../models/components/homeaddress.md) | :heavy_check_mark:                                               | The signatory's home address.                                    |