# PayrollCreditBlockerType

A blocker that prevents payment crediting.

## Example Usage

```typescript
import { PayrollCreditBlockerType } from "openapi/models";

let value: PayrollCreditBlockerType = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `blockerType`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | The type of blocker that's blocking the payment from being credited.                     |
| `blockerName`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | The name of the credit blocker.                                                          |
| `unblockOptions`                                                                         | *models.UnblockOption*[]                                                                 | :heavy_minus_sign:                                                                       | The available options to unblock a credit blocker.                                       |
| `selectedOption`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | The unblock option that's been selected to resolve the credit blocker.                   |
| `status`                                                                                 | [models.PayrollCreditBlockerTypeStatus](../models/payroll-credit-blocker-type-status.md) | :heavy_minus_sign:                                                                       | The status of the credit blocker                                                         |