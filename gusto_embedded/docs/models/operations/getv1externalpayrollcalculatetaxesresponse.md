# GetV1ExternalPayrollCalculateTaxesResponse

## Example Usage

```typescript
import { GetV1ExternalPayrollCalculateTaxesResponse } from "@gusto/embedded-api/models/operations/getv1externalpayrollcalculatetaxes.js";

let value: GetV1ExternalPayrollCalculateTaxesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `externalPayrollTaxSuggestionsList`                                                                    | [components.ExternalPayrollTaxSuggestions](../../models/components/externalpayrolltaxsuggestions.md)[] | :heavy_minus_sign:                                                                                     | Example response                                                                                       |