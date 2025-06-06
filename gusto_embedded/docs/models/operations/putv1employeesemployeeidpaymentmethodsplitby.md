# PutV1EmployeesEmployeeIdPaymentMethodSplitBy

Describes how the payment will be split. If `split_by` is Percentage, then the `split` amounts must add up to exactly 100. If `split_by` is Amount, then the last `split` amount must be `null` to capture the remainder.

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdPaymentMethodSplitBy } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidpaymentmethod.js";

let value: PutV1EmployeesEmployeeIdPaymentMethodSplitBy = "Amount";
```

## Values

```typescript
"Amount" | "Percentage"
```