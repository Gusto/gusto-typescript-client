# PaymentConfigsUpdateRequestPaymentConfigs

## Example Usage

```typescript
import { PaymentConfigsUpdateRequestPaymentConfigs } from "@gusto/embedded-api-v2025-06-15/models/components/paymentconfigsupdaterequest.js";

let value: PaymentConfigsUpdateRequestPaymentConfigs = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `paymentSpeed`                                                                                                           | [components.PaymentConfigsUpdateRequestPaymentSpeed](../../models/components/paymentconfigsupdaterequestpaymentspeed.md) | :heavy_minus_sign:                                                                                                       | Desired payment speed. 1-day is only applicable to partners that opt in.                                                 |
| `fastPaymentLimit`                                                                                                       | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Payment limit for 1-day or 2-day payroll (in dollars).                                                                   |
| `partnerOwnedDisbursement`                                                                                               | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | Whether to use the partner-owned disbursement payment rail.                                                              |