# Name

The name of the paid time off type.

## Example Usage

```typescript
import { Name } from "openapi/models";

let value: Name = "Sick Hours";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Vacation Hours" | "Sick Hours" | "Holiday Hours" | Unrecognized<string>
```