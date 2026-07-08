# Type

The payment method type. If type is Direct Deposit, the contractor is required to have a bank account. See [Bank account endpoint](./post-v1-contractors-contractor_uuid-bank_accounts).

## Example Usage

```typescript
import { Type } from "@gusto/embedded-api/models/operations/putv1contractorscontractoridpaymentmethod.js";

let value: Type = "Direct Deposit";
```

## Values

```typescript
"Direct Deposit" | "Check"
```