# PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse

## Example Usage

```typescript
import { PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse } from "@gusto/embedded-api/models/operations/putv1companiescompanyidpayrollspayrollidprepare.js";

let value: PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse = {
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
| `payrollPrepared`                                                        | [components.PayrollPrepared](../../models/components/payrollprepared.md) | :heavy_minus_sign:                                                       | A prepared payroll                                                       |