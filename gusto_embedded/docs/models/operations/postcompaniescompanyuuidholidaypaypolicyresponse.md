# PostCompaniesCompanyUuidHolidayPayPolicyResponse

## Example Usage

```typescript
import { PostCompaniesCompanyUuidHolidayPayPolicyResponse } from "@gusto/embedded-api/models/operations/postcompaniescompanyuuidholidaypaypolicy.js";

let value: PostCompaniesCompanyUuidHolidayPayPolicyResponse = {
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