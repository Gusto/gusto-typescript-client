# GetV1CompaniesCompanyUuidSignatoriesResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyUuidSignatoriesResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyuuidsignatories.js";

let value: GetV1CompaniesCompanyUuidSignatoriesResponse = {
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
| `signatoryList`                                                    | [components.Signatory](../../models/components/signatory.md)[]     | :heavy_minus_sign:                                                 | Example response                                                   |