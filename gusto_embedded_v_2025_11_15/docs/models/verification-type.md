# VerificationType

The verification type of the bank account.

'bank_deposits' means the bank account is connected by entering routing and accounting numbers and verifying through micro-deposits.
'plaid' means the bank account is connected through Plaid.

## Example Usage

```typescript
import { VerificationType } from "openapi/models";

let value: VerificationType = "plaid_external";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"bank_deposits" | "plaid" | "plaid_external" | Unrecognized<string>
```