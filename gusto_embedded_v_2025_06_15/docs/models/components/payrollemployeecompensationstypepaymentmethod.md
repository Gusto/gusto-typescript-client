# PayrollEmployeeCompensationsTypePaymentMethod

The employee's compensation payment method. Is *only* `Historical` when retrieving external payrolls initially run outside of Gusto, then put into Gusto.

## Example Usage

```typescript
import { PayrollEmployeeCompensationsTypePaymentMethod } from "@gusto/embedded-api/models/components/payrollemployeecompensationstype.js";

let value: PayrollEmployeeCompensationsTypePaymentMethod = "Check";
```

## Values

```typescript
"Direct Deposit" | "Check" | "Historical"
```