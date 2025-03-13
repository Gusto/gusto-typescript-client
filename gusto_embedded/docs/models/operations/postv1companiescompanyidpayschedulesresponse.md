# PostV1CompaniesCompanyIdPaySchedulesResponse

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdPaySchedulesResponse } from "@gusto/embedded-api/models/operations/postv1companiescompanyidpayschedules.js";

let value: PostV1CompaniesCompanyIdPaySchedulesResponse = {
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