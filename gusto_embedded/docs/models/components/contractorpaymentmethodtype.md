# ContractorPaymentMethodType

The payment method type. If type is Check, then `split_by` and `splits` do not need to be populated. If type is Direct Deposit, `split_by` and `splits` are required.

## Example Usage

```typescript
import { ContractorPaymentMethodType } from "@gusto/embedded-api/models/components/contractorpaymentmethod.js";

let value: ContractorPaymentMethodType = "Check";
```

## Values

```typescript
"Direct Deposit" | "Check"
```