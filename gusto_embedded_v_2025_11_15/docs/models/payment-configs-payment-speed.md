# PaymentConfigsPaymentSpeed

Payment speed. READ-ONLY.
- `1-day`: Next-day ACH (only for partners that opt in).
- `2-day`: Two-day ACH.
- `4-day`: Standard ACH.


## Example Usage

```typescript
import { PaymentConfigsPaymentSpeed } from "openapi/models";

let value: PaymentConfigsPaymentSpeed = "2-day";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"1-day" | "2-day" | "4-day" | Unrecognized<string>
```