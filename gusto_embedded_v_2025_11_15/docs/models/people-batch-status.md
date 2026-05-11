# PeopleBatchStatus

The current status of the batch processing.

## Example Usage

```typescript
import { PeopleBatchStatus } from "openapi/models";

let value: PeopleBatchStatus = "pending";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "processing" | "completed" | "failed" | "partial_success" | Unrecognized<string>
```