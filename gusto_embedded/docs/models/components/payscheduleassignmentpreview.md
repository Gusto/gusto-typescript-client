# PayScheduleAssignmentPreview

The representation of a pay schedule assignment preview.

## Example Usage

```typescript
import { PayScheduleAssignmentPreview } from "gusto-embedded/models/components";

let value: PayScheduleAssignmentPreview = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [components.PayScheduleAssignmentPreviewType](../../models/components/payscheduleassignmentpreviewtype.md)         | :heavy_minus_sign:                                                                                                 | The pay schedule assignment type.                                                                                  |
| `employeeChanges`                                                                                                  | [components.PayScheduleAssignmentEmployeeChange](../../models/components/payscheduleassignmentemployeechange.md)[] | :heavy_minus_sign:                                                                                                 | A list of pay schedule changes including pay period and transition pay period.                                     |