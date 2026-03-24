# SignatoryInviteRequest

Request body for inviting a signatory.

## Example Usage

```typescript
import { SignatoryInviteRequest } from "@gusto/embedded-api-v2025-06-15/models/components/signatoryinviterequest.js";

let value: SignatoryInviteRequest = {
  firstName: "Brandyn",
  lastName: "Rempel",
  email: "Mortimer_Gutkowski41@yahoo.com",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `firstName`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The signatory's first name.                                                                                  |
| `lastName`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The signatory's last name.                                                                                   |
| `title`                                                                                                      | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The signatory's title (e.g. CEO, President).                                                                 |
| `phone`                                                                                                      | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The signatory's phone number.                                                                                |
| `birthday`                                                                                                   | [RFCDate](../../types/rfcdate.md)                                                                            | :heavy_minus_sign:                                                                                           | The signatory's date of birth.                                                                               |
| `email`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The signatory's email address.                                                                               |
| `ssn`                                                                                                        | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The signatory's SSN. Required for create with complete information; not used for invite.                     |
| `homeAddress`                                                                                                | [components.SignatoryInviteRequestHomeAddress](../../models/components/signatoryinviterequesthomeaddress.md) | :heavy_minus_sign:                                                                                           | The signatory's home address.                                                                                |