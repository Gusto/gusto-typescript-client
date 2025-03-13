# PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse

## Example Usage

```typescript
import { PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse } from "@gusto/embedded-api/models/operations/putv1companiescompanyidpayschedulespayscheduleid.js";

let value: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `payScheduleCreateUpdate`                                                                | [components.PayScheduleCreateUpdate](../../models/components/payschedulecreateupdate.md) | :heavy_minus_sign:                                                                       | Example response                                                                         |