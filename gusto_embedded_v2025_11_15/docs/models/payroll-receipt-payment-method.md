# PayrollReceiptPaymentMethod

The employee's compensation payment method.

## Example Usage

```typescript
import { PayrollReceiptPaymentMethod } from "openapi/models";

let value: PayrollReceiptPaymentMethod = "Check";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Direct Deposit" | "Check" | Unrecognized<string>
```