# ContractorPaymentGroupPartnerDisbursementsPaymentStatus

The status of the payment

## Example Usage

```typescript
import { ContractorPaymentGroupPartnerDisbursementsPaymentStatus } from "openapi/models";

let value: ContractorPaymentGroupPartnerDisbursementsPaymentStatus = "Paid";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Pending" | "Paid" | "Not partner managed" | "Converted to check" | Unrecognized<string>
```