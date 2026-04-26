# EmbeddedTimeOffBalance

Time off balance for an employee, grouped by policy.

## Example Usage

```typescript
import { EmbeddedTimeOffBalance } from "@gusto/embedded-api/models/components/embeddedtimeoffbalance.js";

let value: EmbeddedTimeOffBalance = {
  employeeUuid: "51924fa0-26c6-4d4c-8832-3ef0b422c67e",
  balances: [
    {
      policyUuid: "c2d9b1bd-3f36-4c2d-a727-b2af057d6a7f",
      balanceHours: "32.0",
      accruedHours: "40.0",
      usedHours: "8.0",
      pendingHours: "0.0",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `employeeUuid`                                               | *string*                                                     | :heavy_minus_sign:                                           | The UUID of the employee.                                    | 51924fa0-26c6-4d4c-8832-3ef0b422c67e                         |
| `balances`                                                   | [components.Balances](../../models/components/balances.md)[] | :heavy_minus_sign:                                           | The employee's time off balances, one entry per policy.      |                                                              |