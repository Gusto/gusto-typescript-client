# GetV1ContractorsContractorUuidResponse

## Example Usage

```typescript
import { GetV1ContractorsContractorUuidResponse } from "@gusto/embedded-api/models/operations";

let value: GetV1ContractorsContractorUuidResponse = {
  contentType: "<value>",
  statusCode: 403,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  contractor: {
    uuid: "903f5a4f-b5c1-463a-a164-85b0a34cf5d1",
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