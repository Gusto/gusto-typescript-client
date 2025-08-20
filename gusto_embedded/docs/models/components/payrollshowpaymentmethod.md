# PayrollShowPaymentMethod

The employee's compensation payment method. Is *only* `Historical` when retrieving external payrolls initially run outside of Gusto, then put into Gusto.

## Example Usage

```typescript
import { PayrollShowPaymentMethod } from "@gusto/embedded-api/models/components/payrollshow.js";

let value: PayrollShowPaymentMethod = "Direct Deposit";
```

## Values

```typescript
"Direct Deposit" | "Check" | "Historical"
```