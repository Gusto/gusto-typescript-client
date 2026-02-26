# PayrollReversal

Example response

## Example Usage

```typescript
import { PayrollReversal } from "openapi/models";

let value: PayrollReversal = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `reversedPayrollUuid`                                    | *string*                                                 | :heavy_minus_sign:                                       | The UUID for the payroll run being reversed.             |
| `reversalPayrollUuid`                                    | *string*                                                 | :heavy_minus_sign:                                       | The UUID of the payroll where the reversal was applied.  |
| `reason`                                                 | *string*                                                 | :heavy_minus_sign:                                       | A reason provided by the admin who created the reversal. |
| `approvedAt`                                             | *string*                                                 | :heavy_minus_sign:                                       | Timestamp of when the reversal was approved.             |
| `category`                                               | *string*                                                 | :heavy_minus_sign:                                       | Category chosen by the admin who requested the reversal. |
| `reversedEmployeeUuids`                                  | *string*[]                                               | :heavy_minus_sign:                                       | Array of affected employee UUIDs.                        |