# PostV1CompanySignatoriesRequest

## Example Usage

```typescript
import { PostV1CompanySignatoriesRequest } from "@gusto/embedded-api/models/operations/postv1companysignatories.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

let value: PostV1CompanySignatoriesRequest = {
  companyUuid: "<id>",
  signatoryCreateRequest: {
    firstName: "Bridget",
    lastName: "Parker",
    title: "<value>",
    phone: "(477) 342-4434 x6800",
    birthday: new RFCDate("2026-01-20"),
    email: "Hayley44@gmail.com",
    ssn: "<value>",
    homeAddress: {
      street1: "<value>",
      city: "West Erynshire",
      state: "Connecticut",
      zip: "44594-7261",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1CompanySignatoriesHeaderXGustoAPIVersion](../../models/operations/postv1companysignatoriesheaderxgustoapiversion.md)                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `signatoryCreateRequest`                                                                                                                                                                                                     | [components.SignatoryCreateRequest](../../models/components/signatorycreaterequest.md)                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |