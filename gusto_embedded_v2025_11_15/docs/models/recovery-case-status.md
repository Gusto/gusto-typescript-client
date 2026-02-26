# RecoveryCaseStatus

Status of the recovery case

## Example Usage

```typescript
import { RecoveryCaseStatus } from "openapi/models";

let value: RecoveryCaseStatus = "wire_initiated";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"open" | "redebit_initiated" | "wire_initiated" | "recovered" | "lost" | Unrecognized<string>
```