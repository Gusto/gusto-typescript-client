# PutV1EmployeesEmployeeIdPaymentMethodSplitBy

How the payment will be split. If Percentage, split amounts must add up to exactly 100. If Amount, values are in cents and the last split amount must be null to capture the remainder.

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdPaymentMethodSplitBy } from "openapi/models/operations";

let value: PutV1EmployeesEmployeeIdPaymentMethodSplitBy = "Percentage";
```

## Values

```typescript
"Percentage" | "Amount"
```