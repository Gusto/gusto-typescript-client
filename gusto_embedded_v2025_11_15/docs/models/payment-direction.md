# PaymentDirection

The direction of the payment

## Example Usage

```typescript
import { PaymentDirection } from "openapi/models";

let value: PaymentDirection = "debit";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"credit" | "debit" | Unrecognized<string>
```