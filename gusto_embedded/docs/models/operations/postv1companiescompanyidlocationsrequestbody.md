# PostV1CompaniesCompanyIdLocationsRequestBody

Create a company location.

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdLocationsRequestBody } from "@gusto/embedded-api/models/operations/postv1companiescompanyidlocations.js";

let value: PostV1CompaniesCompanyIdLocationsRequestBody = {
  phoneNumber: "482.696.8976 x994",
  street1: "<value>",
  city: "West Camylleview",
  state: "Connecticut",
  zip: "38952-5845",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `phoneNumber`                                              | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `street1`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `street2`                                                  | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `city`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `state`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `zip`                                                      | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `mailingAddress`                                           | *boolean*                                                  | :heavy_minus_sign:                                         | Specify if this location is the company's mailing address. |
| `filingAddress`                                            | *boolean*                                                  | :heavy_minus_sign:                                         | Specify if this location is the company's filing address.  |