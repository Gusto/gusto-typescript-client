# LimitOption

Some benefits require additional information to determine
their limit.

`Family` or `Individual`: Applicable to HSA benefit.

`Joint Filing or Single` or `Married and Filing Separately`: Applicable to Dependent Care FSA benefit.

## Example Usage

```typescript
import { LimitOption } from "@gusto/embedded-api/models/operations";

let value: LimitOption = "Individual";
```

## Values

```typescript
"Family" | "Individual" | "Joint Filing or Single" | "Married and Filing Separately"
```