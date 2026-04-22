# PeopleBatchResults

A people batch with processing results.

## Example Usage

```typescript
import { PeopleBatchResults } from "@gusto/embedded-api-v-2025-11-15/models/components/peoplebatchresults.js";

let value: PeopleBatchResults = {
  uuid: "2485be08-f6ed-4b95-82d1-2c98db92754c",
  idempotencyKey: "acf2f8a5-bc01-4d1e-bfb5-655b657ccb0b",
  status: "partial_success",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `uuid`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the people batch.                                                    |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The idempotency key provided when creating the batch.                                         |
| `status`                                                                                      | [components.PeopleBatchResultsStatus](../../models/components/peoplebatchresultsstatus.md)    | :heavy_check_mark:                                                                            | The current status of the batch processing.                                                   |
| `submittedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the batch was submitted.                                                   |
| `completedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the batch processing completed.                                            |
| `submittedItems`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of items submitted in the batch.                                                   |
| `processedItems`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of items successfully processed.                                                   |
| `excludedItems`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of items excluded from processing.                                                 |
| `results`                                                                                     | [components.Results](../../models/components/results.md)[]                                    | :heavy_minus_sign:                                                                            | The results for each batch item.                                                              |
| `exclusions`                                                                                  | [components.Exclusions](../../models/components/exclusions.md)[]                              | :heavy_minus_sign:                                                                            | Items excluded from processing due to validation errors.                                      |