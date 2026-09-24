# PayrollUpdateBreakdowns

## Example Usage

```typescript
import { PayrollUpdateBreakdowns } from "@gusto/embedded-api-v-2025-11-15/models/components/payrollupdate.js";

let value: PayrollUpdateBreakdowns = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `startDate`                          | [RFCDate](../../types/rfcdate.md)    | :heavy_minus_sign:                   | The start date of the workweek.      |
| `endDate`                            | [RFCDate](../../types/rfcdate.md)    | :heavy_minus_sign:                   | The end date of the workweek.        |
| `amount`                             | *string*                             | :heavy_minus_sign:                   | The dollar amount for this workweek. |