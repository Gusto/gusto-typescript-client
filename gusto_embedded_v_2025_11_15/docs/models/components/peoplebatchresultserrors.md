# PeopleBatchResultsErrors

## Example Usage

```typescript
import { PeopleBatchResultsErrors } from "@gusto/embedded-api-v-2025-11-15/models/components/peoplebatchresults.js";

let value: PeopleBatchResultsErrors = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `errorKey`                                                                                                 | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The key identifying the error source.                                                                      |
| `category`                                                                                                 | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The error category.                                                                                        |
| `message`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Human-readable error message.                                                                              |
| `errors`                                                                                                   | [components.PeopleBatchResultsResultsErrors](../../models/components/peoplebatchresultsresultserrors.md)[] | :heavy_minus_sign:                                                                                         | Nested errors for sub-operations.                                                                          |