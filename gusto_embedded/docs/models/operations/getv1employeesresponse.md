# GetV1EmployeesResponse

## Example Usage

```typescript
import { GetV1EmployeesResponse } from "@gusto/embedded-api/models/operations";

let value: GetV1EmployeesResponse = {
  contentType: "<value>",
  statusCode: 226,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  employee: {
    uuid: "ca332e47-7cd2-46dd-9124-1619391fe634",
    firstName: "Aliyah",
    lastName: "Jast",
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