# Key

A required attribute when creating a garnishment for this state agency. The current values are listed as an enum; though unlikely, values could be added if state agency requirements change in the future.

## Example Usage

```typescript
import { Key } from "openapi/models";

let value: Key = "remittance_number";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"case_number" | "order_number" | "remittance_number" | Unrecognized<string>
```