# GetWireInRequestsWireInRequestUuidResponse

## Example Usage

```typescript
import { GetWireInRequestsWireInRequestUuidResponse } from "@gusto/embedded-api/models/operations/getwireinrequestswireinrequestuuid.js";

let value: GetWireInRequestsWireInRequestUuidResponse = {
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
| `wireInRequest`                                                      | [components.WireInRequest](../../models/components/wireinrequest.md) | :heavy_minus_sign:                                                   | Example response                                                     |