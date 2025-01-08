# ContractorPaymentForGroupStatus

The status of the contractor payment.  Will transition to `Funded` during payments processing if the payment should be funded, i.e. has `Direct Deposit` for payment method. Contractors payments with `Check` payment method will remain `Unfunded`.

## Example Usage

```typescript
import { ContractorPaymentForGroupStatus } from "gusto_embedded/models/components";

let value: ContractorPaymentForGroupStatus = "Funded";
```

## Values

```typescript
"Funded" | "Unfunded"
```