# Compensations

The available company-wide compensation rates for the company.

## Example Usage

```typescript
import { Compensations } from "@gusto/embedded-api/models/components/company.js";

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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `hourly`                                                                         | [components.Hourly](../../models/components/hourly.md)[]                         | :heavy_minus_sign:                                                               | The available hourly compensation rates for the company.                         |
| `fixed`                                                                          | [components.Fixed](../../models/components/fixed.md)[]                           | :heavy_minus_sign:                                                               | The available fixed compensation rates for the company.                          |
| `paidTimeOff`                                                                    | [components.CompanyPaidTimeOff](../../models/components/companypaidtimeoff.md)[] | :heavy_minus_sign:                                                               | The available types of paid time off for the company.                            |