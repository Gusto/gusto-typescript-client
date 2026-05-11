# EmployeePaymentMethodType

The payment method type. If type is Check, then `split_by` and `splits` do not need to be populated. If type is Direct Deposit, `split_by` and `splits` are required.

## Example Usage

```typescript
import { EmployeePaymentMethodType } from "openapi/models";

let value: EmployeePaymentMethodType = "Check";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Direct Deposit" | "Check" | Unrecognized<string>
```