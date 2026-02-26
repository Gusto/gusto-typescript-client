# VerificationType

The verification type of the bank account.

'bank_deposits' means the bank account is connected by entering routing and accounting numbers and verifying through micro-deposits.
'plaid' means the bank account is connected through Plaid.

## Example Usage

```typescript
import { VerificationType } from "openapi/models";

let value: VerificationType = "plaid_external";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"bank_deposits" | "plaid" | "plaid_external" | Unrecognized<string>
```