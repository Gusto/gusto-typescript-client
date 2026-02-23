# PayrollSubmissionBlockerRequestType

Request object for resolving a submission blocker. Each submission_blocker should include a selected unblock option.

## Example Usage

```typescript
import { PayrollSubmissionBlockerRequestType } from "@gusto/embedded-api/models/components/payrollsubmissionblockerrequesttype.js";

let value: PayrollSubmissionBlockerRequestType = {
  blockerType: "<value>",
  selectedOption: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `blockerType`                                                    | *string*                                                         | :heavy_check_mark:                                               | The type of submission_blocker that is blocking the payment.     |
| `selectedOption`                                                 | *string*                                                         | :heavy_check_mark:                                               | The selected option to unblock the payment's submission_blocker. |