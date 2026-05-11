# SubmissionBlocker

## Example Usage

```typescript
import { SubmissionBlocker } from "openapi/models/operations";

let value: SubmissionBlocker = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `blockerType`                                                 | *string*                                                      | :heavy_minus_sign:                                            | The type of blocker that is blocking the payment submission   |
| `selectedOption`                                              | *string*                                                      | :heavy_minus_sign:                                            | The unblock option selected to resolve the submission blocker |
| `message`                                                     | *string*                                                      | :heavy_minus_sign:                                            | Optional message related to the blocker                       |
| `options`                                                     | [operations.Option](../../models/operations/option.md)[]      | :heavy_minus_sign:                                            | Optional array of additional options for the blocker          |