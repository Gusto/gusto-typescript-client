# GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidpayschedulesassignments.js";

let value: GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `httpMeta`                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `payScheduleAssignment`                                                              | [components.PayScheduleAssignment](../../models/components/payscheduleassignment.md) | :heavy_minus_sign:                                                                   | Example response                                                                     |