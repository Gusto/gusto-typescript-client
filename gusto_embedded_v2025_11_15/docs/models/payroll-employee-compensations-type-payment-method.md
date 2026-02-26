# PayrollEmployeeCompensationsTypePaymentMethod

The employee's compensation payment method. Is *only* `Historical` when retrieving external payrolls initially run outside of Gusto, then put into Gusto.

## Example Usage

```typescript
import { PayrollEmployeeCompensationsTypePaymentMethod } from "openapi/models";

let value: PayrollEmployeeCompensationsTypePaymentMethod = "Check";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Direct Deposit" | "Check" | "Historical" | Unrecognized<string>
```