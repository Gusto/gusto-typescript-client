# PutV1HistoricalEmployeesResponse

## Example Usage

```typescript
import { PutV1HistoricalEmployeesResponse } from "@gusto/embedded-api/models/operations/putv1historicalemployees.js";

let value: PutV1HistoricalEmployeesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  employee: {
    uuid: "5d1bd89f-8bb0-4fdd-80b8-baaa3fa72869",
    firstName: "Sydney",
    lastName: "Hoeger",
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