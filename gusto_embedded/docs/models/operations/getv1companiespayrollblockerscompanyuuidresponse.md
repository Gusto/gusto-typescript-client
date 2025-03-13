# GetV1CompaniesPayrollBlockersCompanyUuidResponse

## Example Usage

```typescript
import { GetV1CompaniesPayrollBlockersCompanyUuidResponse } from "@gusto/embedded-api/models/operations/getv1companiespayrollblockerscompanyuuid.js";

let value: GetV1CompaniesPayrollBlockersCompanyUuidResponse = {
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
| `payrollBlockerList`                                                     | [components.PayrollBlocker](../../models/components/payrollblocker.md)[] | :heavy_minus_sign:                                                       | Example response                                                         |