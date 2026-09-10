# RecoveryCaseStatus

Status of the recovery case

## Example Usage

```typescript
import { RecoveryCaseStatus } from "@gusto/embedded-api-v-2026-06-15/models/components/recoverycase.js";

let value: RecoveryCaseStatus = "wire_initiated";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"open" | "redebit_initiated" | "wire_initiated" | "recovered" | "lost" | Unrecognized<string>
```