# EmployeeBenefitBulkUpdateRequest

## Example Usage

```typescript
import { EmployeeBenefitBulkUpdateRequest } from "@gusto/embedded-api/models/components/employeebenefitbulkupdaterequest.js";

let value: EmployeeBenefitBulkUpdateRequest = {
  employeeBenefits: [
    {
      employeeUuid: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `employeeBenefits`                                                                                           | [components.EmployeeBenefitForCompanyBenefit](../../models/components/employeebenefitforcompanybenefit.md)[] | :heavy_check_mark:                                                                                           | The list of employee benefits to create or update                                                            |