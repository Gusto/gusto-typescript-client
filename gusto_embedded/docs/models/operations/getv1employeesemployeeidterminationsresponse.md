# GetV1EmployeesEmployeeIdTerminationsResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdTerminationsResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidterminations.js";

let value: GetV1EmployeesEmployeeIdTerminationsResponse = {
  contentType: "<value>",
  statusCode: 502,
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
| `terminationList`                                                     | [components.Termination](../../models/components/termination.md)[]    | :heavy_minus_sign:                                                    | Example response                                                      |