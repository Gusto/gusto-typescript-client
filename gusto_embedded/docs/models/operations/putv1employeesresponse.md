# PutV1EmployeesResponse

## Example Usage

```typescript
import { PutV1EmployeesResponse } from "@gusto/embedded-api/models/operations/putv1employees.js";

let value: PutV1EmployeesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  employee: {
    uuid: "1ebf848e-84e5-4035-9d77-5eff6fca332e",
    firstName: "Jace",
    lastName: "Satterfield",
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