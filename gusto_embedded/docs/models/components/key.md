# Key

A required attribute when creating a garnishment for this state agency. The current values are listed as an enum; though unlikely, values could be added if state agency requirements change in the future.

## Example Usage

```typescript
import { Key } from "@gusto/embedded-api/models/components/childsupportdata.js";

let value: Key = "order_number";
```

## Values

```typescript
"case_number" | "order_number" | "remittance_number"
```