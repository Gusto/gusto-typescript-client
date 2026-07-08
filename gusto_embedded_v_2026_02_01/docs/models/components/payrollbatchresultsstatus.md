# PayrollBatchResultsStatus

The lifecycle status of the batch request itself. Terminal values are `completed` (processing finished — inspect `results` and `exclusions` for per-payroll outcomes) and `failed` (the batch crashed at the system level; can be retried). This is distinct from the per-payroll `status` returned inside `results[]`. A `completed` batch does not imply every payroll was cancelled.

## Example Usage

```typescript
import { PayrollBatchResultsStatus } from "@gusto/embedded-api-v-2026-02-01/models/components/payrollbatchresults.js";

let value: PayrollBatchResultsStatus = "completed";
```

## Values

```typescript
"pending" | "processing" | "completed" | "failed"
```