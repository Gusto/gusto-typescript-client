# PostV1HistoricalEmployeesResponse

## Example Usage

```typescript
import { PostV1HistoricalEmployeesResponse } from "@gusto/embedded-api/models/operations/postv1historicalemployees.js";

let value: PostV1HistoricalEmployeesResponse = {
  contentType: "<value>",
  statusCode: 303,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  employee: {
    uuid: "547a4812-0f02-491e-9bf8-48e84e5035d7",
    firstName: "Ethan",
    lastName: "Welch",
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