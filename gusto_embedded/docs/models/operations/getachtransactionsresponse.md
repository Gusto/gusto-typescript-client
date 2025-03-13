# GetAchTransactionsResponse

## Example Usage

```typescript
import { GetAchTransactionsResponse } from "@gusto/embedded-api/models/operations/getachtransactions.js";

let value: GetAchTransactionsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `httpMeta`                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `achTransactionList`                                                     | [components.AchTransaction](../../models/components/achtransaction.md)[] | :heavy_minus_sign:                                                       | Example response                                                         |