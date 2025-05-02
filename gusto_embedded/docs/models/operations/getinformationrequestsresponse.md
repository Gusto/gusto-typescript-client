# GetInformationRequestsResponse

## Example Usage

```typescript
import { GetInformationRequestsResponse } from "@gusto/embedded-api/models/operations/getinformationrequests.js";

let value: GetInformationRequestsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `informationRequestList`                                                         | [components.InformationRequest](../../models/components/informationrequest.md)[] | :heavy_minus_sign:                                                               | Example response                                                                 |