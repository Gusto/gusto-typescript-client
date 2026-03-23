# PayScheduleAssignment

The representation of a pay schedule assignment.

## Example Usage

```typescript
import { PayScheduleAssignment } from "@gusto/embedded-api/models/components/payscheduleassignment.js";

let value: PayScheduleAssignment = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.Type](../../models/components/type.md)                                                         | :heavy_minus_sign:                                                                                         | The pay schedule assignment type.                                                                          |
| `hourlyPayScheduleUuid`                                                                                    | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Pay schedule for hourly employees.                                                                         |
| `salariedPayScheduleUuid`                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Pay schedule for salaried employees.                                                                       |
| `defaultPayScheduleUuid`                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Default pay schedule for employees.                                                                        |
| `employees`                                                                                                | [components.PayScheduleAssignmentEmployee](../../models/components/payscheduleassignmentemployee.md)[]     | :heavy_minus_sign:                                                                                         | List of employees and their pay schedules.                                                                 |
| `departments`                                                                                              | [components.PayScheduleAssignmentDepartment](../../models/components/payscheduleassignmentdepartment.md)[] | :heavy_minus_sign:                                                                                         | List of departments and their pay schedules.                                                               |