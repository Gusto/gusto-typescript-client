# PayrollEmployeeCompensationsTypePaidTimeOff

## Example Usage

```typescript
import { PayrollEmployeeCompensationsTypePaidTimeOff } from "@gusto/embedded-api/models/components";

let value: PayrollEmployeeCompensationsTypePaidTimeOff = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The name of the PTO. This also serves as the unique, immutable identifier for the PTO.               |
| `hours`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The hours of this PTO taken during the pay period.                                                   |
| `finalPayoutUnusedHoursInput`                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The outstanding hours paid upon termination. This field is only applicable for termination payrolls. |