# GetV1EmployeesEmployeeIdTerminationsResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdTerminationsResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidterminations.js";

let value: GetV1EmployeesEmployeeIdTerminationsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `terminationList`                                                  | [components.Termination](../../models/components/termination.md)[] | :heavy_minus_sign:                                                 | Example response                                                   |