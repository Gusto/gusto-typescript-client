# PostV1SandboxGenerateW2Response

## Example Usage

```typescript
import { PostV1SandboxGenerateW2Response } from "@gusto/embedded-api/models/operations/postv1sandboxgeneratew2.js";

let value: PostV1SandboxGenerateW2Response = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `form`                                                                                           | [operations.PostV1SandboxGenerateW2Form](../../models/operations/postv1sandboxgeneratew2form.md) | :heavy_minus_sign:                                                                               | OK                                                                                               |