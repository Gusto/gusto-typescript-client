# EmploymentHistoryListEmploymentStatus

The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.

## Example Usage

```typescript
import { EmploymentHistoryListEmploymentStatus } from "@gusto/embedded-api/models/components/employmenthistorylist.js";

let value: EmploymentHistoryListEmploymentStatus = "full_time";
```

## Values

```typescript
"part_time" | "full_time" | "part_time_eligible" | "variable" | "seasonal - not_set"
```