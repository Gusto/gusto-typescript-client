# CreateFlowRequestEntityType

The type of target entity applicable to the flow. This field is optional for company flows.

## Example Usage

```typescript
import { CreateFlowRequestEntityType } from "@gusto/embedded-api-v2025-11-15/models/components/createflowrequest.js";

let value: CreateFlowRequestEntityType = "Payroll";
```

## Values

```typescript
"Company" | "Employee" | "Contractor" | "Payroll"
```