# PayScheduleAssignmentPreview

The representation of a pay schedule assignment preview.

## Example Usage

```typescript
import { PayScheduleAssignmentPreview } from "openapi/models";

let value: PayScheduleAssignmentPreview = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [models.PayScheduleAssignmentPreviewType](../models/pay-schedule-assignment-preview-type.md)         | :heavy_minus_sign:                                                                                   | The pay schedule assignment type.                                                                    |
| `employeeChanges`                                                                                    | [models.PayScheduleAssignmentEmployeeChange](../models/pay-schedule-assignment-employee-change.md)[] | :heavy_minus_sign:                                                                                   | A list of pay schedule changes including pay period and transition pay period.                       |