# SubmissionBlockers

## Example Usage

```typescript
import { SubmissionBlockers } from "@gusto/embedded-api/models/operations/postv1companiescompanyidcontractorpaymentgroups.js";

let value: SubmissionBlockers = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `blockerType`                                                 | *string*                                                      | :heavy_minus_sign:                                            | The type of blocker that is blocking the payment submission   |
| `selectedOption`                                              | *string*                                                      | :heavy_minus_sign:                                            | The unblock option selected to resolve the submission blocker |
| `message`                                                     | *string*                                                      | :heavy_minus_sign:                                            | Optional message related to the blocker                       |
| `options`                                                     | [operations.Options](../../models/operations/options.md)[]    | :heavy_minus_sign:                                            | Optional array of additional options for the blocker          |