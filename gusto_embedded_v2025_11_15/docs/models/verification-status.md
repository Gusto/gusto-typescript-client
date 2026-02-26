# VerificationStatus

The verification status of the bank account.

'awaiting_deposits' means the bank account is just created and money is being transferred.
'ready_for_verification' means the micro-deposits are completed and the verification process can begin by using the verify endpoint.
'verified' means the bank account is verified.

## Example Usage

```typescript
import { VerificationStatus } from "openapi/models";

let value: VerificationStatus = "awaiting_deposits";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"awaiting_deposits" | "ready_for_verification" | "verified" | Unrecognized<string>
```