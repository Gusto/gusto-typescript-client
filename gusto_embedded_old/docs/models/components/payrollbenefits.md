# PayrollBenefits

## Example Usage

```typescript
import { PayrollBenefits } from "openapi/models/components";

let value: PayrollBenefits = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `payrollUuid`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `payrollType`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | Whether it is regular or bonus payroll                                                   |
| `checkDate`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | Check date of this payroll.                                                              |
| `grossPay`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | Gross pay for this employee on the payroll.                                              |
| `imputedPay`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | Total imputed pay for this employee on the payroll.                                      |
| `companyBenefitDeduction`                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | The employee benefit deduction amount for this employee on the payroll.                  |
| `companyBenefitContribution`                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | The company contribution amount for this employee on the payroll.                        |
| `payPeriod`                                                                              | [components.BenefitSummaryPayPeriod](../../models/components/benefitsummarypayperiod.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |