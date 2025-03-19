# VerificationType

The verification type of the bank account.

'bank_deposits' means the bank account is connected by entering routing and accounting numbers and verifying through micro-deposits.
'plaid' means the bank account is connected through Plaid.

## Example Usage

```typescript
import { VerificationType } from "@gusto/embedded-api/models/components/companybankaccount.js";

let value: VerificationType = "bank_deposits";
```

## Values

```typescript
"bank_deposits" | "plaid" | "plaid_external"
```