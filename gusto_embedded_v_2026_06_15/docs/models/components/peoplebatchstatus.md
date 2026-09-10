# PeopleBatchStatus

The current status of the batch processing.

## Example Usage

```typescript
import { PeopleBatchStatus } from "@gusto/embedded-api-v-2026-06-15/models/components/peoplebatch.js";

let value: PeopleBatchStatus = "pending";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "processing" | "completed" | "failed" | "partial_success" | Unrecognized<string>
```