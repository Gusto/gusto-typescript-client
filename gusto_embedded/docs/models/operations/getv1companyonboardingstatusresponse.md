# GetV1CompanyOnboardingStatusResponse

## Example Usage

```typescript
import { GetV1CompanyOnboardingStatusResponse } from "@gusto/embedded-api/models/operations/getv1companyonboardingstatus.js";

let value: GetV1CompanyOnboardingStatusResponse = {
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
| `companyOnboardingStatus`                                                                | [components.CompanyOnboardingStatus](../../models/components/companyonboardingstatus.md) | :heavy_minus_sign:                                                                       | Example response                                                                         |