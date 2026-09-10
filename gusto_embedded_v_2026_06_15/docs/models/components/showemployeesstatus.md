# ShowEmployeesStatus

The current status of the member portal invitation.

## Example Usage

```typescript
import { ShowEmployeesStatus } from "@gusto/embedded-api-v-2026-06-15/models/components/showemployees.js";

let value: ShowEmployeesStatus = "verified";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "sent" | "verified" | "complete" | "cancelled" | Unrecognized<string>
```