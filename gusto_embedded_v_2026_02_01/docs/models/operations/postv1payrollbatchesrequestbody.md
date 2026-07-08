# PostV1PayrollBatchesRequestBody

## Example Usage

```typescript
import { PostV1PayrollBatchesRequestBody } from "@gusto/embedded-api-v-2026-02-01/models/operations/postv1payrollbatches.js";

let value: PostV1PayrollBatchesRequestBody = {
  idempotencyKey: "80a74f8b-2c16-45e5-9038-aa108849c6e6",
  batchAction: "cancel",
  batch: [],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | A partner-generated unique identifier to ensure idempotency of the batch request. Scoped per partner. | 80a74f8b-2c16-45e5-9038-aa108849c6e6                                                                  |
| `batchAction`                                                                                         | [operations.BatchAction](../../models/operations/batchaction.md)                                      | :heavy_check_mark:                                                                                    | The action to perform on the batch. Only `cancel` is supported.                                       | cancel                                                                                                |
| `batch`                                                                                               | [operations.Batch](../../models/operations/batch.md)[]                                                | :heavy_check_mark:                                                                                    | Array of payrolls to cancel. Maximum 100 payrolls per request.                                        |                                                                                                       |