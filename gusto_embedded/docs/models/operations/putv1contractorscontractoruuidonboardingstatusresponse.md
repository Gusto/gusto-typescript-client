# PutV1ContractorsContractorUuidOnboardingStatusResponse

## Example Usage

```typescript
import { PutV1ContractorsContractorUuidOnboardingStatusResponse } from "@gusto/embedded-api/models/operations/putv1contractorscontractoruuidonboardingstatus.js";

let value: PutV1ContractorsContractorUuidOnboardingStatusResponse = {
  contentType: "<value>",
  statusCode: 203,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `contentType`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | HTTP response content type for this operation                                                  |
| `statusCode`                                                                                   | *number*                                                                                       | :heavy_check_mark:                                                                             | HTTP response status code for this operation                                                   |
| `rawResponse`                                                                                  | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                          | :heavy_check_mark:                                                                             | Raw HTTP response; suitable for custom response parsing                                        |
| `contractorOnboardingStatus`                                                                   | [components.ContractorOnboardingStatus](../../models/components/contractoronboardingstatus.md) | :heavy_minus_sign:                                                                             | Example response.                                                                              |