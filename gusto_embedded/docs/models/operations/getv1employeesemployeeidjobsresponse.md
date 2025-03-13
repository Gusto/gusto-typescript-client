# GetV1EmployeesEmployeeIdJobsResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdJobsResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidjobs.js";

let value: GetV1EmployeesEmployeeIdJobsResponse = {
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
| `jobList`                                                          | [components.Job](../../models/components/job.md)[]                 | :heavy_minus_sign:                                                 | Example response                                                   |