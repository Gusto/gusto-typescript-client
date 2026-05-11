# ReconcileTaxMethod

How Gusto will handle taxes already collected.

## Example Usage

```typescript
import { ReconcileTaxMethod } from "openapi/models";

let value: ReconcileTaxMethod = "pay_taxes";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pay_taxes" | "refund_taxes" | Unrecognized<string>
```