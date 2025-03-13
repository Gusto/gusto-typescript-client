# PostV1CompaniesCompanyIdAdminsRequestBody

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdAdminsRequestBody } from "@gusto/embedded-api/models/operations/postv1companiescompanyidadmins.js";

let value: PostV1CompaniesCompanyIdAdminsRequestBody = {
  firstName: "Modesta",
  lastName: "Turner",
  email: "Maximus_Roob24@hotmail.com",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `firstName`                                                                                                                   | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The first name of the admin.                                                                                                  |
| `lastName`                                                                                                                    | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The last name of the admin.                                                                                                   |
| `email`                                                                                                                       | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The email of the admin for Gusto's system. If the email matches an existing user, this will create an admin account for them. |