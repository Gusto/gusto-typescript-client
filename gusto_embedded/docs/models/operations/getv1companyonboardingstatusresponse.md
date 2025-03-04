# GetV1CompanyOnboardingStatusResponse

## Example Usage

```typescript
import { GetV1CompanyOnboardingStatusResponse } from "@gusto/embedded-api/models/operations";

let value: GetV1CompanyOnboardingStatusResponse = {
  contentType: "<value>",
  statusCode: 101,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `contentType`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | HTTP response content type for this operation                                            |
| `statusCode`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | HTTP response status code for this operation                                             |
| `rawResponse`                                                                            | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                    | :heavy_check_mark:                                                                       | Raw HTTP response; suitable for custom response parsing                                  |
| `companyOnboardingStatus`                                                                | [components.CompanyOnboardingStatus](../../models/components/companyonboardingstatus.md) | :heavy_minus_sign:                                                                       | Example response                                                                         |