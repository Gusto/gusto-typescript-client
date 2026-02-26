# AuthorizationStatus

The employee's authorization status

## Example Usage

```typescript
import { AuthorizationStatus } from "openapi/models";

let value: AuthorizationStatus = "citizen";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"citizen" | "noncitizen" | "permanent_resident" | "alien" | Unrecognized<string>
```