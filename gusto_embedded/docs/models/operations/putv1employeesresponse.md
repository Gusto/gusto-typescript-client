# PutV1EmployeesResponse

## Example Usage

```typescript
import { PutV1EmployeesResponse } from "@gusto/embedded-api/models/operations";

let value: PutV1EmployeesResponse = {
  contentType: "<value>",
  statusCode: 208,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  employee: {
    uuid: "bf5ec594-d132-46b8-9706-13e3dc291bac",
    firstName: "Taya",
    lastName: "Greenholt",
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