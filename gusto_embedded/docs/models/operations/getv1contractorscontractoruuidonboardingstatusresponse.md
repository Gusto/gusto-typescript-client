# GetV1ContractorsContractorUuidOnboardingStatusResponse

## Example Usage

```typescript
import { GetV1ContractorsContractorUuidOnboardingStatusResponse } from "@gusto/embedded-api/models/operations/getv1contractorscontractoruuidonboardingstatus.js";

let value: GetV1ContractorsContractorUuidOnboardingStatusResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `contractorOnboardingStatus`                                                                   | [components.ContractorOnboardingStatus](../../models/components/contractoronboardingstatus.md) | :heavy_minus_sign:                                                                             | Example response.                                                                              |