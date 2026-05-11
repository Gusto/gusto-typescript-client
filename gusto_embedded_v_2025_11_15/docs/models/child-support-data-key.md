# ChildSupportDataKey

A required attribute when creating a garnishment for this state agency. The current values are listed as an enum; though unlikely, values could be added if state agency requirements change in the future.

## Example Usage

```typescript
import { ChildSupportDataKey } from "openapi/models";

let value: ChildSupportDataKey = "remittance_number";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"case_number" | "order_number" | "remittance_number" | Unrecognized<string>
```