# GetV1GarnishmentsChildSupportResponse

## Example Usage

```typescript
import { GetV1GarnishmentsChildSupportResponse } from "@gusto/embedded-api/models/operations/getv1garnishmentschildsupport.js";

let value: GetV1GarnishmentsChildSupportResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `httpMeta`                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `childSupportData`                                                         | [components.ChildSupportData](../../models/components/childsupportdata.md) | :heavy_minus_sign:                                                         | Example response                                                           |