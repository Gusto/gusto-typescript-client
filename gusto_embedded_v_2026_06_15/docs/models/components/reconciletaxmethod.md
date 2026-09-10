# ReconcileTaxMethod

How Gusto will handle taxes already collected.

## Example Usage

```typescript
import { ReconcileTaxMethod } from "@gusto/embedded-api-v-2026-06-15/models/components/companysuspension.js";

let value: ReconcileTaxMethod = "pay_taxes";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pay_taxes" | "refund_taxes" | Unrecognized<string>
```