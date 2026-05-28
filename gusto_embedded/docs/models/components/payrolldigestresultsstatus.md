# PayrollDigestResultsStatus

The lifecycle status of the batch request itself. Terminal values are `completed` (processing finished — inspect `results` and `exclusions` for per-company outcomes) and `failed` (request failed; can be retried). This is distinct from the per-company `status` returned inside `results[]` and `exclusions[]`.

## Example Usage

```typescript
import { PayrollDigestResultsStatus } from "@gusto/embedded-api/models/components/payrolldigestresults.js";

let value: PayrollDigestResultsStatus = "failed";
```

## Values

```typescript
"pending" | "processing" | "completed" | "failed"
```