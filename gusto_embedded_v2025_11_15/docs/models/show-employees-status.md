# ShowEmployeesStatus

The current status of the member portal invitation.

## Example Usage

```typescript
import { ShowEmployeesStatus } from "openapi/models";

let value: ShowEmployeesStatus = "verified";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "sent" | "verified" | "complete" | "cancelled" | Unrecognized<string>
```