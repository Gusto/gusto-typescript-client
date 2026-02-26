# PutV1CompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody

## Example Usage

```typescript
import { PutV1CompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody } from "openapi/models/operations";

let value: PutV1CompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody = {
  version: "56d00c178bc7393b2a206ed6a86afcb4",
  employees: [
    {},
  ],
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         | Example                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                                                                           | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.   | 56d00c178bc7393b2a206ed6a86afcb4                                                                                                                                    |
| `employees`                                                                                                                                                         | [operations.PutV1CompaniesCompanyUuidHolidayPayPolicyRemoveEmployee](../../models/operations/put-v1-companies-company-uuid-holiday-pay-policy-remove-employee.md)[] | :heavy_check_mark:                                                                                                                                                  | An array of employee objects, each containing an employee_uuid.                                                                                                     |                                                                                                                                                                     |