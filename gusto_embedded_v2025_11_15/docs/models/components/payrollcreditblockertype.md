# PayrollCreditBlockerType

A blocker that prevents payment crediting.

## Example Usage

```typescript
import { PayrollCreditBlockerType } from "@gusto/embedded-api-v2025-11-15/models/components/payrollcreditblockertype.js";

let value: PayrollCreditBlockerType = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `blockerType`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The type of blocker that's blocking the payment from being credited.                                   |
| `blockerName`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The name of the credit blocker.                                                                        |
| `unblockOptions`                                                                                       | *components.PayrollCreditBlockerTypeUnblockOptions*[]                                                  | :heavy_minus_sign:                                                                                     | The available options to unblock a credit blocker.                                                     |
| `selectedOption`                                                                                       | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The unblock option that's been selected to resolve the credit blocker.                                 |
| `status`                                                                                               | [components.PayrollCreditBlockerTypeStatus](../../models/components/payrollcreditblockertypestatus.md) | :heavy_minus_sign:                                                                                     | The status of the credit blocker                                                                       |