# BenefitSummary

Benefit summary response

## Example Usage

```typescript
import { BenefitSummary } from "gusto-embedded/models/components";

let value: BenefitSummary = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `startDate`                                                                                                        | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The start date of benefit summary.                                                                                 |
| `endDate`                                                                                                          | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The end date of benefit summary.                                                                                   |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Description of the benefit.                                                                                        |
| `companyBenefitDeduction`                                                                                          | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The aggregate of employee deduction for all employees given the period of time and the specific company benefit.   |
| `companyBenefitContribution`                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The aggregate of company contribution for all employees given the period of time and the specific company benefit. |
| `employees`                                                                                                        | [components.BenefitSummaryEmployees](../../models/components/benefitsummaryemployees.md)                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |