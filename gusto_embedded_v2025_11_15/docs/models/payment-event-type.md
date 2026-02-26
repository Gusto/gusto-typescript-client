# PaymentEventType

The type of payment event associated with the ACH transaction

## Example Usage

```typescript
import { PaymentEventType } from "openapi/models";

let value: PaymentEventType = "ContractorPayment";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Payroll" | "ContractorPayment" | Unrecognized<string>
```