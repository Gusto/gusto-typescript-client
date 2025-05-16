# PutV1EmployeesEmployeeIdOnboardingStatusResponse

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdOnboardingStatusResponse } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidonboardingstatus.js";

let value: PutV1EmployeesEmployeeIdOnboardingStatusResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `employeeOnboardingStatus`                                                                 | [components.EmployeeOnboardingStatus](../../models/components/employeeonboardingstatus.md) | :heavy_minus_sign:                                                                         | successful                                                                                 |