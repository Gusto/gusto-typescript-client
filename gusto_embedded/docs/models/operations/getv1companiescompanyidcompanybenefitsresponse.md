# GetV1CompaniesCompanyIdCompanyBenefitsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdCompanyBenefitsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidcompanybenefits.js";

let value: GetV1CompaniesCompanyIdCompanyBenefitsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `httpMeta`                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `companyBenefitList`                                                     | [components.CompanyBenefit](../../models/components/companybenefit.md)[] | :heavy_minus_sign:                                                       | Example response                                                         |