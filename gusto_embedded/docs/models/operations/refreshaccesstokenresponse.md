# RefreshAccessTokenResponse

## Example Usage

```typescript
import { RefreshAccessTokenResponse } from "@gusto/embedded-api/models/operations/refreshaccesstoken.js";

let value: RefreshAccessTokenResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `httpMeta`                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)     | :heavy_check_mark:                                                     | N/A                                                                    |
| `authentication`                                                       | [components.Authentication](../../models/components/authentication.md) | :heavy_minus_sign:                                                     | Example response                                                       |