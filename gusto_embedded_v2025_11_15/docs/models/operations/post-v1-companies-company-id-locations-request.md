# PostV1CompaniesCompanyIdLocationsRequest

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdLocationsRequest } from "openapi/models/operations";

let value: PostV1CompaniesCompanyIdLocationsRequest = {
  companyId: "<id>",
  body: {
    street1: "300 3rd Street",
    street2: "Apartment 318",
    city: "San Francisco",
    state: "CA",
    zip: "94107",
    phoneNumber: "8009360383",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1CompaniesCompanyIdLocationsXGustoAPIVersion](../../models/operations/post-v1-companies-company-id-locations-x-gusto-api-version.md)                                                                        | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `companyId`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `body`                                                                                                                                                                                                                       | [models.CompanyLocationRequest](../../models/company-location-request.md)                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |