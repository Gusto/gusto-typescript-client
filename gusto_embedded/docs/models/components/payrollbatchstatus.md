# PayrollBatchStatus

The lifecycle status of the batch request itself. Terminal values are `completed` (processing finished — inspect `results` and `exclusions` for per-payroll outcomes) and `failed` (the batch crashed at the system level; can be retried). This is distinct from the per-payroll `status` returned inside `results[]`. A `completed` batch does not imply every payroll was cancelled.

## Example Usage

```typescript
import { PayrollBatchStatus } from "@gusto/embedded-api/models/components/payrollbatch.js";

let value: PayrollBatchStatus = "pending";
```

## Values

```typescript
"pending" | "processing" | "completed" | "failed"
```