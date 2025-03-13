# PutV1CompanyBenefitsCompanyBenefitIdResponse

## Example Usage

```typescript
import { PutV1CompanyBenefitsCompanyBenefitIdResponse } from "@gusto/embedded-api/models/operations/putv1companybenefitscompanybenefitid.js";

let value: PutV1CompanyBenefitsCompanyBenefitIdResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `httpMeta`                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)     | :heavy_check_mark:                                                     | N/A                                                                    |
| `companyBenefit`                                                       | [components.CompanyBenefit](../../models/components/companybenefit.md) | :heavy_minus_sign:                                                     | Example response                                                       |