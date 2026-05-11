# RehireEmploymentStatus

The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.

## Example Usage

```typescript
import { RehireEmploymentStatus } from "openapi/models";

let value: RehireEmploymentStatus = "full_time";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"part_time" | "full_time" | "part_time_eligible" | "variable" | "seasonal" | "not_set" | Unrecognized<string>
```