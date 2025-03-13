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
  employeeList: [
    {
      uuid: "521368cf-119b-4def-9662-aad17932d071",
      firstName: "Wilhelm",
      lastName: "Stiedemann",
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
| `employeeList`                                                     | [components.Employee](../../models/components/employee.md)[]       | :heavy_minus_sign:                                                 | Example response                                                   |