# PostV1HistoricalEmployeesResponse

## Example Usage

```typescript
import { PostV1HistoricalEmployeesResponse } from "@gusto/embedded-api/models/operations/postv1historicalemployees.js";

let value: PostV1HistoricalEmployeesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  employee: {
    uuid: "b816650b-19ba-4f1d-9086-85308d531131",
    firstName: "Annabel",
    lastName: "Stiedemann",
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