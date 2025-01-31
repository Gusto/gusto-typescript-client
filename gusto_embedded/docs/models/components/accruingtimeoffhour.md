# AccruingTimeOffHour

The representation of an unprocessed termination pay period.

## Example Usage

```typescript
import { AccruingTimeOffHour } from "@gusto/embedded-api/models/components";

let value: AccruingTimeOffHour = {};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `timeOffPolicyUuid`                         | *string*                                    | :heavy_minus_sign:                          | A unique identifier of the time off policy. |
| `hours`                                     | *string*                                    | :heavy_minus_sign:                          | Hours accrued during this pay period.       |