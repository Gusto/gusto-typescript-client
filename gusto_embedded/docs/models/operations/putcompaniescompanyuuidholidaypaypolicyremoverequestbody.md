# PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody

## Example Usage

```typescript
import { PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody } from "@gusto/embedded-api/models/operations/putcompaniescompanyuuidholidaypaypolicyremove.js";

let value: PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequestBody = {
  version: "<value>",
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                                                                         | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field. |
| `employees`                                                                                                                                                       | [operations.PutCompaniesCompanyUuidHolidayPayPolicyRemoveEmployees](../../models/operations/putcompaniescompanyuuidholidaypaypolicyremoveemployees.md)[]          | :heavy_minus_sign:                                                                                                                                                | An array of employee objects, each containing an employee_uuid.                                                                                                   |