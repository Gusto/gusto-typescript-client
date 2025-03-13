# GetV1ContractorsContractorUuidPaymentMethodResponse

## Example Usage

```typescript
import { GetV1ContractorsContractorUuidPaymentMethodResponse } from "@gusto/embedded-api/models/operations/getv1contractorscontractoruuidpaymentmethod.js";

let value: GetV1ContractorsContractorUuidPaymentMethodResponse = {
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
| `contractorPaymentMethod`                                                                | [components.ContractorPaymentMethod](../../models/components/contractorpaymentmethod.md) | :heavy_minus_sign:                                                                       | Example response                                                                         |