# GetV1CompaniesResponse

## Example Usage

```typescript
import { GetV1CompaniesResponse } from "@gusto/embedded-api/models/operations/getv1companies.js";

let value: GetV1CompaniesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  company: {
    uuid: "961b7bdf-d05b-4280-a30c-35eb02993e98",
    compensations: {
      hourly: [
        {
          name: "Overtime",
          multiple: 1.5,
        },
      ],
      fixed: [
        {
          name: "Bonus",
        },
      ],
      paidTimeOff: [
        {
          name: "Vacation Hours",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `company`                                                          | [components.Company](../../models/components/company.md)           | :heavy_minus_sign:                                                 | Example response                                                   |