# Status

The batch's processing state.
- `pending`: accepted, not yet started
- `processing`: reports are being generated
- `completed`: all reports finished
- `failed`: the batch failed before completing


## Example Usage

```typescript
import { Status } from "@gusto/embedded-api-v-2026-02-01/models/components/createbulkreport.js";

let value: Status = "completed";
```

## Values

```typescript
"pending" | "processing" | "completed" | "failed"
```