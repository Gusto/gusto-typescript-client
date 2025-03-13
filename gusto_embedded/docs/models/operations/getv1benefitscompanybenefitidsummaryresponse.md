# GetV1BenefitsCompanyBenefitIdSummaryResponse

## Example Usage

```typescript
import { GetV1BenefitsCompanyBenefitIdSummaryResponse } from "@gusto/embedded-api/models/operations/getv1benefitscompanybenefitidsummary.js";

let value: GetV1BenefitsCompanyBenefitIdSummaryResponse = {
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
| `benefitSummary`                                                       | [components.BenefitSummary](../../models/components/benefitsummary.md) | :heavy_minus_sign:                                                     | Benefit summary response                                               |