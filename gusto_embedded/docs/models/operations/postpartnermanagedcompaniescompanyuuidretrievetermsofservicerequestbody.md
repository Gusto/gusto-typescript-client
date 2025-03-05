# PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody

## Example Usage

```typescript
import { PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody } from "@gusto/embedded-api/models/operations/postpartnermanagedcompaniescompanyuuidretrievetermsofservice.js";

let value:
  PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody = {
    email: "Liam.Heidenreich@hotmail.com",
  };
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                                                                   | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The user's email address on Gusto. You can retrieve the user's email via company's `/admins`, `/employees`, `/signatories`, and `/contractors` endpoints. |