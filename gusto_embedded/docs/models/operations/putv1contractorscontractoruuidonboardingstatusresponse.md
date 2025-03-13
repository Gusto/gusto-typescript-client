# PutV1ContractorsContractorUuidOnboardingStatusResponse

## Example Usage

```typescript
import { PutV1ContractorsContractorUuidOnboardingStatusResponse } from "@gusto/embedded-api/models/operations/putv1contractorscontractoruuidonboardingstatus.js";

let value: PutV1ContractorsContractorUuidOnboardingStatusResponse = {
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