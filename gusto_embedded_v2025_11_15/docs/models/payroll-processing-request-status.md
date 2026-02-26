# PayrollProcessingRequestStatus

The status of the payroll processing request

## Example Usage

```typescript
import { PayrollProcessingRequestStatus } from "openapi/models";

let value: PayrollProcessingRequestStatus = "calculating";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"calculating" | "calculate_success" | "submitting" | "submit_success" | "processing_failed" | Unrecognized<string>
```