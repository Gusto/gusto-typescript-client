# VerificationStatus

The verification status of the bank account.

'awaiting_deposits' means the bank account is just created and money is being transferred.
'ready_for_verification' means the micro-deposits are completed and the verification process can begin by using the verify endpoint.
'verified' means the bank account is verified.

## Example Usage

```typescript
import { VerificationStatus } from "gusto_embedded/models/components";

let value: VerificationStatus = "ready_for_verification";
```

## Values

```typescript
"awaiting_deposits" | "ready_for_verification" | "verified"
```