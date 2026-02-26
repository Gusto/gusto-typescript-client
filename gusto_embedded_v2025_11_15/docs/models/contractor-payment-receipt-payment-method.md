# ContractorPaymentReceiptPaymentMethod

The payment method.

## Example Usage

```typescript
import { ContractorPaymentReceiptPaymentMethod } from "openapi/models";

let value: ContractorPaymentReceiptPaymentMethod = "Check";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Direct Deposit" | "Check" | "Historical Payment" | "Correction Payment" | Unrecognized<string>
```