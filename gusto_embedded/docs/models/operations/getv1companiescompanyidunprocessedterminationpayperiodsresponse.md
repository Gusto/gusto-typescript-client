# GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidunprocessedterminationpayperiods.js";

let value: GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `unprocessedTerminationPayPeriodList`                                                                      | [components.UnprocessedTerminationPayPeriod](../../models/components/unprocessedterminationpayperiod.md)[] | :heavy_minus_sign:                                                                                         | Example response                                                                                           |