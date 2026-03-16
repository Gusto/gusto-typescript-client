# PaymentConfigsUpdateRequest

Request body for updating company payment configs. At least one of payment_speed, fast_payment_limit, or partner_owned_disbursement is required.

## Example Usage

```typescript
import { PaymentConfigsUpdateRequest } from "@gusto/embedded-api/models/components/paymentconfigsupdaterequest.js";

let value: PaymentConfigsUpdateRequest = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `paymentConfigs`                                                                                                             | [components.PaymentConfigsUpdateRequestPaymentConfigs](../../models/components/paymentconfigsupdaterequestpaymentconfigs.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |