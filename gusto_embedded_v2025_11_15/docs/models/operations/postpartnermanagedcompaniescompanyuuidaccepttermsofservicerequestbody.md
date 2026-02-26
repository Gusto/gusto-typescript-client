# PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody

## Example Usage

```typescript
import { PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody } from "@gusto/embedded-api-v2025-11-15/models/operations/postpartnermanagedcompaniescompanyuuidaccepttermsofservice.js";

let value:
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody = {
    email: "Evelyn_Trantow87@yahoo.com",
    ipAddress: "179.126.67.26",
    externalUserId: "<id>",
  };
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                                                                   | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The user's email address on Gusto. You can retrieve the user's email via company's `/admins`, `/employees`, `/signatories`, and `/contractors` endpoints. |
| `ipAddress`                                                                                                                                               | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The IP address of the user who viewed and accepted the Terms of Service.                                                                                  |
| `externalUserId`                                                                                                                                          | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The user ID on your platform.                                                                                                                             |