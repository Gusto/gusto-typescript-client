# PartnerManagedCompanyAcceptTermsOfServiceRequest

## Example Usage

```typescript
import { PartnerManagedCompanyAcceptTermsOfServiceRequest } from "@gusto/embedded-api/models/components/partnermanagedcompanyaccepttermsofservicerequest.js";

let value: PartnerManagedCompanyAcceptTermsOfServiceRequest = {
  email: "Eulah58@hotmail.com",
  ipAddress: "139.215.142.83",
  externalUserId: "<id>",
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                                                                   | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The user's email address on Gusto. You can retrieve the user's email via company's `/admins`, `/employees`, `/signatories`, and `/contractors` endpoints. |
| `ipAddress`                                                                                                                                               | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The IP address of the user who viewed and accepted the Terms of Service.                                                                                  |
| `externalUserId`                                                                                                                                          | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The user ID on your platform.                                                                                                                             |