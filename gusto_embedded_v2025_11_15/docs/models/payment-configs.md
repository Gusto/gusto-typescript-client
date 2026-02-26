# PaymentConfigs

Example response

## Example Usage

```typescript
import { PaymentConfigs } from "openapi/models";

let value: PaymentConfigs = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `companyUuid`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | Company uuid                                                                         |
| `partnerUuid`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | Partner uuid                                                                         |
| `fastPaymentLimit`                                                                   | *string*                                                                             | :heavy_minus_sign:                                                                   | Payment limit for 1-day or 2-day payroll                                             |
| `paymentSpeed`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | Payment speed for 1-day, 2-day, 4-day                                                |
| `partnerOwnedDisbursement`                                                           | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Whether the company is configured to use the partner-owned disbursement payment rail |
| `earnedFastAchBlockers`                                                              | [models.EarnedFastAchBlocker](../models/earned-fast-ach-blocker.md)[]                | :heavy_minus_sign:                                                                   | Blockers preventing the company from earning fast ACH payments                       |