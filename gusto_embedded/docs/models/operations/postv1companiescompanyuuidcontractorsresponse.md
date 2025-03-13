# PostV1CompaniesCompanyUuidContractorsResponse

## Example Usage

```typescript
import { PostV1CompaniesCompanyUuidContractorsResponse } from "@gusto/embedded-api/models/operations/postv1companiescompanyuuidcontractors.js";

let value: PostV1CompaniesCompanyUuidContractorsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  contractor: {
    uuid: "9cc5cb2d-7779-497d-ba66-c530ee1521e0",
    hourlyRate: "50.0",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `contractor`                                                       | [components.Contractor](../../models/components/contractor.md)     | :heavy_minus_sign:                                                 | Example response                                                   |