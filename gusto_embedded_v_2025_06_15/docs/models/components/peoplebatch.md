# PeopleBatch

A batch for bulk people creation.

## Example Usage

```typescript
import { PeopleBatch } from "@gusto/embedded-api-v2025-06-15/models/components/peoplebatch.js";

let value: PeopleBatch = {
  uuid: "47d41b97-c52d-4bc4-b151-773dfbb7bc66",
  idempotencyKey: "651f7482-172b-49a1-94f7-e1ea49724eee",
  status: "completed",
  batchAction: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The unique identifier of the people batch.                                   |
| `idempotencyKey`                                                             | *string*                                                                     | :heavy_check_mark:                                                           | The idempotency key provided when creating the batch.                        |
| `status`                                                                     | [components.PeopleBatchStatus](../../models/components/peoplebatchstatus.md) | :heavy_check_mark:                                                           | The current status of the batch processing.                                  |
| `batchAction`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | The action being performed on the batch.                                     |