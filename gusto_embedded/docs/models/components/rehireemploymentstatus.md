# RehireEmploymentStatus

The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.

## Example Usage

```typescript
import { RehireEmploymentStatus } from "gusto-embedded/models/components";

let value: RehireEmploymentStatus = "variable";
```

## Values

```typescript
"part_time" | "full_time" | "part_time_eligible" | "variable" | "seasonal" | "not_set"
```