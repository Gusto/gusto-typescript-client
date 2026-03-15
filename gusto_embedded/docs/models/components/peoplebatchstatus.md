# PeopleBatchStatus

The current status of the batch processing.

## Example Usage

```typescript
import { PeopleBatchStatus } from "@gusto/embedded-api/models/components/peoplebatch.js";

let value: PeopleBatchStatus = "pending";
```

## Values

```typescript
"pending" | "processing" | "completed" | "failed" | "partial_success"
```