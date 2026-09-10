# PeopleBatchResultsStatus

The current status of the batch processing.

## Example Usage

```typescript
import { PeopleBatchResultsStatus } from "@gusto/embedded-api-v-2026-06-15/models/components/peoplebatchresults.js";

let value: PeopleBatchResultsStatus = "completed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "processing" | "completed" | "failed" | "partial_success" | Unrecognized<string>
```