# SubmissionBlockers

## Example Usage

```typescript
import { SubmissionBlockers } from "@gusto/embedded-api/models/operations/putv1companiescompanyidpayrollspayrollidsubmit.js";

let value: SubmissionBlockers = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `blockerType`                                                    | *string*                                                         | :heavy_minus_sign:                                               | The type of submission_blocker that is blocking the payment.     |
| `selectedOption`                                                 | *string*                                                         | :heavy_minus_sign:                                               | The selected option to unblock the payment's submission_blocker. |