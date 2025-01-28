# UnprocessedTerminationPayPeriod

The representation of an unprocessed termination pay period.

## Example Usage

```typescript
import { UnprocessedTerminationPayPeriod } from "openapi/models/components";

let value: UnprocessedTerminationPayPeriod = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `startDate`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | The start date of the pay period.                                        |
| `endDate`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | The end date of the pay period.                                          |
| `checkDate`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | The check date of the pay period.                                        |
| `debitDate`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | The debit date of the pay period.                                        |
| `employeeName`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | The full name of the employee.                                           |
| `employeeUuid`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | A unique identifier of the employee.                                     |
| `payScheduleUuid`                                                        | *string*                                                                 | :heavy_minus_sign:                                                       | A unique identifier of the pay schedule to which the pay period belongs. |