# PostV1CompaniesCompanyIdPaySchedulesResponse

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdPaySchedulesResponse } from "@gusto/embedded-api/models/operations/postv1companiescompanyidpayschedules.js";

let value: PostV1CompaniesCompanyIdPaySchedulesResponse = {
  contentType: "<value>",
  statusCode: 205,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `contentType`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | HTTP response content type for this operation                                            |
| `statusCode`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | HTTP response status code for this operation                                             |
| `rawResponse`                                                                            | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                    | :heavy_check_mark:                                                                       | Raw HTTP response; suitable for custom response parsing                                  |
| `payScheduleCreateUpdate`                                                                | [components.PayScheduleCreateUpdate](../../models/components/payschedulecreateupdate.md) | :heavy_minus_sign:                                                                       | Example response                                                                         |