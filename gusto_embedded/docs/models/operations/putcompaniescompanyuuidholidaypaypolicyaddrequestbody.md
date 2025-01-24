# PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody

## Example Usage

```typescript
import { PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody } from "gusto-embedded/models/operations";

let value: PutCompaniesCompanyUuidHolidayPayPolicyAddRequestBody = {
  version: "<value>",
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                                                                         | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field. |
| `employees`                                                                                                                                                       | [operations.PutCompaniesCompanyUuidHolidayPayPolicyAddEmployees](../../models/operations/putcompaniescompanyuuidholidaypaypolicyaddemployees.md)[]                | :heavy_minus_sign:                                                                                                                                                | An array of employee objects, each containing an employee_uuid.                                                                                                   |