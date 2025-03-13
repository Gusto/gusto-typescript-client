# PutV1CompaniesCompanyIdFederalTaxDetailsResponse

## Example Usage

```typescript
import { PutV1CompaniesCompanyIdFederalTaxDetailsResponse } from "@gusto/embedded-api/models/operations/putv1companiescompanyidfederaltaxdetails.js";

let value: PutV1CompaniesCompanyIdFederalTaxDetailsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `httpMeta`                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)           | :heavy_check_mark:                                                           | N/A                                                                          |
| `federalTaxDetails`                                                          | [components.FederalTaxDetails](../../models/components/federaltaxdetails.md) | :heavy_minus_sign:                                                           | Example response                                                             |