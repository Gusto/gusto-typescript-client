# Total

The wage and reimbursement totals for all contractor payments within a given time period.

## Example Usage

```typescript
import { Total } from "@gusto/embedded-api/models/components/contractorpaymentsummary.js";

let value: Total = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `reimbursements`                                                             | *string*                                                                     | :heavy_minus_sign:                                                           | The total reimbursements for contractor payments within a given time period. |
| `wages`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | The total wages for contractor payments within a given time period.          |