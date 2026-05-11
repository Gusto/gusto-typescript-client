# ExternalPayrollUpdateRequestExternalPayrollItem

## Example Usage

```typescript
import { ExternalPayrollUpdateRequestExternalPayrollItem } from "openapi/models";

let value: ExternalPayrollUpdateRequestExternalPayrollItem = {
  employeeUuid: "44f7cba9-7a3d-4f08-b7bd-6fcf5211f8ca",
  earnings: [
    {
      earningType: "CompanyPayType",
      earningId: 1,
      amount: "10000.00",
      hours: "80.0",
    },
  ],
  benefits: [
    {
      benefitId: 22,
      companyContributionAmount: "100.00",
      employeeDeductionAmount: "50.00",
    },
  ],
  taxes: [
    {
      taxId: 1,
      amount: "400.00",
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `employeeUuid`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | The UUID of the employee.                                                                            | 44f7cba9-7a3d-4f08-b7bd-6fcf5211f8ca                                                                 |
| `earnings`                                                                                           | [models.ExternalPayrollUpdateRequestEarning](../models/external-payroll-update-request-earning.md)[] | :heavy_minus_sign:                                                                                   | Earnings for the employee.                                                                           |                                                                                                      |
| `benefits`                                                                                           | [models.ExternalPayrollUpdateRequestBenefit](../models/external-payroll-update-request-benefit.md)[] | :heavy_minus_sign:                                                                                   | Benefits for the employee.                                                                           |                                                                                                      |
| `taxes`                                                                                              | [models.ExternalPayrollUpdateRequestTax](../models/external-payroll-update-request-tax.md)[]         | :heavy_minus_sign:                                                                                   | Taxes for the employee.                                                                              |                                                                                                      |