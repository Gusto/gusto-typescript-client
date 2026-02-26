# Type

The payment method type. If type is Check, then `split_by` and `splits` do not need to be populated. If type is Direct Deposit, `split_by` and `splits` are required.

## Example Usage

```typescript
import { Type } from "@gusto/embedded-api-v2025-11-15/models/operations/putv1employeesemployeeidpaymentmethod.js";

let value: Type = "Direct Deposit";
```

## Values

```typescript
"Direct Deposit" | "Check"
```