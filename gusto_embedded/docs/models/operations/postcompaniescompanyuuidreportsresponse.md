# PostCompaniesCompanyUuidReportsResponse

## Example Usage

```typescript
import { PostCompaniesCompanyUuidReportsResponse } from "@gusto/embedded-api/models/operations/postcompaniescompanyuuidreports.js";

let value: PostCompaniesCompanyUuidReportsResponse = {
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
| `createReport`                                                     | [components.CreateReport](../../models/components/createreport.md) | :heavy_minus_sign:                                                 | Example response                                                   |