# GetV1CompaniesCompanyIdPaySchedulesResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdPaySchedulesResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidpayschedules.js";

let value: GetV1CompaniesCompanyIdPaySchedulesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `httpMeta`                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `payScheduleList`                                                          | [components.PayScheduleList](../../models/components/payschedulelist.md)[] | :heavy_minus_sign:                                                         | Example response                                                           |