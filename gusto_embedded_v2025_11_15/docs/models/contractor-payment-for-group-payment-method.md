# ContractorPaymentForGroupPaymentMethod

The payment method.

## Example Usage

```typescript
import { ContractorPaymentForGroupPaymentMethod } from "openapi/models";

let value: ContractorPaymentForGroupPaymentMethod = "Check";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Direct Deposit" | "Check" | "Historical Payment" | "Correction Payment" | Unrecognized<string>
```