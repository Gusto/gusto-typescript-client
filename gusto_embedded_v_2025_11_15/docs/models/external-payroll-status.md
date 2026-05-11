# ExternalPayrollStatus

The status of the external payroll. The status will be `unprocessed` when the external payroll is created and transition to `processed` once tax liabilities are entered and finalized.  Once in the `processed` status all actions that can edit an external payroll will be disabled.

## Example Usage

```typescript
import { ExternalPayrollStatus } from "openapi/models";

let value: ExternalPayrollStatus = "unprocessed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"unprocessed" | "processed" | Unrecognized<string>
```