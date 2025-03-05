# GetV1EmployeesEmployeeIdJobsResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdJobsResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidjobs.js";

let value: GetV1EmployeesEmployeeIdJobsResponse = {
  contentType: "<value>",
  statusCode: 505,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `jobList`                                                             | [components.Job](../../models/components/job.md)[]                    | :heavy_minus_sign:                                                    | Example response                                                      |