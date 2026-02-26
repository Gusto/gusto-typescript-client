# SplitBy

Describes how the payment will be split. If `split_by` is Percentage, then the `split` amounts must add up to exactly 100. If `split_by` is Amount, then amount is in cents and the last `split` amount must be `null` to capture the remainder.

## Example Usage

```typescript
import { SplitBy } from "@gusto/embedded-api-v2025-11-15/models/operations/putv1employeesemployeeidpaymentmethod.js";

let value: SplitBy = "Amount";
```

## Values

```typescript
"Amount" | "Percentage"
```