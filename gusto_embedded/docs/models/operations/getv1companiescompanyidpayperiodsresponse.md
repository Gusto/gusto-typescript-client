# GetV1CompaniesCompanyIdPayPeriodsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdPayPeriodsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidpayperiods.js";

let value: GetV1CompaniesCompanyIdPayPeriodsResponse = {
  contentType: "<value>",
  statusCode: 207,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `payPeriodList`                                                       | [components.PayPeriod](../../models/components/payperiod.md)[]        | :heavy_minus_sign:                                                    | Example response                                                      |