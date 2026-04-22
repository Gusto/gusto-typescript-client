# Taxes

## Example Usage

```typescript
import { Taxes } from "@gusto/embedded-api/models/components/payrollreceipt.js";

let value: Taxes = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `name`                                                            | *string*                                                          | :heavy_minus_sign:                                                | The amount paid for this tax.                                     |
| `amount`                                                          | *string*                                                          | :heavy_minus_sign:                                                | The total amount paid by both employer and employee for this tax. |