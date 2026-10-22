# PayAdjustments

## Example Usage

```typescript
import { PayAdjustments } from "@gusto/embedded-api/models/components/payrollshow.js";

let value: PayAdjustments = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `name`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | The compensation type the adjustment applies to (e.g. `Overtime`, `Double Overtime`). |
| `amount`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | The dollar amount of the adjustment.                                                  |