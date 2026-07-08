# PayrollBatchResultsResultsStatus

The outcome of cancelling this payroll. A cancel is atomic — there is no per-payroll `partial_success`.
- `success`: the payroll was cancelled, or required no action (already cancelled / never run)
- `failed`: the payroll could not be cancelled; see `errors`


## Example Usage

```typescript
import { PayrollBatchResultsResultsStatus } from "@gusto/embedded-api-v-2026-02-01/models/components/payrollbatchresults.js";

let value: PayrollBatchResultsResultsStatus = "failed";
```

## Values

```typescript
"success" | "failed"
```