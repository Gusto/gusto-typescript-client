# PutV1TerminationsEmployeeIdResponse

## Example Usage

```typescript
import { PutV1TerminationsEmployeeIdResponse } from "@gusto/embedded-api/models/operations/putv1terminationsemployeeid.js";

let value: PutV1TerminationsEmployeeIdResponse = {
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
| `termination`                                                      | [components.Termination](../../models/components/termination.md)   | :heavy_minus_sign:                                                 | Example Response                                                   |