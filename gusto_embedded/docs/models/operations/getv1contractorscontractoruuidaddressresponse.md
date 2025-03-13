# GetV1ContractorsContractorUuidAddressResponse

## Example Usage

```typescript
import { GetV1ContractorsContractorUuidAddressResponse } from "@gusto/embedded-api/models/operations/getv1contractorscontractoruuidaddress.js";

let value: GetV1ContractorsContractorUuidAddressResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  contractorAddress: {
    street1: "412 Kiera Stravenue",
    street2: "Suite 391",
    city: "San Francisco",
    state: "CA",
    zip: "94107",
    active: true,
  },
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              | Example                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                                       | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |                                                                                                                                                          |
| `contractorAddress`                                                                                                                                      | [components.ContractorAddress](../../models/components/contractoraddress.md)                                                                             | :heavy_minus_sign:                                                                                                                                       | Example response                                                                                                                                         | {<br/>"street_1": "412 Kiera Stravenue",<br/>"street_2": "Suite 391",<br/>"city": "San Francisco",<br/>"state": "CA",<br/>"zip": "94107",<br/>"country": "USA",<br/>"active": true<br/>} |