# GetV1CompaniesCompanyIdPayrollsPayrollIdResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdPayrollsPayrollIdResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidpayrollspayrollid.js";

let value: GetV1CompaniesCompanyIdPayrollsPayrollIdResponse = {
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
| `payroll`                                                          | [components.Payroll](../../models/components/payroll.md)           | :heavy_minus_sign:                                                 | Example response                                                   |