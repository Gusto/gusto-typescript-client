# UnblockOptions

## Example Usage

```typescript
import { UnblockOptions } from "@gusto/embedded-api/models/components/payrollsubmissionblockertype.js";

let value: UnblockOptions = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `unblockType`                                              | *string*                                                   | :heavy_minus_sign:                                         | The type of unblock option for the submission blocker.     |
| `checkDate`                                                | *string*                                                   | :heavy_minus_sign:                                         | The payment check date associated with the unblock option. |
| `metadata`                                                 | Record<string, *any*>                                      | :heavy_minus_sign:                                         | Additional data associated with the unblock option.        |