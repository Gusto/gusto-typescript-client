# ValidationType

Describes the type of tax_rate validation rule

## Example Usage

```typescript
import { ValidationType } from "openapi/models";

let value: ValidationType = "one_of";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"one_of" | "min_max" | Unrecognized<string>
```