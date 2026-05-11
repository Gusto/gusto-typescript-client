# ExternalPayrollUpdateRequestBenefit

## Example Usage

```typescript
import { ExternalPayrollUpdateRequestBenefit } from "openapi/models";

let value: ExternalPayrollUpdateRequestBenefit = {
  benefitId: 22,
  companyContributionAmount: "100.00",
  employeeDeductionAmount: "50.00",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `benefitId`                                 | *number*                                    | :heavy_minus_sign:                          | The ID of the company benefit.              | 22                                          |
| `companyContributionAmount`                 | *string*                                    | :heavy_minus_sign:                          | The company contribution amount in dollars. | 100.00                                      |
| `employeeDeductionAmount`                   | *string*                                    | :heavy_minus_sign:                          | The employee deduction amount in dollars.   | 50.00                                       |