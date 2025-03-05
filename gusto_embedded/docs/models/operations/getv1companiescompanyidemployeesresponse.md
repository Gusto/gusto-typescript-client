# GetV1CompaniesCompanyIdEmployeesResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdEmployeesResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidemployees.js";

let value: GetV1CompaniesCompanyIdEmployeesResponse = {
  contentType: "<value>",
  statusCode: 423,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  employeeList: [
    {
      uuid: "816650b1-9baf-41d0-8868-5308d5311314",
      firstName: "Anna",
      lastName: "Crooks",
      eligiblePaidTimeOff: [
        {
          accrualUnit: "Hour",
          accrualMethod: "unlimited",
          accrualPeriod: "Year",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `employeeList`                                                        | [components.Employee](../../models/components/employee.md)[]          | :heavy_minus_sign:                                                    | Example response                                                      |