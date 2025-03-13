# GetV1JobsJobIdCompensationsResponse

## Example Usage

```typescript
import { GetV1JobsJobIdCompensationsResponse } from "@gusto/embedded-api/models/operations/getv1jobsjobidcompensations.js";

let value: GetV1JobsJobIdCompensationsResponse = {
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
| `compensationList`                                                   | [components.Compensation](../../models/components/compensation.md)[] | :heavy_minus_sign:                                                   | Example response                                                     |