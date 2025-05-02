# GetV1CompaniesCompanyUuidContractorsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyUuidContractorsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyuuidcontractors.js";

let value: GetV1CompaniesCompanyUuidContractorsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  contractorList: [
    {
      uuid: "26e24de7-99e1-47ae-b37a-29028967d493",
      hourlyRate: "50.0",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `contractorList`                                                   | [components.Contractor](../../models/components/contractor.md)[]   | :heavy_minus_sign:                                                 | Example response                                                   |