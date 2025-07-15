# PostV1CompanySignatoriesRequest

## Example Usage

```typescript
import { PostV1CompanySignatoriesRequest } from "@gusto/embedded-api/models/operations/postv1companysignatories.js";

let value: PostV1CompanySignatoriesRequest = {
  companyUuid: "<id>",
  requestBody: {
    ssn: "<value>",
    firstName: "Bridget",
    lastName: "Parker",
    email: "Flavio.Rippin42@yahoo.com",
    title: "<value>",
    phone: "534.780.0624 x537",
    birthday: "<value>",
    homeAddress: {
      street1: "<value>",
      city: "Haleyport",
      state: "Idaho",
      zip: "25196",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [components.VersionHeader](../../models/components/versionheader.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `requestBody`                                                                                                                                                                                                                | [operations.PostV1CompanySignatoriesRequestBody](../../models/operations/postv1companysignatoriesrequestbody.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |