# PayrollShowEmployeeCompensationsBreakdowns

## Example Usage

```typescript
import { PayrollShowEmployeeCompensationsBreakdowns } from "@gusto/embedded-api-v-2026-06-15/models/components/payrollshow.js";

let value: PayrollShowEmployeeCompensationsBreakdowns = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `startDate`                          | [Date](../../types/rfcdate.md)       | :heavy_minus_sign:                   | The start date of the workweek.      |
| `endDate`                            | [Date](../../types/rfcdate.md)       | :heavy_minus_sign:                   | The end date of the workweek.        |
| `amount`                             | *string*                             | :heavy_minus_sign:                   | The dollar amount for this workweek. |