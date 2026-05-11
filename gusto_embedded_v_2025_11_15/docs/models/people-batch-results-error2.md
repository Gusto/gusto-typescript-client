# PeopleBatchResultsError2

## Example Usage

```typescript
import { PeopleBatchResultsError2 } from "openapi/models";

let value: PeopleBatchResultsError2 = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `errorKey`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | The key identifying the error source.                                         |
| `category`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | The error category.                                                           |
| `message`                                                                     | *string*                                                                      | :heavy_minus_sign:                                                            | Human-readable error message.                                                 |
| `errors`                                                                      | [models.PeopleBatchResultsError1](../models/people-batch-results-error1.md)[] | :heavy_minus_sign:                                                            | Nested errors for sub-operations.                                             |