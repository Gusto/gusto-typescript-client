# EmployeeHomeAddress

## Example Usage

```typescript
import { EmployeeHomeAddress } from "@gusto/embedded-api/models/components/employeehomeaddress.js";

let value: EmployeeHomeAddress = {
  street1: "412 Kiera Stravenue",
  street2: "Suite 391",
  city: "San Francisco",
  state: "CA",
  zip: "94107",
  active: true,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `street1`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `street2`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `city`                                                                                                                     | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `state`                                                                                                                    | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `zip`                                                                                                                      | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `country`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `active`                                                                                                                   | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | The status of the location. Inactive locations have been deleted, but may still have historical data associated with them. |
| `uuid`                                                                                                                     | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Unique identifier for this address.                                                                                        |