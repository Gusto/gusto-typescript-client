# PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse

## Example Usage

```typescript
import { PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse } from "@gusto/embedded-api/models/operations/putv1companiescompanyuuidsignatoriessignatoryuuid.js";

let value: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse = {
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
| `signatory`                                                        | [components.Signatory](../../models/components/signatory.md)       | :heavy_minus_sign:                                                 | Example response                                                   |