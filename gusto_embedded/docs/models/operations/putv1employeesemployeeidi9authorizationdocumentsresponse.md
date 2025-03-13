# PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidi9authorizationdocuments.js";

let value: PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse = {
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
| `i9AuthorizationDocumentsObject`                                                           | [components.I9AuthorizationDocument](../../models/components/i9authorizationdocument.md)[] | :heavy_minus_sign:                                                                         | Example response                                                                           |