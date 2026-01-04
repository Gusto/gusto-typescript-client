# PostV1CompaniesCompanyIdPeopleBatchesRequestBody

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdPeopleBatchesRequestBody } from "@gusto/embedded-api/models/operations/postv1companiescompanyidpeoplebatches.js";

let value: PostV1CompaniesCompanyIdPeopleBatchesRequestBody = {
  idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
  batchAction: "create",
  batch: [
    {
      entityType: "employee",
      person: {
        externalId: "<id>",
        firstName: "Peggie",
        lastName: "Powlowski",
      },
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `idempotencyKey`                                                 | *string*                                                         | :heavy_check_mark:                                               | A unique identifier to ensure idempotency of the batch request   | 550e8400-e29b-41d4-a716-446655440000                             |
| `batchAction`                                                    | [operations.BatchAction](../../models/operations/batchaction.md) | :heavy_check_mark:                                               | The action to perform on the batch                               | create                                                           |
| `batch`                                                          | [operations.Batch](../../models/operations/batch.md)[]           | :heavy_check_mark:                                               | Array of people to create                                        |                                                                  |