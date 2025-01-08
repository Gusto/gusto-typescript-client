# PutV1TerminationsEmployeeIdRequestBody

## Example Usage

```typescript
import { PutV1TerminationsEmployeeIdRequestBody } from "gusto_embedded/models/operations";

let value: PutV1TerminationsEmployeeIdRequestBody = {
  version: "<value>",
  effectiveDate: "<value>",
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                                                                         | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field. |
| `effectiveDate`                                                                                                                                                   | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The employee's last day of work.                                                                                                                                  |
| `runTerminationPayroll`                                                                                                                                           | *boolean*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                | If true, the employee should receive their final wages via an off-cycle payroll. If false, they should receive their final wages on their current pay schedule.   |