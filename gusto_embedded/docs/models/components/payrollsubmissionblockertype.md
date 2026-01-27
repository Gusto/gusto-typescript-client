# PayrollSubmissionBlockerType

A blocker that prevents payment submission.

## Example Usage

```typescript
import { PayrollSubmissionBlockerType } from "@gusto/embedded-api/models/components/payrollsubmissionblockertype.js";

let value: PayrollSubmissionBlockerType = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `blockerType`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The type of blocker that's blocking the payment submission.                                                    |
| `blockerName`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The name of the submission blocker.                                                                            |
| `unblockOptions`                                                                                               | [components.UnblockOptions](../../models/components/unblockoptions.md)[]                                       | :heavy_minus_sign:                                                                                             | The available options to unblock a submission blocker.                                                         |
| `selectedOption`                                                                                               | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The unblock option that's been selected to resolve the submission blocker.                                     |
| `status`                                                                                                       | [components.PayrollSubmissionBlockerTypeStatus](../../models/components/payrollsubmissionblockertypestatus.md) | :heavy_minus_sign:                                                                                             | The status of the submission blocker.                                                                          |