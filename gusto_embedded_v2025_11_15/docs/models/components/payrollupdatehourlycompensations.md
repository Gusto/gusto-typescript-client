# PayrollUpdateHourlyCompensations

An array of hourly compensations for the employee. Hourly compensations include regular, overtime, and double overtime hours.

## Example Usage

```typescript
import { PayrollUpdateHourlyCompensations } from "@gusto/embedded-api-v2025-11-15/models/components/payrollupdate.js";

let value: PayrollUpdateHourlyCompensations = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The name of the compensation. This also serves as the unique, immutable identifier for this compensation. |
| `hours`                                                                                                   | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The number of hours to be compensated for this pay period.                                                |
| `jobUuid`                                                                                                 | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The UUIDs of the job for the compensation.                                                                |