# EmploymentStatus

The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.

## Example Usage

```typescript
import { EmploymentStatus } from "@gusto/embedded-api-v2025-11-15/models/operations/putv1employeesemployeeidrehire.js";

let value: EmploymentStatus = "not_set";
```

## Values

```typescript
"part_time" | "full_time" | "part_time_eligible" | "variable" | "seasonal" | "not_set"
```