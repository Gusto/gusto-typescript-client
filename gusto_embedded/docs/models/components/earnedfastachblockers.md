# EarnedFastAchBlockers

## Example Usage

```typescript
import { EarnedFastAchBlockers } from "@gusto/embedded-api/models/components/paymentconfigs.js";

let value: EarnedFastAchBlockers = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `blockerType`                                                    | [components.BlockerType](../../models/components/blockertype.md) | :heavy_minus_sign:                                               | The type of blocker                                              |
| `threshold`                                                      | *number*                                                         | :heavy_minus_sign:                                               | The threshold needed to unblock                                  |