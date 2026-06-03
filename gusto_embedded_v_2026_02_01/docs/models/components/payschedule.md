# PaySchedule

## Example Usage

```typescript
import { PaySchedule } from "@gusto/embedded-api-v-2026-02-01/models/components/payrolldigestresults.js";

let value: PaySchedule = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `uuid`                                                  | *string*                                                | :heavy_minus_sign:                                      | UUID of the pay schedule.                               |
| `frequency`                                             | *string*                                                | :heavy_minus_sign:                                      | Human-friendly pay frequency (e.g. "Every other week"). |
| `customName`                                            | *string*                                                | :heavy_minus_sign:                                      | Custom name for the pay schedule, when set.             |