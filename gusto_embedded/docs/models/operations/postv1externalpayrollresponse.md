# PostV1ExternalPayrollResponse

## Example Usage

```typescript
import { PostV1ExternalPayrollResponse } from "@gusto/embedded-api/models/operations/postv1externalpayroll.js";

let value: PostV1ExternalPayrollResponse = {
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
| `externalPayroll`                                                        | [components.ExternalPayroll](../../models/components/externalpayroll.md) | :heavy_minus_sign:                                                       | Example response                                                         |