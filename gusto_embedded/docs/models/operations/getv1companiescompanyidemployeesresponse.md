# GetV1CompaniesCompanyIdEmployeesResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdEmployeesResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidemployees.js";

let value: GetV1CompaniesCompanyIdEmployeesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  employees: [
    {
      uuid: "6cb68c04-1b94-4d92-844c-aea162aa3227",
      firstName: "Evert",
      lastName: "White",
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

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `employees`                                                        | [components.Employee](../../models/components/employee.md)[]       | :heavy_minus_sign:                                                 | successful                                                         |