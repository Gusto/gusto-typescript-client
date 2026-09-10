# AuthorizationStatus

The employee's authorization status

## Example Usage

```typescript
import { AuthorizationStatus } from "@gusto/embedded-api-v-2026-06-15/models/components/i9authorization.js";

let value: AuthorizationStatus = "citizen";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"citizen" | "noncitizen" | "permanent_resident" | "alien" | Unrecognized<string>
```