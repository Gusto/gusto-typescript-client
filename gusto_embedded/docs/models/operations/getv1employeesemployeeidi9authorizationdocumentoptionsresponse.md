# GetV1EmployeesEmployeeIdI9AuthorizationDocumentOptionsResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdI9AuthorizationDocumentOptionsResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidi9authorizationdocumentoptions.js";

let value: GetV1EmployeesEmployeeIdI9AuthorizationDocumentOptionsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `i9AuthorizationDocumentOptionsObject`                                                                 | [components.I9AuthorizationDocumentOption](../../models/components/i9authorizationdocumentoption.md)[] | :heavy_minus_sign:                                                                                     | Example response                                                                                       |