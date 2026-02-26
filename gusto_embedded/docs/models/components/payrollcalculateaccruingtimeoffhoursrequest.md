# PayrollCalculateAccruingTimeOffHoursRequest

Request body for calculating accruing time off hours

## Example Usage

```typescript
import { PayrollCalculateAccruingTimeOffHoursRequest } from "@gusto/embedded-api/models/components/payrollcalculateaccruingtimeoffhoursrequest.js";

let value: PayrollCalculateAccruingTimeOffHoursRequest = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `regularHoursWorked`                            | *string*                                        | :heavy_minus_sign:                              | Regular hours worked in this pay period         |
| `overtimeHoursWorked`                           | *string*                                        | :heavy_minus_sign:                              | Overtime hours worked in this pay period        |
| `doubleOvertimeHoursWorked`                     | *string*                                        | :heavy_minus_sign:                              | Double overtime hours worked in this pay period |
| `ptoHoursUsed`                                  | *string*                                        | :heavy_minus_sign:                              | Paid time off hours used in this pay period     |
| `sickHoursUsed`                                 | *string*                                        | :heavy_minus_sign:                              | Sick hours used in this pay period              |