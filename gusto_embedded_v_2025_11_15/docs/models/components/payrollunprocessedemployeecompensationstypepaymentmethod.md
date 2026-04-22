# PayrollUnprocessedEmployeeCompensationsTypePaymentMethod

The employee's compensation payment method. Is *only* `Historical` when retrieving external payrolls initially run outside of Gusto, then put into Gusto.

## Example Usage

```typescript
import { PayrollUnprocessedEmployeeCompensationsTypePaymentMethod } from "@gusto/embedded-api-v-2025-11-15/models/components/payrollunprocessedemployeecompensationstype.js";

let value: PayrollUnprocessedEmployeeCompensationsTypePaymentMethod =
  "Direct Deposit";
```

## Values

```typescript
"Direct Deposit" | "Check" | "Historical"
```