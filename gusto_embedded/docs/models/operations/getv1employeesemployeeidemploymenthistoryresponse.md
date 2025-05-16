# GetV1EmployeesEmployeeIdEmploymentHistoryResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdEmploymentHistoryResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidemploymenthistory.js";

let value: GetV1EmployeesEmployeeIdEmploymentHistoryResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `httpMeta`                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `employmentHistoryList`                                                                | [components.EmploymentHistoryList](../../models/components/employmenthistorylist.md)[] | :heavy_minus_sign:                                                                     | successful                                                                             |