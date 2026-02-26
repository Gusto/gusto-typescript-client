# PaymentType

Type of payment for the wire in

## Example Usage

```typescript
import { PaymentType } from "openapi/models";

let value: PaymentType = "Payroll";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Payroll" | "ContractorPaymentGroup" | Unrecognized<string>
```