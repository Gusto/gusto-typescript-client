# ExternalPayrollBasicStatus

The status of the external payroll. The status will be `unprocessed` when the external payroll is created and transition to `processed` once tax liabilities are entered and finalized.  Once in the `processed` status all actions that can edit an external payroll will be disabled.

## Example Usage

```typescript
import { ExternalPayrollBasicStatus } from "gusto-embedded/models/components";

let value: ExternalPayrollBasicStatus = "unprocessed";
```

## Values

```typescript
"unprocessed" | "processed"
```