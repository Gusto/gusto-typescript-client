# IdentityVerificationStatus

|   |   |
|---|---|
|__Status__| __Description__ |
| Pass | Signatory can sign all forms |
| Fail | Signatory cannot sign forms |
| Skipped | Signatory cannot sign Form 8655 until the form is manually uploaded as wet-signed |
| null | Identity verification process has not been completed |

## Example Usage

```typescript
import { IdentityVerificationStatus } from "@gusto/embedded-api/models/components/signatory.js";

let value: IdentityVerificationStatus = "Skipped";
```

## Values

```typescript
"Pass" | "Fail" | "Skipped"
```