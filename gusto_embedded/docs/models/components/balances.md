# Balances

## Example Usage

```typescript
import { Balances } from "@gusto/embedded-api/models/components/embeddedtimeoffbalance.js";

let value: Balances = {
  policyUuid: "c2d9b1bd-3f36-4c2d-a727-b2af057d6a7f",
  balanceHours: "32.0",
  accruedHours: "40.0",
  usedHours: "8.0",
  pendingHours: "0.0",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `policyUuid`                                                    | *string*                                                        | :heavy_minus_sign:                                              | The UUID of the time off policy.                                | c2d9b1bd-3f36-4c2d-a727-b2af057d6a7f                            |
| `balanceHours`                                                  | *string*                                                        | :heavy_minus_sign:                                              | The employee's current available balance hours for this policy. | 32.0                                                            |
| `accruedHours`                                                  | *string*                                                        | :heavy_minus_sign:                                              | The total hours accrued year-to-date for this policy.           | 40.0                                                            |
| `usedHours`                                                     | *string*                                                        | :heavy_minus_sign:                                              | The total hours used year-to-date for this policy.              | 8.0                                                             |
| `pendingHours`                                                  | *string*                                                        | :heavy_minus_sign:                                              | The total hours from pending time off requests for this policy. | 0.0                                                             |