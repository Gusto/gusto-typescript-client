# PayrollCalculateAccruingTimeOffHoursResponse

Response containing the calculated accruing time off hours

## Example Usage

```typescript
import { PayrollCalculateAccruingTimeOffHoursResponse } from "openapi/models";

let value: PayrollCalculateAccruingTimeOffHoursResponse = {
  hoursEarned: [],
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `hoursEarned`                                           | [models.HoursEarned](../models/hours-earned.md)[]       | :heavy_check_mark:                                      | Accruing time off hours earned for each time off policy |