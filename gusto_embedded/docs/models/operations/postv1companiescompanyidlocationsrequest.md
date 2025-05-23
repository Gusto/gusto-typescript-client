# PostV1CompaniesCompanyIdLocationsRequest

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdLocationsRequest } from "@gusto/embedded-api/models/operations/postv1companiescompanyidlocations.js";

let value: PostV1CompaniesCompanyIdLocationsRequest = {
  companyId: "<id>",
  requestBody: {
    phoneNumber: "(584) 699-1419 x64119",
    street1: "<value>",
    city: "Brianstad",
    state: "Missouri",
    zip: "44022-3912",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [components.VersionHeader](../../models/components/versionheader.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `requestBody`                                                                                                                                                                                                                | [operations.PostV1CompaniesCompanyIdLocationsRequestBody](../../models/operations/postv1companiescompanyidlocationsrequestbody.md)                                                                                           | :heavy_check_mark:                                                                                                                                                                                                           | Create a company location.                                                                                                                                                                                                   |