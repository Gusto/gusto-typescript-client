# YtdBenefitAmountsFromDifferentCompanyBody

Year-to-date benefit amounts contributed at a different company for the specified employee.

## Example Usage

```typescript
import { YtdBenefitAmountsFromDifferentCompanyBody } from "@gusto/embedded-api-v-2025-11-15/models/components/ytdbenefitamountsfromdifferentcompanybody.js";

let value: YtdBenefitAmountsFromDifferentCompanyBody = {
  benefitType: 373738,
  taxYear: 9987.01,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `benefitType`                                                           | *number*                                                                | :heavy_check_mark:                                                      | The benefit type supported by Gusto.                                    |
| `taxYear`                                                               | *number*                                                                | :heavy_check_mark:                                                      | The tax year for which this amount applies.                             |
| `ytdEmployeeDeductionAmount`                                            | *string*                                                                | :heavy_minus_sign:                                                      | The year-to-date employee deduction made outside the current company.   |
| `ytdCompanyContributionAmount`                                          | *string*                                                                | :heavy_minus_sign:                                                      | The year-to-date company contribution made outside the current company. |