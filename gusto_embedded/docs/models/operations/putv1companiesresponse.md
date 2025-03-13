# PutV1CompaniesResponse

## Example Usage

```typescript
import { PutV1CompaniesResponse } from "@gusto/embedded-api/models/operations/putv1companies.js";

let value: PutV1CompaniesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  company: {
    uuid: "b4632fb7-3406-44b6-a201-a78ef3a40c56",
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