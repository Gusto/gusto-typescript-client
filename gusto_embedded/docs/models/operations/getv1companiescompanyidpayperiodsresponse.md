# GetV1CompaniesCompanyIdPayPeriodsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdPayPeriodsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidpayperiods.js";

let value: GetV1CompaniesCompanyIdPayPeriodsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `payPeriodList`                                                    | [components.PayPeriod](../../models/components/payperiod.md)[]     | :heavy_minus_sign:                                                 | Example response                                                   |