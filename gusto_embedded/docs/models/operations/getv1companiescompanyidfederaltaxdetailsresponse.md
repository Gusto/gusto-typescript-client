# GetV1CompaniesCompanyIdFederalTaxDetailsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdFederalTaxDetailsResponse } from "@gusto/embedded-api/models/operations";

let value: GetV1CompaniesCompanyIdFederalTaxDetailsResponse = {
  contentType: "<value>",
  statusCode: 103,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `contentType`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | HTTP response content type for this operation                                |
| `statusCode`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | HTTP response status code for this operation                                 |
| `rawResponse`                                                                | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)        | :heavy_check_mark:                                                           | Raw HTTP response; suitable for custom response parsing                      |
| `federalTaxDetails`                                                          | [components.FederalTaxDetails](../../models/components/federaltaxdetails.md) | :heavy_minus_sign:                                                           | Example response                                                             |