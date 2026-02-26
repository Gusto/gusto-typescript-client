# PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest

## Example Usage

```typescript
import { PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest } from "openapi/models/operations";

let value: PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest = {
  companyBenefitId: "<id>",
  body: {
    employeeBenefits: [
      {
        employeeUuid: "<id>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyBenefitId`                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company benefit                                                                                                                                                                                              |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [models.VersionHeader](../../models/version-header.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `body`                                                                                                                                                                                                                       | [operations.PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody](../../models/operations/put-v1-company-benefits-company-benefit-id-employee-benefits-request-body.md)                                           | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |