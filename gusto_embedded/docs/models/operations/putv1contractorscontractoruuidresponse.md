# PutV1ContractorsContractorUuidResponse

## Example Usage

```typescript
import { PutV1ContractorsContractorUuidResponse } from "@gusto/embedded-api/models/operations/putv1contractorscontractoruuid.js";

let value: PutV1ContractorsContractorUuidResponse = {
  contentType: "<value>",
  statusCode: 308,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  contractor: {
    uuid: "1096ce46-79fb-464f-92be-a635baedde45",
    hourlyRate: "50.0",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `contractor`                                                          | [components.Contractor](../../models/components/contractor.md)        | :heavy_minus_sign:                                                    | Example response                                                      |