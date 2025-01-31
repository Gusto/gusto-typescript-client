# PayrollSubmissionBlockersType

## Example Usage

```typescript
import { PayrollSubmissionBlockersType } from "@gusto/embedded-api/models/components";

let value: PayrollSubmissionBlockersType = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `blockerType`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The type of blocker that's blocking the payment submission.                                                      |
| `blockerName`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The name of the submission blocker.                                                                              |
| `unblockOptions`                                                                                                 | [components.UnblockOptions](../../models/components/unblockoptions.md)[]                                         | :heavy_minus_sign:                                                                                               | The available options to unblock a submission blocker.                                                           |
| `selectedOption`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The unblock option that's been selected to resolve the submission blocker.                                       |
| `status`                                                                                                         | [components.PayrollSubmissionBlockersTypeStatus](../../models/components/payrollsubmissionblockerstypestatus.md) | :heavy_minus_sign:                                                                                               | The status of the submission blocker.                                                                            |