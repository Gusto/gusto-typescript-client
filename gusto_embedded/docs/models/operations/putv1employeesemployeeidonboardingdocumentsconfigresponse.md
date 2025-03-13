# PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidonboardingdocumentsconfig.js";

let value: PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `employeeOnboardingDocument`                                                                   | [components.EmployeeOnboardingDocument](../../models/components/employeeonboardingdocument.md) | :heavy_minus_sign:                                                                             | Example response                                                                               |