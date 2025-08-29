# ContractorPaymentForGroupPreviewStatus

The status of the contractor payment.  Will transition to `Funded` during payments processing if the payment should be funded, i.e. has `Direct Deposit` for payment method. Contractors payments with `Check` payment method will remain `Unfunded`.

## Example Usage

```typescript
import { ContractorPaymentForGroupPreviewStatus } from "@gusto/embedded-api/models/components/contractorpaymentforgrouppreview.js";

let value: ContractorPaymentForGroupPreviewStatus = "Unfunded";
```

## Values

```typescript
"Funded" | "Unfunded"
```