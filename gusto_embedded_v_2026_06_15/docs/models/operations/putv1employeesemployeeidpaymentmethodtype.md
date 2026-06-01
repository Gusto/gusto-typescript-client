# PutV1EmployeesEmployeeIdPaymentMethodType

The payment method type. If type is Check, split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdPaymentMethodType } from "@gusto/embedded-api-v-2026-06-15/models/operations/putv1employeesemployeeidpaymentmethod.js";

let value: PutV1EmployeesEmployeeIdPaymentMethodType = "Check";
```

## Values

```typescript
"Check" | "Direct Deposit"
```