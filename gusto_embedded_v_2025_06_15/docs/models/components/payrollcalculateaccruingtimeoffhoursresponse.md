# PayrollCalculateAccruingTimeOffHoursResponse

Response containing the calculated accruing time off hours

## Example Usage

```typescript
import { PayrollCalculateAccruingTimeOffHoursResponse } from "@gusto/embedded-api/models/components/payrollcalculateaccruingtimeoffhoursresponse.js";

let value: PayrollCalculateAccruingTimeOffHoursResponse = {
  hoursEarned: [],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `hoursEarned`                                                      | [components.HoursEarned](../../models/components/hoursearned.md)[] | :heavy_check_mark:                                                 | Accruing time off hours earned for each time off policy            |