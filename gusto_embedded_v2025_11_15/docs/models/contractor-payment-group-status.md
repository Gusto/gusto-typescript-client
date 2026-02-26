# ContractorPaymentGroupStatus

The status of the contractor payment group.  Will be `Funded` if all payments that should be funded (i.e. have `Direct Deposit` for payment method) are funded.  A group can have status `Funded` while having associated payments that have status `Unfunded`, i.e. payment with `Check` payment method.

## Example Usage

```typescript
import { ContractorPaymentGroupStatus } from "openapi/models";

let value: ContractorPaymentGroupStatus = "Funded";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Unfunded" | "Funded" | Unrecognized<string>
```