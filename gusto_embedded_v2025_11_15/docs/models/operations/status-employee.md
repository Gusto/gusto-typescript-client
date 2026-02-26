# StatusEmployee

The status of this batch item

## Example Usage

```typescript
import { StatusEmployee } from "openapi/models/operations";

let value: StatusEmployee = "failed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"success" | "partial_success" | "failed" | Unrecognized<string>
```