# FixedCompensations

## Example Usage

```typescript
import { FixedCompensations } from "@gusto/embedded-api-v-2026-02-01/models/components/payrollemployeecompensationstype.js";

let value: FixedCompensations = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The name of the compensation. This also serves as the unique, immutable identifier for this compensation. |
| `amount`                                                                                                  | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The amount of the compensation for the pay period.                                                        |
| `jobUuid`                                                                                                 | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The UUID of the job for the compensation.                                                                 |
| `breakdowns`                                                                                              | [components.Breakdowns](../../models/components/breakdowns.md)[]                                          | :heavy_minus_sign:                                                                                        | Per-workweek amounts for this compensation, one entry per workweek<br/>overlapping the pay period.<br/>   |