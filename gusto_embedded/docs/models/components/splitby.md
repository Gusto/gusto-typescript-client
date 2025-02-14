# SplitBy

Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.

## Example Usage

```typescript
import { SplitBy } from "@gusto/embedded-api/models/components";

let value: SplitBy = "Percentage";
```

## Values

```typescript
"Amount" | "Percentage"
```