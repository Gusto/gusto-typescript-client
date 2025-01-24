# CurrentEmploymentStatus

The current employment status of the employee. Full-time employees work 30+ hours per week. Part-time employees are split into two groups: those that work 20-29 hours a week, and those that work under 20 hours a week. Variable employees have hours that vary each week. Seasonal employees are hired for 6 months of the year or less.

## Example Usage

```typescript
import { CurrentEmploymentStatus } from "gusto-embedded/models/components";

let value: CurrentEmploymentStatus = "variable";
```

## Values

```typescript
"full_time" | "part_time_under_twenty_hours" | "part_time_twenty_plus_hours" | "variable" | "seasonal"
```