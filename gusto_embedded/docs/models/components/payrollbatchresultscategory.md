# PayrollBatchResultsCategory

Machine-readable category for why the payroll was excluded.
- `not_found`: the payroll does not exist, or is not associated with a company the partner is mapped to
- `duplicate_operation`: the same payroll UUID appeared more than once in the request; only the first occurrence is processed


## Example Usage

```typescript
import { PayrollBatchResultsCategory } from "@gusto/embedded-api/models/components/payrollbatchresults.js";

let value: PayrollBatchResultsCategory = "duplicate_operation";
```

## Values

```typescript
"not_found" | "duplicate_operation"
```