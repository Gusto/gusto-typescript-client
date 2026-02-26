# GetAchTransactionsResponse

## Example Usage

```typescript
import { GetAchTransactionsResponse } from "@gusto/embedded-api-v2025-11-15/models/operations/getachtransactions.js";

let value: GetAchTransactionsResponse = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `httpMeta`                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `achTransactionList`                                                     | [components.AchTransaction](../../models/components/achtransaction.md)[] | :heavy_minus_sign:                                                       | Example response                                                         |