# ReconcileTaxMethod

How Gusto will handle taxes already collected.

## Example Usage

```typescript
import { ReconcileTaxMethod } from "openapi/models";

let value: ReconcileTaxMethod = "pay_taxes";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pay_taxes" | "refund_taxes" | Unrecognized<string>
```