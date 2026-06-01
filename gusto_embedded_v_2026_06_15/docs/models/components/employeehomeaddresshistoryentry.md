# EmployeeHomeAddressHistoryEntry

A single entry in an employee's home-address history. Returned in the
`all_home_addresses` array; includes the `effective_date` the address
became active in addition to the shared `Employee-Home-Address` fields.


## Example Usage

```typescript
import { EmployeeHomeAddressHistoryEntry } from "@gusto/embedded-api-v-2026-06-15/models/components/employeehomeaddresshistoryentry.js";
import { RFCDate } from "@gusto/embedded-api-v-2026-06-15/types/rfcdate.js";

let value: EmployeeHomeAddressHistoryEntry = {
  street1: "412 Kiera Stravenue",
  street2: "Suite 391",
  city: "San Francisco",
  state: "CA",
  zip: "94107",
  active: true,
  effectiveDate: new RFCDate("2024-01-01"),
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
| `effectiveDate`                                                                                                            | [RFCDate](../../types/rfcdate.md)                                                                                          | :heavy_minus_sign:                                                                                                         | The date the address became effective.                                                                                     |