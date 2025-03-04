# PutV1ContractorsContractorUuidResponse

## Example Usage

```typescript
import { PutV1ContractorsContractorUuidResponse } from "@gusto/embedded-api/models/operations";

let value: PutV1ContractorsContractorUuidResponse = {
  contentType: "<value>",
  statusCode: 101,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  contractor: {
    uuid: "e1096ce4-679f-4b64-9f2b-ea635baedde4",
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