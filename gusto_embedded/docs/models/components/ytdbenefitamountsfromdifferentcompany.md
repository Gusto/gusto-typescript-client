# YtdBenefitAmountsFromDifferentCompany

Ytd Benefit Amounts From Different Company

## Example Usage

```typescript
import { YtdBenefitAmountsFromDifferentCompany } from "@gusto/embedded-api/models/components/ytdbenefitamountsfromdifferentcompany.js";

let value: YtdBenefitAmountsFromDifferentCompany = {
  uuid: "f8094168-088c-468b-be69-b0c6a7bb3ad3",
  benefitType: 633825,
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