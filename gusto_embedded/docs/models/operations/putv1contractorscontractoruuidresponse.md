# PutV1ContractorsContractorUuidResponse

## Example Usage

```typescript
import { PutV1ContractorsContractorUuidResponse } from "@gusto/embedded-api/models/operations/putv1contractorscontractoruuid.js";

let value: PutV1ContractorsContractorUuidResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  contractor: {
    uuid: "f3a907b0-e803-4f91-8470-6739c39afcd7",
    hourlyRate: "50.0",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `contractor`                                                       | [components.Contractor](../../models/components/contractor.md)     | :heavy_minus_sign:                                                 | Example response                                                   |