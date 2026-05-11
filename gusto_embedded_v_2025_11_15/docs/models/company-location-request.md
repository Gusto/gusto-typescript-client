# CompanyLocationRequest

Request body for creating a company location (company address).

## Example Usage

```typescript
import { CompanyLocationRequest } from "openapi/models";

let value: CompanyLocationRequest = {
  street1: "300 3rd Street",
  street2: "Apartment 318",
  city: "San Francisco",
  state: "CA",
  zip: "94107",
  phoneNumber: "8009360383",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `street1`                                                    | *string*                                                     | :heavy_check_mark:                                           | Street address line 1.                                       | 300 3rd Street                                               |
| `street2`                                                    | *string*                                                     | :heavy_minus_sign:                                           | Street address line 2.                                       | Apartment 318                                                |
| `city`                                                       | *string*                                                     | :heavy_check_mark:                                           | City.                                                        | San Francisco                                                |
| `state`                                                      | *string*                                                     | :heavy_check_mark:                                           | State code (e.g. CA). Must be a valid two-letter state code. | CA                                                           |
| `zip`                                                        | *string*                                                     | :heavy_check_mark:                                           | ZIP code. Must be a valid US zip (e.g. 12345 or 12345-6789). | 94107                                                        |
| `country`                                                    | *string*                                                     | :heavy_minus_sign:                                           | Country code. Defaults to USA.                               | USA                                                          |
| `phoneNumber`                                                | *string*                                                     | :heavy_check_mark:                                           | Phone number. Must be 10 digits.                             | 8009360383                                                   |
| `mailingAddress`                                             | *boolean*                                                    | :heavy_minus_sign:                                           | Specify if this location is the company's mailing address.   |                                                              |
| `filingAddress`                                              | *boolean*                                                    | :heavy_minus_sign:                                           | Specify if this location is the company's filing address.    |                                                              |