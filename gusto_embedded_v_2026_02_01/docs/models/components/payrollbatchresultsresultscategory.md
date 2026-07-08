# PayrollBatchResultsResultsCategory

Machine-readable reason the cancellation failed.
- `not_cancellable`: the payroll is past the point where it can be cancelled
- `internal_error`: an unexpected error occurred; the request can be retried


## Example Usage

```typescript
import { PayrollBatchResultsResultsCategory } from "@gusto/embedded-api-v-2026-02-01/models/components/payrollbatchresults.js";

let value: PayrollBatchResultsResultsCategory = "not_cancellable";
```

## Values

```typescript
"not_cancellable" | "internal_error"
```