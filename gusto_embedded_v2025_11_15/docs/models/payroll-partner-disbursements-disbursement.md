# PayrollPartnerDisbursementsDisbursement

## Example Usage

```typescript
import { PayrollPartnerDisbursementsDisbursement } from "openapi/models";

let value: PayrollPartnerDisbursementsDisbursement = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `employeeUuid`                                                                                               | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The UUID of the employee                                                                                     |
| `paymentMethod`                                                                                              | [models.PayrollPartnerDisbursementsPaymentMethod](../models/payroll-partner-disbursements-payment-method.md) | :heavy_minus_sign:                                                                                           | The payment method for the disbursement                                                                      |
| `paymentStatus`                                                                                              | [models.PayrollPartnerDisbursementsPaymentStatus](../models/payroll-partner-disbursements-payment-status.md) | :heavy_minus_sign:                                                                                           | The status of the payment                                                                                    |