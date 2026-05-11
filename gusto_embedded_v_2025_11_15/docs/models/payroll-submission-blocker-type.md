# PayrollSubmissionBlockerType

A blocker that prevents payment submission.

## Example Usage

```typescript
import { PayrollSubmissionBlockerType } from "openapi/models";

let value: PayrollSubmissionBlockerType = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `blockerType`                                                                                                     | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The type of blocker that's blocking the payment submission.                                                       |
| `blockerName`                                                                                                     | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The name of the submission blocker.                                                                               |
| `unblockOptions`                                                                                                  | [models.PayrollSubmissionBlockerTypeUnblockOption](../models/payroll-submission-blocker-type-unblock-option.md)[] | :heavy_minus_sign:                                                                                                | The available options to unblock a submission blocker.                                                            |
| `selectedOption`                                                                                                  | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The unblock option that's been selected to resolve the submission blocker.                                        |
| `status`                                                                                                          | [models.PayrollSubmissionBlockerTypeStatus](../models/payroll-submission-blocker-type-status.md)                  | :heavy_minus_sign:                                                                                                | The status of the submission blocker.                                                                             |