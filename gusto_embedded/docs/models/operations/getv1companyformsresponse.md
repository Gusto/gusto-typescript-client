# GetV1CompanyFormsResponse

## Example Usage

```typescript
import { GetV1CompanyFormsResponse } from "@gusto/embedded-api/models/operations/getv1companyforms.js";

let value: GetV1CompanyFormsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `formList`                                                         | [components.Form](../../models/components/form.md)[]               | :heavy_minus_sign:                                                 | Example response                                                   |