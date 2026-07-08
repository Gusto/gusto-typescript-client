# Status

The batch's processing state.
- `pending`: accepted, not yet started
- `processing`: reports are being generated
- `completed`: all reports finished
- `failed`: the batch failed before completing


## Example Usage

```typescript
import { Status } from "@gusto/embedded-api/models/components/createbulkreport.js";

let value: Status = "completed";
```

## Values

```typescript
"pending" | "processing" | "completed" | "failed"
```