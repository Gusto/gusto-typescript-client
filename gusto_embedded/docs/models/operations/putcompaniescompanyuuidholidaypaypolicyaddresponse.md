# PutCompaniesCompanyUuidHolidayPayPolicyAddResponse

## Example Usage

```typescript
import { PutCompaniesCompanyUuidHolidayPayPolicyAddResponse } from "@gusto/embedded-api/models/operations/putcompaniescompanyuuidholidaypaypolicyadd.js";

let value: PutCompaniesCompanyUuidHolidayPayPolicyAddResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `httpMeta`                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `holidayPayPolicy`                                                         | [components.HolidayPayPolicy](../../models/components/holidaypaypolicy.md) | :heavy_minus_sign:                                                         | Holiday Pay Policy Object Example                                          |