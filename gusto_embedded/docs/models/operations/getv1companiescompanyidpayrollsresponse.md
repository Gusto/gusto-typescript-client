# GetV1CompaniesCompanyIdPayrollsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdPayrollsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidpayrolls.js";

let value: GetV1CompaniesCompanyIdPayrollsResponse = {
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
| `payrollList`                                                            | [components.PayrollMinimal](../../models/components/payrollminimal.md)[] | :heavy_minus_sign:                                                       | Example response                                                         |