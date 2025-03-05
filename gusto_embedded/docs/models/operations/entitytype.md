# EntityType

the type of target entity applicable to the flow. This field is optional for company flows, please refer to the flow_types table above for more details.

## Example Usage

```typescript
import { EntityType } from "@gusto/embedded-api/models/operations/postv1companyflows.js";

let value: EntityType = "Employee";
```

## Values

```typescript
"Company" | "Employee"
```