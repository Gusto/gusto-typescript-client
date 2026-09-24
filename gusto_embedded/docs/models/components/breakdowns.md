# Breakdowns

## Example Usage

```typescript
import { Breakdowns } from "@gusto/embedded-api/models/components/payrollemployeecompensationstype.js";

let value: Breakdowns = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `startDate`                          | [RFCDate](../../types/rfcdate.md)    | :heavy_minus_sign:                   | The start date of the workweek.      |
| `endDate`                            | [RFCDate](../../types/rfcdate.md)    | :heavy_minus_sign:                   | The end date of the workweek.        |
| `amount`                             | *string*                             | :heavy_minus_sign:                   | The dollar amount for this workweek. |