# PutV1HistoricalEmployeesResponse

## Example Usage

```typescript
import { PutV1HistoricalEmployeesResponse } from "@gusto/embedded-api/models/operations";

let value: PutV1HistoricalEmployeesResponse = {
  contentType: "<value>",
  statusCode: 411,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  employee: {
    uuid: "6c530ee1-521e-40f1-8d95-5c5a87e8db0c",
    firstName: "Stevie",
    lastName: "Hartmann",
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