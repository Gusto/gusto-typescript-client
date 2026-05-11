# PaidHoliday

A paid holiday derived from the company's holiday pay policy

## Example Usage

```typescript
import { PaidHoliday } from "@gusto/embedded-api/models/components/paidholiday.js";

let value: PaidHoliday = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `holidayKey`                                        | *string*                                            | :heavy_minus_sign:                                  | The holiday's identifier (null for custom holidays) |
| `holidayName`                                       | *string*                                            | :heavy_minus_sign:                                  | The holiday's official name                         |
| `startDate`                                         | *string*                                            | :heavy_minus_sign:                                  | The holiday's start date (YYYY-MM-DD)               |
| `endDate`                                           | *string*                                            | :heavy_minus_sign:                                  | The holiday's end date (YYYY-MM-DD)                 |