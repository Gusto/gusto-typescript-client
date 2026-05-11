# ContractorPaymentForGroupStatus

The status of the contractor payment.  Will transition to `Funded` during payments processing if the payment should be funded, i.e. has `Direct Deposit` for payment method. Contractors payments with `Check` payment method will remain `Unfunded`.

## Example Usage

```typescript
import { ContractorPaymentForGroupStatus } from "openapi/models";

let value: ContractorPaymentForGroupStatus = "Funded";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Funded" | "Unfunded" | Unrecognized<string>
```