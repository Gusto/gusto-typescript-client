# GetRecoveryCasesResponse

## Example Usage

```typescript
import { GetRecoveryCasesResponse } from "@gusto/embedded-api/models/operations/getrecoverycases.js";

let value: GetRecoveryCasesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `httpMeta`                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)   | :heavy_check_mark:                                                   | N/A                                                                  |
| `recoveryCaseList`                                                   | [components.RecoveryCase](../../models/components/recoverycase.md)[] | :heavy_minus_sign:                                                   | Example response                                                     |