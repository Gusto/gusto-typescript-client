# Totals

The subtotals for the payroll.

## Example Usage

```typescript
import { Totals } from "@gusto/embedded-api-v2025-11-15/models/components/payrollreceipt.js";

let value: Totals = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `companyDebit`                                 | *string*                                       | :heavy_minus_sign:                             | The total company debit for the payroll.       |
| `netPayDebit`                                  | *string*                                       | :heavy_minus_sign:                             | The total company net pay for the payroll.     |
| `childSupportDebit`                            | *string*                                       | :heavy_minus_sign:                             | The total child support debit for the payroll. |
| `reimbursementDebit`                           | *string*                                       | :heavy_minus_sign:                             | The total reimbursements for the payroll.      |
| `taxDebit`                                     | *string*                                       | :heavy_minus_sign:                             | The total tax debit for the payroll.           |