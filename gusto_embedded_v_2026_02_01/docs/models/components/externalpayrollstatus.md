# ExternalPayrollStatus

The status of the external payroll. The status will be `unprocessed` when the external payroll is created and transition to `processed` once tax liabilities are entered and finalized.  Once in the `processed` status all actions that can edit an external payroll will be disabled.

## Example Usage

```typescript
import { ExternalPayrollStatus } from "@gusto/embedded-api-v-2026-02-01/models/components/externalpayroll.js";

let value: ExternalPayrollStatus = "unprocessed";
```

## Values

```typescript
"unprocessed" | "processed"
```