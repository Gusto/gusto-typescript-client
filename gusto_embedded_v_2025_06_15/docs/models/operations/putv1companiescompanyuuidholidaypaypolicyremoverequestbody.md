# PutV1CompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody

## Example Usage

```typescript
import { PutV1CompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody } from "@gusto/embedded-api/models/operations/putv1companiescompanyuuidholidaypaypolicyremove.js";

let value: PutV1CompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody = {
  version: "56d00c178bc7393b2a206ed6a86afcb4",
  employees: [
    {},
  ],
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       | Example                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                                                                         | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field. | 56d00c178bc7393b2a206ed6a86afcb4                                                                                                                                  |
| `employees`                                                                                                                                                       | [operations.PutV1CompaniesCompanyUuidHolidayPayPolicyRemoveEmployees](../../models/operations/putv1companiescompanyuuidholidaypaypolicyremoveemployees.md)[]      | :heavy_check_mark:                                                                                                                                                | An array of employee objects, each containing an employee_uuid.                                                                                                   |                                                                                                                                                                   |