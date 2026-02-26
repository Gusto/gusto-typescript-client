# PutV1EmployeesEmployeeIdPaymentMethodSplitBy

Describes how the payment will be split. If `split_by` is Percentage, then the `split` amounts must add up to exactly 100. If `split_by` is Amount, then amount is in cents and the last `split` amount must be `null` to capture the remainder.

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdPaymentMethodSplitBy } from "openapi/models/operations";

let value: PutV1EmployeesEmployeeIdPaymentMethodSplitBy = "Amount";
```

## Values

```typescript
"Amount" | "Percentage"
```