# HistoricalEmployeeBodyHomeAddress

Residential address on file for tax withholding and compliance mail.

## Example Usage

```typescript
import { HistoricalEmployeeBodyHomeAddress } from "@gusto/embedded-api/models/components/historicalemployeebody.js";

let value: HistoricalEmployeeBodyHomeAddress = {
  street1: "55 Mission St",
  street2: "Floor 3",
  city: "San Francisco",
  state: "CA",
  zip: "94105",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `street1`                                               | *string*                                                | :heavy_check_mark:                                      | Street address line 1.                                  | 55 Mission St                                           |
| `street2`                                               | *string*                                                | :heavy_minus_sign:                                      | Apartment, suite, unit, or building (optional).         | Floor 3                                                 |
| `city`                                                  | *string*                                                | :heavy_check_mark:                                      | City.                                                   | San Francisco                                           |
| `state`                                                 | *string*                                                | :heavy_check_mark:                                      | Two-letter U.S. state or territory postal abbreviation. | CA                                                      |
| `zip`                                                   | *string*                                                | :heavy_check_mark:                                      | ZIP or ZIP+4.                                           | 94105                                                   |