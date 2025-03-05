# PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody

## Example Usage

```typescript
import { PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody } from "@gusto/embedded-api/models/operations/postpartnermanagedcompaniescompanyuuidaccepttermsofservice.js";

let value:
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody = {
    email: "Katrine.Willms24@gmail.com",
    ipAddress: "237.171.200.72",
    externalUserId: "<id>",
  };
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                                                                   | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The user's email address on Gusto. You can retrieve the user's email via company's `/admins`, `/employees`, `/signatories`, and `/contractors` endpoints. |
| `ipAddress`                                                                                                                                               | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The IP address of the user who viewed and accepted the Terms of Service.                                                                                  |
| `externalUserId`                                                                                                                                          | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The user ID on your platform.                                                                                                                             |