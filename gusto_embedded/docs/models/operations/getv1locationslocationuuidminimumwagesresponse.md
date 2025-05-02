# GetV1LocationsLocationUuidMinimumWagesResponse

## Example Usage

```typescript
import { GetV1LocationsLocationUuidMinimumWagesResponse } from "@gusto/embedded-api/models/operations/getv1locationslocationuuidminimumwages.js";

let value: GetV1LocationsLocationUuidMinimumWagesResponse = {
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
| `minimumWageList`                                                  | [components.MinimumWage](../../models/components/minimumwage.md)[] | :heavy_minus_sign:                                                 | successful                                                         |