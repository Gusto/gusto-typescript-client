# PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse } from "@gusto/embedded-api/models/operations/postv1companiescompanyidpayschedulesassignmentpreview.js";

let value: PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse = {
  contentType: "<value>",
  statusCode: 409,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | HTTP response content type for this operation                                                      |
| `statusCode`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | HTTP response status code for this operation                                                       |
| `rawResponse`                                                                                      | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                              | :heavy_check_mark:                                                                                 | Raw HTTP response; suitable for custom response parsing                                            |
| `payScheduleAssignmentPreview`                                                                     | [components.PayScheduleAssignmentPreview](../../models/components/payscheduleassignmentpreview.md) | :heavy_minus_sign:                                                                                 | Example response                                                                                   |