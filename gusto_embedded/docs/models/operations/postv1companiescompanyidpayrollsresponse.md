# PostV1CompaniesCompanyIdPayrollsResponse

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdPayrollsResponse } from "@gusto/embedded-api/models/operations/postv1companiescompanyidpayrolls.js";

let value: PostV1CompaniesCompanyIdPayrollsResponse = {
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
| `payrollPrepared`                                                        | [components.PayrollPrepared](../../models/components/payrollprepared.md) | :heavy_minus_sign:                                                       | An off-cycle payroll                                                     |