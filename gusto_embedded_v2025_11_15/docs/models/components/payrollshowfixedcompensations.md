# PayrollShowFixedCompensations

## Example Usage

```typescript
import { PayrollShowFixedCompensations } from "@gusto/embedded-api-v2025-11-15/models/components/payroll.js";

let value: PayrollShowFixedCompensations = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The name of the compensation. This also serves as the unique, immutable identifier for this compensation. |
| `amount`                                                                                                  | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The amount of the compensation for the pay period.                                                        |
| `jobUuid`                                                                                                 | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The UUID of the job for the compensation.                                                                 |