# PostPayrollsGrossUpPayrollUuidResponse

## Example Usage

```typescript
import { PostPayrollsGrossUpPayrollUuidResponse } from "@gusto/embedded-api/models/operations/postpayrollsgrossuppayrolluuid.js";

let value: PostPayrollsGrossUpPayrollUuidResponse = {
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
| `grossUpPay`                                                       | [components.GrossUpPay](../../models/components/grossuppay.md)     | :heavy_minus_sign:                                                 | Example response                                                   |