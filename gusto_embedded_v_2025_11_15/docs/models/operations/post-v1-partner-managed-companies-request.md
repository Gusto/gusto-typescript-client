# PostV1PartnerManagedCompaniesRequest

## Example Usage

```typescript
import { PostV1PartnerManagedCompaniesRequest } from "openapi/models/operations";

let value: PostV1PartnerManagedCompaniesRequest = {
  body: {
    user: {
      firstName: "Torey",
      lastName: "Beer",
      email: "Ila_Leannon@yahoo.com",
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
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1PartnerManagedCompaniesXGustoAPIVersion](../../models/operations/post-v1-partner-managed-companies-x-gusto-api-version.md)                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `body`                                                                                                                                                                                                                       | [models.PartnerManagedCompanyCreateRequest](../../models/partner-managed-company-create-request.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |