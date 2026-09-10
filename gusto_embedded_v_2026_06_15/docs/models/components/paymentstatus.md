# PaymentStatus

The status of the ACH transaction

## Example Usage

```typescript
import { PaymentStatus } from "@gusto/embedded-api-v-2026-06-15/models/components/achtransaction.js";

let value: PaymentStatus = "successful";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"unsubmitted" | "submitted" | "successful" | "failed" | Unrecognized<string>
```