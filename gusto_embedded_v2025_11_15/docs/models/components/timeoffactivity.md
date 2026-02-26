# TimeOffActivity

Representation of a Time Off Activity

## Example Usage

```typescript
import { TimeOffActivity } from "@gusto/embedded-api-v2025-11-15/models/components/timeoffactivity.js";

let value: TimeOffActivity = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `policyUuid`                                                        | *string*                                                            | :heavy_minus_sign:                                                  | unique identifier of a time off policy                              |
| `timeOffType`                                                       | [components.TimeOffType](../../models/components/timeofftype.md)    | :heavy_minus_sign:                                                  | Type of the time off activity                                       |
| `policyName`                                                        | *string*                                                            | :heavy_minus_sign:                                                  | The name of the time off policy for this activity                   |
| `eventType`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | The type of the time off event/activity                             |
| `eventDescription`                                                  | *string*                                                            | :heavy_minus_sign:                                                  | A description for the time off event/activity                       |
| `effectiveTime`                                                     | *string*                                                            | :heavy_minus_sign:                                                  | The datetime of the time off activity                               |
| `balance`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | The time off balance at the time of the activity                    |
| `balanceChange`                                                     | *string*                                                            | :heavy_minus_sign:                                                  | The amount the time off balance changed as a result of the activity |