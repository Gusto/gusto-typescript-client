# GetRecoveryCasesResponse

## Example Usage

```typescript
import { GetRecoveryCasesResponse } from "@gusto/embedded-api/models/operations/getrecoverycases.js";

let value: GetRecoveryCasesResponse = {
  contentType: "<value>",
  statusCode: 304,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `recoveryCaseList`                                                    | [components.RecoveryCase](../../models/components/recoverycase.md)[]  | :heavy_minus_sign:                                                    | Example response                                                      |