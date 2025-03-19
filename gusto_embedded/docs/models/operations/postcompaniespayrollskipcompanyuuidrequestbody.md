# PostCompaniesPayrollSkipCompanyUuidRequestBody

## Example Usage

```typescript
import { PostCompaniesPayrollSkipCompanyUuidRequestBody } from "@gusto/embedded-api/models/operations/postcompaniespayrollskipcompanyuuid.js";

let value: PostCompaniesPayrollSkipCompanyUuidRequestBody = {
  payrollType: "Regular",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `payrollType`                                                                                    | [operations.PayrollType](../../models/operations/payrolltype.md)                                 | :heavy_check_mark:                                                                               | Payroll type                                                                                     |
| `startDate`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | Pay period start date                                                                            |
| `endDate`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | Pay period end date. If left empty, defaults to today's date.                                    |
| `payScheduleUuid`                                                                                | *string*                                                                                         | :heavy_minus_sign:                                                                               | The UUID of the pay schedule                                                                     |
| `employeeUuids`                                                                                  | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | An array of employees. This field is only applicable to new hire payroll and termination payroll |