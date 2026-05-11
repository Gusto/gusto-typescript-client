# PayrollUnprocessedEmployeeCompensationsTypePaymentMethod

The employee's compensation payment method. Is *only* `Historical` when retrieving external payrolls initially run outside of Gusto, then put into Gusto.

## Example Usage

```typescript
import { PayrollUnprocessedEmployeeCompensationsTypePaymentMethod } from "openapi/models";

let value: PayrollUnprocessedEmployeeCompensationsTypePaymentMethod =
  "Direct Deposit";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Direct Deposit" | "Check" | "Historical" | Unrecognized<string>
```