# GetCompaniesDepartmentsResponse

## Example Usage

```typescript
import { GetCompaniesDepartmentsResponse } from "@gusto/embedded-api/models/operations";

let value: GetCompaniesDepartmentsResponse = {
  contentType: "<value>",
  statusCode: 503,
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
| `departmentList`                                                      | [components.Department](../../models/components/department.md)[]      | :heavy_minus_sign:                                                    | List of departments                                                   |