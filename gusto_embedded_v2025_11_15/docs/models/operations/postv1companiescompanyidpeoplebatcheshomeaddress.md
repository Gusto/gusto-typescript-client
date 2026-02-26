# PostV1CompaniesCompanyIdPeopleBatchesHomeAddress

Home address for the employee

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdPeopleBatchesHomeAddress } from "@gusto/embedded-api-v2025-11-15/models/operations/postv1companiescompanyidpeoplebatches.js";

let value: PostV1CompaniesCompanyIdPeopleBatchesHomeAddress = {
  street1: "<value>",
  city: "Shieldsborough",
  state: "Montana",
  zip: "09281",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `street1`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Street address line 1                                                                                                      |
| `street2`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Street address line 2                                                                                                      |
| `city`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | City                                                                                                                       |
| `state`                                                                                                                    | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | State abbreviation                                                                                                         |
| `zip`                                                                                                                      | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | ZIP code                                                                                                                   |
| `country`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Country (defaults to USA)                                                                                                  |
| `workFromHome`                                                                                                             | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | If true, a company work address will be created based on this home address and the `work_address` property is not allowed. |