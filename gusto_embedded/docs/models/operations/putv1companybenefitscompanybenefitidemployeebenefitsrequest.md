# PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest

## Example Usage

```typescript
import { PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest } from "@gusto/embedded-api/models/operations/putv1companybenefitscompanybenefitidemployeebenefits.js";

let value: PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest = {
  companyBenefitId: "<id>",
  requestBody: {
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
| `xGustoAPIVersion`                                                                                                                                                                                                           | [components.VersionHeader](../../models/components/versionheader.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `requestBody`                                                                                                                                                                                                                | [operations.PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody](../../models/operations/putv1companybenefitscompanybenefitidemployeebenefitsrequestbody.md)                                                     | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |