# TimeOffPolicyPolicyType

Type of the time off policy. Only "vacation" and "sick" can be created through the API, but other types may be present if the company was previously a Gusto.com customer.

## Example Usage

```typescript
import { TimeOffPolicyPolicyType } from "openapi/models";

let value: TimeOffPolicyPolicyType = "volunteer";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"vacation" | "sick" | "bereavement" | "custom" | "floating_holiday" | "jury_duty" | "learning_and_development" | "parental_leave" | "personal_day" | "volunteer" | "weather" | Unrecognized<string>
```