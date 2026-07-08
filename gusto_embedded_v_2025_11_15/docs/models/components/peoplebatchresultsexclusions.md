# PeopleBatchResultsExclusions

## Example Usage

```typescript
import { PeopleBatchResultsExclusions } from "@gusto/embedded-api-v-2025-11-15/models/components/peoplebatchresults.js";

let value: PeopleBatchResultsExclusions = {};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `externalId`                                | *string*                                    | :heavy_minus_sign:                          | The external ID of the excluded item(s).    |
| `category`                                  | *string*                                    | :heavy_minus_sign:                          | The exclusion category.                     |
| `message`                                   | *string*                                    | :heavy_minus_sign:                          | Human-readable explanation for exclusion.   |
| `itemCount`                                 | *number*                                    | :heavy_minus_sign:                          | Number of items affected by this exclusion. |