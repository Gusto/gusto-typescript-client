# ContractorStatus

The current status of the member portal invitation.

## Example Usage

```typescript
import { ContractorStatus } from "@gusto/embedded-api-v-2026-06-15/models/components/contractor.js";

let value: ContractorStatus = "cancelled";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "sent" | "verified" | "complete" | "cancelled" | Unrecognized<string>
```