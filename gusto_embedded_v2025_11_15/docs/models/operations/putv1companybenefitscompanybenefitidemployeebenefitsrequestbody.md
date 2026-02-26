# PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody

## Example Usage

```typescript
import { PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody } from "@gusto/embedded-api-v2025-11-15/models/operations/putv1companybenefitscompanybenefitidemployeebenefits.js";

let value: PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody = {
  employeeBenefits: [],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `employeeBenefits`                                                                                           | [components.EmployeeBenefitForCompanyBenefit](../../models/components/employeebenefitforcompanybenefit.md)[] | :heavy_check_mark:                                                                                           | The list of employee benefits to create or update                                                            |