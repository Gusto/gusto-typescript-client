# PostEmployeeYtdBenefitAmountsFromDifferentCompany

## Example Usage

```typescript
import { PostEmployeeYtdBenefitAmountsFromDifferentCompany } from "@gusto/embedded-api/models/components/postemployeeytdbenefitamountsfromdifferentcompany.js";

let value: PostEmployeeYtdBenefitAmountsFromDifferentCompany = {
  taxYear: 7149.33,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `benefitType`                                                           | *number*                                                                | :heavy_minus_sign:                                                      | The benefit type supported by Gusto.                                    |
| `taxYear`                                                               | *number*                                                                | :heavy_check_mark:                                                      | The tax year for which this amount applies.                             |
| `ytdEmployeeDeductionAmount`                                            | *string*                                                                | :heavy_minus_sign:                                                      | The year-to-date employee deduction made outside the current company.   |
| `ytdCompanyContributionAmount`                                          | *string*                                                                | :heavy_minus_sign:                                                      | The year-to-date company contribution made outside the current company. |