# PayrollCreditBlockersTypeUnblockOptions

## Example Usage

```typescript
import { PayrollCreditBlockersTypeUnblockOptions } from "@gusto/embedded-api/models/components/payrollcreditblockerstype.js";

let value: PayrollCreditBlockersTypeUnblockOptions = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `unblockType`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The type of unblock option for the credit blocker.                                                           |
| `checkDate`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The payment check date associated with the unblock option.                                                   |
| `metadata`                                                                                                   | [components.PayrollCreditBlockersTypeMetadata](../../models/components/payrollcreditblockerstypemetadata.md) | :heavy_minus_sign:                                                                                           | Additional data associated with the unblock option.                                                          |