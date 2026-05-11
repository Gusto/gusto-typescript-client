# PostV1PartnerManagedCompaniesRequest

## Example Usage

```typescript
import { PostV1PartnerManagedCompaniesRequest } from "@gusto/embedded-api/models/operations/postv1partnermanagedcompanies.js";

let value: PostV1PartnerManagedCompaniesRequest = {
  partnerManagedCompanyCreateRequest: {
    user: {
      firstName: "Luella",
      lastName: "Kemmer",
      email: "Lori.Ward@yahoo.com",
    },
    company: {
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1PartnerManagedCompaniesHeaderXGustoAPIVersion](../../models/operations/postv1partnermanagedcompaniesheaderxgustoapiversion.md)                                                                             | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `partnerManagedCompanyCreateRequest`                                                                                                                                                                                         | [components.PartnerManagedCompanyCreateRequest](../../models/components/partnermanagedcompanycreaterequest.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |