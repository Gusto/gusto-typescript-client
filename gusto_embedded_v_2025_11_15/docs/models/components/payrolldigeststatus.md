# PayrollDigestStatus

The lifecycle status of the batch request itself. Terminal values are `completed` (processing finished — inspect `results` and `exclusions` for per-company outcomes) and `failed` (request failed; can be retried). This is distinct from the per-company `status` returned inside `results[]` and `exclusions[]`.

## Example Usage

```typescript
import { PayrollDigestStatus } from "@gusto/embedded-api-v-2025-11-15/models/components/payrolldigest.js";

let value: PayrollDigestStatus = "failed";
```

## Values

```typescript
"pending" | "processing" | "completed" | "failed"
```