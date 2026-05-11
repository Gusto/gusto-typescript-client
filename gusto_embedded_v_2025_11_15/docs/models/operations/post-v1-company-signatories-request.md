# PostV1CompanySignatoriesRequest

## Example Usage

```typescript
import { PostV1CompanySignatoriesRequest } from "openapi/models/operations";

let value: PostV1CompanySignatoriesRequest = {
  companyUuid: "<id>",
  body: {
    firstName: "Bridget",
    lastName: "Parker",
    title: "<value>",
    phone: "(477) 342-4434 x6800",
    birthday: new Date("2026-01-20"),
    email: "Hayley44@gmail.com",
    ssn: "<value>",
    homeAddress: {
      street1: "<value>",
      city: "Plantation",
      state: "South Carolina",
      zip: "93931",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1CompanySignatoriesXGustoAPIVersion](../../models/operations/post-v1-company-signatories-x-gusto-api-version.md)                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `body`                                                                                                                                                                                                                       | [models.SignatoryCreateRequest](../../models/signatory-create-request.md)                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |