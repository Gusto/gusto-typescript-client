# EmployeeBenefitBulkUpdateRequest

## Example Usage

```typescript
import { EmployeeBenefitBulkUpdateRequest } from "openapi/models";

let value: EmployeeBenefitBulkUpdateRequest = {
  employeeBenefits: [
    {
      employeeUuid: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `employeeBenefits`                                                                             | [models.EmployeeBenefitForCompanyBenefit](../models/employee-benefit-for-company-benefit.md)[] | :heavy_check_mark:                                                                             | The list of employee benefits to create or update                                              |