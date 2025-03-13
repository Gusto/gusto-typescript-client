# PutV1CompanyPaymentConfigsResponse

## Example Usage

```typescript
import { PutV1CompanyPaymentConfigsResponse } from "@gusto/embedded-api/models/operations/putv1companypaymentconfigs.js";

let value: PutV1CompanyPaymentConfigsResponse = {
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
| `paymentConfigs`                                                       | [components.PaymentConfigs](../../models/components/paymentconfigs.md) | :heavy_minus_sign:                                                     | Example response                                                       |