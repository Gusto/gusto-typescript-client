# GetV1CompaniesCompanyUuidTaxRequirementsStateResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyUuidTaxRequirementsStateResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyuuidtaxrequirementsstate.js";

let value: GetV1CompaniesCompanyUuidTaxRequirementsStateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `httpMeta`                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `taxRequirementsState`                                                             | [components.TaxRequirementsState](../../models/components/taxrequirementsstate.md) | :heavy_minus_sign:                                                                 | OK                                                                                 |