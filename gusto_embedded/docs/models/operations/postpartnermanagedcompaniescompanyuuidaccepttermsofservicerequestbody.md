# PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody

## Example Usage

```typescript
import { PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody } from "gusto-embedded/models/operations";

let value:
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody = {
    email: "Elvis94@hotmail.com",
    ipAddress: "58.65.14.111",
    externalUserId: "<id>",
  };
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                                                                   | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The user's email address on Gusto. You can retrieve the user's email via company's `/admins`, `/employees`, `/signatories`, and `/contractors` endpoints. |
| `ipAddress`                                                                                                                                               | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The IP address of the user who viewed and accepted the Terms of Service.                                                                                  |
| `externalUserId`                                                                                                                                          | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The user ID on your platform.                                                                                                                             |