# GetV1TokenInfoResponse

## Example Usage

```typescript
import { GetV1TokenInfoResponse } from "@gusto/embedded-api/models/operations/getv1tokeninfo.js";

let value: GetV1TokenInfoResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `object`                                                                                       | [operations.GetV1TokenInfoResponseBody](../../models/operations/getv1tokeninforesponsebody.md) | :heavy_minus_sign:                                                                             | Example response                                                                               |