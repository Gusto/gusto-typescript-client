# EmployeePaymentMethodType

The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.

## Example Usage

```typescript
import { EmployeePaymentMethodType } from "@gusto/embedded-api/models/components";

let value: EmployeePaymentMethodType = "Direct Deposit";
```

## Values

```typescript
"Direct Deposit" | "Check"
```