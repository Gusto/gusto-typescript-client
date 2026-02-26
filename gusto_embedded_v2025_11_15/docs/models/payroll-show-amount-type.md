# PayrollShowAmountType

The amount type of the deduction for the pay period. Only present for calculated or processed payrolls.

## Example Usage

```typescript
import { PayrollShowAmountType } from "openapi/models";

let value: PayrollShowAmountType = "percent";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"fixed" | "percent" | Unrecognized<string>
```