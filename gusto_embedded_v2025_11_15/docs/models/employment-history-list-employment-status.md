# EmploymentHistoryListEmploymentStatus

The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.

## Example Usage

```typescript
import { EmploymentHistoryListEmploymentStatus } from "openapi/models";

let value: EmploymentHistoryListEmploymentStatus = "full_time";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"part_time" | "full_time" | "part_time_eligible" | "variable" | "seasonal - not_set" | Unrecognized<string>
```