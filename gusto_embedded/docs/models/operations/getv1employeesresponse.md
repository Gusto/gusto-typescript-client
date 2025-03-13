# GetV1EmployeesResponse

## Example Usage

```typescript
import { GetV1EmployeesResponse } from "@gusto/embedded-api/models/operations/getv1employees.js";

let value: GetV1EmployeesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  employee: {
    uuid: "8c723685-cce0-4e6e-bbfc-586547a48120",
    firstName: "Abel",
    lastName: "Moore",
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

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `employee`                                                         | [components.Employee](../../models/components/employee.md)         | :heavy_minus_sign:                                                 | Example response                                                   |