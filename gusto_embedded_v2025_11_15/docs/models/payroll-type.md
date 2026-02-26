# PayrollType

Whether it is regular pay period or transition pay period.

## Example Usage

```typescript
import { PayrollType } from "openapi/models";

let value: PayrollType = "regular";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"regular" | "transition" | Unrecognized<string>
```