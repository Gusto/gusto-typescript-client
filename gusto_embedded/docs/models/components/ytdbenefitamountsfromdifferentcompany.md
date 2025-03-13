# YtdBenefitAmountsFromDifferentCompany

Ytd Benefit Amounts From Different Company

## Example Usage

```typescript
import { YtdBenefitAmountsFromDifferentCompany } from "@gusto/embedded-api/models/components/ytdbenefitamountsfromdifferentcompany.js";

let value: YtdBenefitAmountsFromDifferentCompany = {
  uuid: "4cba3df8-a844-453e-bd75-f38039a9dfc7",
  benefitType: 120387,
  ytdEmployeeDeductionAmount: "<value>",
  ytdCompanyContributionAmount: "<value>",
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                                                            | *string*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | The unique identifier for this benefit amount record.                                                                                             |
| `benefitType`                                                                                                                                     | *number*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | The benefit type supported by Gusto. See [Benefit Types](https://docs.gusto.com/embedded-payroll/reference/get-v1-benefits) for more information. |
| `ytdEmployeeDeductionAmount`                                                                                                                      | *string*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | The year-to-date employee deduction made outside the current company.                                                                             |
| `ytdCompanyContributionAmount`                                                                                                                    | *string*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | The year-to-date company contribution made outside the current company.                                                                           |