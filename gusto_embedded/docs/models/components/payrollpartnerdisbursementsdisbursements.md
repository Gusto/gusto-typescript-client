# PayrollPartnerDisbursementsDisbursements

## Example Usage

```typescript
import { PayrollPartnerDisbursementsDisbursements } from "@gusto/embedded-api/models/components/payrollpartnerdisbursements.js";

let value: PayrollPartnerDisbursementsDisbursements = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `employeeUuid`                                                                                                             | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The UUID of the employee                                                                                                   |
| `paymentMethod`                                                                                                            | [components.PayrollPartnerDisbursementsPaymentMethod](../../models/components/payrollpartnerdisbursementspaymentmethod.md) | :heavy_minus_sign:                                                                                                         | The payment method for the disbursement                                                                                    |
| `paymentStatus`                                                                                                            | [components.PayrollPartnerDisbursementsPaymentStatus](../../models/components/payrollpartnerdisbursementspaymentstatus.md) | :heavy_minus_sign:                                                                                                         | The status of the payment                                                                                                  |