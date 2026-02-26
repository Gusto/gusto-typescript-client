# Compensations

The available company-wide compensation rates for the company.

## Example Usage

```typescript
import { Compensations } from "openapi/models";

let value: Compensations = {
  hourly: [
    {
      name: "Overtime",
      multiple: 1.5,
    },
  ],
  fixed: [
    {
      name: "Bonus",
    },
  ],
  paidTimeOff: [
    {
      name: "Vacation Hours",
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `hourly`                                                          | [models.Hourly](../models/hourly.md)[]                            | :heavy_minus_sign:                                                | The available hourly compensation rates for the company.          |
| `fixed`                                                           | [models.Fixed](../models/fixed.md)[]                              | :heavy_minus_sign:                                                | The available fixed compensation rates for the company.           |
| `paidTimeOff`                                                     | [models.CompanyPaidTimeOff](../models/company-paid-time-off.md)[] | :heavy_minus_sign:                                                | The available types of paid time off for the company.             |