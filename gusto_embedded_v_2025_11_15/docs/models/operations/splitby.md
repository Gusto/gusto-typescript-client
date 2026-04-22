# SplitBy

How the payment will be split. If Percentage, split amounts must add up to exactly 100. If Amount, values are in cents and the last split amount must be null to capture the remainder.

## Example Usage

```typescript
import { SplitBy } from "@gusto/embedded-api-v-2025-11-15/models/operations/putv1employeesemployeeidpaymentmethod.js";

let value: SplitBy = "Percentage";
```

## Values

```typescript
"Percentage" | "Amount"
```