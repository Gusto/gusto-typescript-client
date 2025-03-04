# PostV1PartnerManagedCompaniesResponse

## Example Usage

```typescript
import { PostV1PartnerManagedCompaniesResponse } from "@gusto/embedded-api/models/operations";

let value: PostV1PartnerManagedCompaniesResponse = {
  contentType: "<value>",
  statusCode: 306,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | HTTP response content type for this operation                                                                                |
| `statusCode`                                                                                                                 | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | HTTP response status code for this operation                                                                                 |
| `rawResponse`                                                                                                                | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                        | :heavy_check_mark:                                                                                                           | Raw HTTP response; suitable for custom response parsing                                                                      |
| `object`                                                                                                                     | [operations.PostV1PartnerManagedCompaniesResponseBody](../../models/operations/postv1partnermanagedcompaniesresponsebody.md) | :heavy_minus_sign:                                                                                                           | OK                                                                                                                           |