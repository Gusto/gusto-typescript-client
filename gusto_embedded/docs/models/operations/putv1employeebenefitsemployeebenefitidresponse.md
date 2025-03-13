# PutV1EmployeeBenefitsEmployeeBenefitIdResponse

## Example Usage

```typescript
import { PutV1EmployeeBenefitsEmployeeBenefitIdResponse } from "@gusto/embedded-api/models/operations/putv1employeebenefitsemployeebenefitid.js";

let value: PutV1EmployeeBenefitsEmployeeBenefitIdResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `httpMeta`                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `employeeBenefit`                                                        | [components.EmployeeBenefit](../../models/components/employeebenefit.md) | :heavy_minus_sign:                                                       | Example response                                                         |