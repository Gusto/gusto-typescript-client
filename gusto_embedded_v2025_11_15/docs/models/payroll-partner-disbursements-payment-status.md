# PayrollPartnerDisbursementsPaymentStatus

The status of the payment

## Example Usage

```typescript
import { PayrollPartnerDisbursementsPaymentStatus } from "openapi/models";

let value: PayrollPartnerDisbursementsPaymentStatus = "Converted to check";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Pending" | "Paid" | "Not partner managed" | "Converted to check" | Unrecognized<string>
```