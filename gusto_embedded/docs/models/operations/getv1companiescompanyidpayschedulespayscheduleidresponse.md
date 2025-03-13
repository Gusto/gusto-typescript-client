# GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidpayschedulespayscheduleid.js";

let value: GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `paySchedule`                                                      | [components.PaySchedule](../../models/components/payschedule.md)   | :heavy_minus_sign:                                                 | Example response                                                   |