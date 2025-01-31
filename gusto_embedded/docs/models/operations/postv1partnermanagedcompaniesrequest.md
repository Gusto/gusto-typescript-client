# PostV1PartnerManagedCompaniesRequest

## Example Usage

```typescript
import { PostV1PartnerManagedCompaniesRequest } from "@gusto/embedded-api/models/operations";

let value: PostV1PartnerManagedCompaniesRequest = {
  requestBody: {
    user: {
      firstName: "Tevin",
      lastName: "Zulauf",
      email: "Sanford84@gmail.com",
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
| `xGustoAPIVersion`                                                                                                                                                                                                           | [components.VersionHeader](../../models/components/versionheader.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `requestBody`                                                                                                                                                                                                                | [operations.PostV1PartnerManagedCompaniesRequestBody](../../models/operations/postv1partnermanagedcompaniesrequestbody.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |