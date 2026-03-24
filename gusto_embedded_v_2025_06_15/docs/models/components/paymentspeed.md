# PaymentSpeed

Payment speed. READ-ONLY.
- `1-day`: Next-day ACH (only for partners that opt in).
- `2-day`: Two-day ACH.
- `4-day`: Standard ACH.


## Example Usage

```typescript
import { PaymentSpeed } from "@gusto/embedded-api-v2025-06-15/models/components/paymentconfigs.js";

let value: PaymentSpeed = "2-day";
```

## Values

```typescript
"1-day" | "2-day" | "4-day"
```