# ExternalPayrollUpdateRequestBenefits

## Example Usage

```typescript
import { ExternalPayrollUpdateRequestBenefits } from "@gusto/embedded-api-v-2026-02-01/models/components/externalpayrollupdaterequest.js";

let value: ExternalPayrollUpdateRequestBenefits = {
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