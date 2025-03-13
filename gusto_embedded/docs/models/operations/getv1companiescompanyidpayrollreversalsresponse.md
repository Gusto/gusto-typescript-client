# GetV1CompaniesCompanyIdPayrollReversalsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdPayrollReversalsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidpayrollreversals.js";

let value: GetV1CompaniesCompanyIdPayrollReversalsResponse = {
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
| `payrollReversal`                                                        | [components.PayrollReversal](../../models/components/payrollreversal.md) | :heavy_minus_sign:                                                       | Example response                                                         |