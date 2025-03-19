# Reason

Explanation for why the company is suspending their account.

> 🚧 FEIN or entity type changes require Customer Support
>
> If a company is switching FEIN or changing their entity type, this change must be performed by Gusto Customer Support and cannot be performed via the API at this time.

## Example Usage

```typescript
import { Reason } from "@gusto/embedded-api/models/operations/postcompaniescompanyuuidsuspensions.js";

let value: Reason = "shutting_down";
```

## Values

```typescript
"switching_provider" | "shutting_down" | "acquired" | "no_more_employees" | "changing_ein_or_entity_type"
```