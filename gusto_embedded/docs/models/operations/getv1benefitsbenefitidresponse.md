# GetV1BenefitsBenefitIdResponse

## Example Usage

```typescript
import { GetV1BenefitsBenefitIdResponse } from "@gusto/embedded-api/models/operations/getv1benefitsbenefitid.js";

let value: GetV1BenefitsBenefitIdResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `httpMeta`                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `supportedBenefit`                                                         | [components.SupportedBenefit](../../models/components/supportedbenefit.md) | :heavy_minus_sign:                                                         | Supported benefit response                                                 |