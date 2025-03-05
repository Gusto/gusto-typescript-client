# PostV1EmployeesResponse

## Example Usage

```typescript
import { PostV1EmployeesResponse } from "@gusto/embedded-api/models/operations/postv1employees.js";

let value: PostV1EmployeesResponse = {
  contentType: "<value>",
  statusCode: 306,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  employee: {
    uuid: "def662aa-d179-432d-9071-7f6d1466a5ba",
    firstName: "Hollie",
    lastName: "Bernier",
    eligiblePaidTimeOff: [
      {
        accrualUnit: "Hour",
        accrualMethod: "unlimited",
        accrualPeriod: "Year",
      },
    ],
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `employee`                                                            | [components.Employee](../../models/components/employee.md)            | :heavy_minus_sign:                                                    | Example response                                                      |