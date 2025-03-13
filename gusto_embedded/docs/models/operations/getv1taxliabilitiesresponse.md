# GetV1TaxLiabilitiesResponse

## Example Usage

```typescript
import { GetV1TaxLiabilitiesResponse } from "@gusto/embedded-api/models/operations/getv1taxliabilities.js";

let value: GetV1TaxLiabilitiesResponse = {
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
| `taxLiabilitiesList`                                                                           | [components.TaxLiabilitiesSelections](../../models/components/taxliabilitiesselections.md)[][] | :heavy_minus_sign:                                                                             | Example response                                                                               |