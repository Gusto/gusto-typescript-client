# PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody

## Example Usage

```typescript
import { PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody } from "gusto-embedded/models/operations";

let value: PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `regularHoursWorked`                            | *number*                                        | :heavy_minus_sign:                              | regular hours worked in this pay period         |
| `overtimeHoursWorked`                           | *number*                                        | :heavy_minus_sign:                              | overtime hours worked in this pay period        |
| `doubleOvertimeHoursWorked`                     | *number*                                        | :heavy_minus_sign:                              | double overtime hours worked in this pay period |
| `ptoHoursUsed`                                  | *number*                                        | :heavy_minus_sign:                              | paid time off hours used in this pay period     |
| `sickHoursUsed`                                 | *number*                                        | :heavy_minus_sign:                              | sick hours used in this pay period              |