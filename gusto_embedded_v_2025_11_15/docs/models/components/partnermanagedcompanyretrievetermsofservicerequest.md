# PartnerManagedCompanyRetrieveTermsOfServiceRequest

## Example Usage

```typescript
import { PartnerManagedCompanyRetrieveTermsOfServiceRequest } from "@gusto/embedded-api-v-2025-11-15/models/components/partnermanagedcompanyretrievetermsofservicerequest.js";

let value: PartnerManagedCompanyRetrieveTermsOfServiceRequest = {
  email: "Providenci_Williamson@yahoo.com",
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                                                                   | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The user's email address on Gusto. You can retrieve the user's email via company's `/admins`, `/employees`, `/signatories`, and `/contractors` endpoints. |