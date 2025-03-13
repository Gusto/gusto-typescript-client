# GetV1BenefitsBenefitsIdRequirementsResponse

## Example Usage

```typescript
import { GetV1BenefitsBenefitsIdRequirementsResponse } from "@gusto/embedded-api/models/operations/getv1benefitsbenefitsidrequirements.js";

let value: GetV1BenefitsBenefitsIdRequirementsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `benefitTypeRequirements`                                                                | [components.BenefitTypeRequirements](../../models/components/benefittyperequirements.md) | :heavy_minus_sign:                                                                       | Benefit type requirements response                                                       |