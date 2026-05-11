# PayScheduleAssignment

The representation of a pay schedule assignment.

## Example Usage

```typescript
import { PayScheduleAssignment } from "openapi/models";

let value: PayScheduleAssignment = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `type`                                                                                      | [models.PayScheduleAssignmentType](../models/pay-schedule-assignment-type.md)               | :heavy_minus_sign:                                                                          | The pay schedule assignment type.                                                           |
| `hourlyPayScheduleUuid`                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | Pay schedule for hourly employees.                                                          |
| `salariedPayScheduleUuid`                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | Pay schedule for salaried employees.                                                        |
| `defaultPayScheduleUuid`                                                                    | *string*                                                                                    | :heavy_minus_sign:                                                                          | Default pay schedule for employees.                                                         |
| `employees`                                                                                 | [models.PayScheduleAssignmentEmployee](../models/pay-schedule-assignment-employee.md)[]     | :heavy_minus_sign:                                                                          | List of employees and their pay schedules.                                                  |
| `departments`                                                                               | [models.PayScheduleAssignmentDepartment](../models/pay-schedule-assignment-department.md)[] | :heavy_minus_sign:                                                                          | List of departments and their pay schedules.                                                |