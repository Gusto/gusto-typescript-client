# PayrollDigestResultsTotals

Pay totals. `null` when the payroll has not been calculated, or when the calculation is stale (the partner edited hours/earnings after the last calculation).

## Example Usage

```typescript
import { PayrollDigestResultsTotals } from "@gusto/embedded-api-v-2025-11-15/models/components/payrolldigestresults.js";

let value: PayrollDigestResultsTotals = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `totalDebitAmount`                                                             | *string*                                                                       | :heavy_minus_sign:                                                             | Total amount debited from the company bank account (string-formatted decimal). |
| `netPay`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | Total net pay across all employees on this payroll (string-formatted decimal). |
| `totalEmployerCost`                                                            | *string*                                                                       | :heavy_minus_sign:                                                             | Total employer cost including taxes and benefits (string-formatted decimal).   |