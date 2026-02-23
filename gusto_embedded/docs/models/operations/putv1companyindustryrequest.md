# PutV1CompanyIndustryRequest

## Example Usage

```typescript
import { PutV1CompanyIndustryRequest } from "@gusto/embedded-api/models/operations/putv1companyindustry.js";

let value: PutV1CompanyIndustryRequest = {
  companyId: "<id>",
  companyIndustrySelectionRequiredBody: {
    title: "Computer Training",
    naicsCode: "611420",
    sicCodes: [
      "8243",
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PutV1CompanyIndustryHeaderXGustoAPIVersion](../../models/operations/putv1companyindustryheaderxgustoapiversion.md)                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `companyIndustrySelectionRequiredBody`                                                                                                                                                                                       | [components.CompanyIndustrySelectionRequiredBody](../../models/components/companyindustryselectionrequiredbody.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |