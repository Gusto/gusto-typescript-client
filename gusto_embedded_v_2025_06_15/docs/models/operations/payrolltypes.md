# PayrollTypes

Comma-separated list of payroll types to include (regular, transition). Defaults to regular only.

## Example Usage

```typescript
import { PayrollTypes } from "@gusto/embedded-api/models/operations/getv1companiescompanyidpayperiods.js";

let value: PayrollTypes = "regular,transition";
```

## Values

```typescript
"regular" | "transition" | "regular,transition"
```