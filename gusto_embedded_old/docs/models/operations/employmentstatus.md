# EmploymentStatus

The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.

## Example Usage

```typescript
import { EmploymentStatus } from "openapi/models/operations";

let value: EmploymentStatus = "part_time_eligible";
```

## Values

```typescript
"part_time" | "full_time" | "part_time_eligible" | "variable" | "seasonal" | "not_set"
```