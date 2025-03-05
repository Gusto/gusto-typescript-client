# GetV1CompaniesCompanyIdPaySchedulesPreviewResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdPaySchedulesPreviewResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidpayschedulespreview.js";

let value: GetV1CompaniesCompanyIdPaySchedulesPreviewResponse = {
  contentType: "<value>",
  statusCode: 100,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `contentType`                                                                                                                                          | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | HTTP response content type for this operation                                                                                                          |
| `statusCode`                                                                                                                                           | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | HTTP response status code for this operation                                                                                                           |
| `rawResponse`                                                                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                  | :heavy_check_mark:                                                                                                                                     | Raw HTTP response; suitable for custom response parsing                                                                                                |
| `object`                                                                                                                                               | [operations.GetV1CompaniesCompanyIdPaySchedulesPreviewResponseBody](../../models/operations/getv1companiescompanyidpayschedulespreviewresponsebody.md) | :heavy_minus_sign:                                                                                                                                     | OK                                                                                                                                                     |