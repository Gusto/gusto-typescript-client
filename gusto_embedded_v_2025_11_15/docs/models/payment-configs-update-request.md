# PaymentConfigsUpdateRequest

Request body for updating company payment configs. At least one of payment_speed, fast_payment_limit, or partner_owned_disbursement is required.

## Example Usage

```typescript
import { PaymentConfigsUpdateRequest } from "openapi/models";

let value: PaymentConfigsUpdateRequest = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `paymentConfigs`                                                                                                | [models.PaymentConfigsUpdateRequestPaymentConfigs](../models/payment-configs-update-request-payment-configs.md) | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |