# PostV1PayrollDigestsRequestBody

## Example Usage

```typescript
import { PostV1PayrollDigestsRequestBody } from "@gusto/embedded-api-v-2026-06-15/models/operations/postv1payrolldigests.js";

let value: PostV1PayrollDigestsRequestBody = {
  idempotencyKey: "80a74f8b-2c16-45e5-9038-aa108849c6e6",
  batchAction: "create",
  batch: [],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | A partner-generated unique identifier to ensure idempotency of the batch request. Scoped per partner.    | 80a74f8b-2c16-45e5-9038-aa108849c6e6                                                                     |
| `batchAction`                                                                                            | [operations.PostV1PayrollDigestsBatchAction](../../models/operations/postv1payrolldigestsbatchaction.md) | :heavy_check_mark:                                                                                       | The action to perform on the batch.                                                                      | create                                                                                                   |
| `batch`                                                                                                  | [operations.PostV1PayrollDigestsBatch](../../models/operations/postv1payrolldigestsbatch.md)[]           | :heavy_check_mark:                                                                                       | Array of companies to fetch payroll digest data for. Maximum 25 companies per request.                   |                                                                                                          |