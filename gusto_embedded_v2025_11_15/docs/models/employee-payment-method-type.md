# EmployeePaymentMethodType

The payment method type. If type is Check, then `split_by` and `splits` do not need to be populated. If type is Direct Deposit, `split_by` and `splits` are required.

## Example Usage

```typescript
import { EmployeePaymentMethodType } from "openapi/models";

let value: EmployeePaymentMethodType = "Check";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Direct Deposit" | "Check" | Unrecognized<string>
```