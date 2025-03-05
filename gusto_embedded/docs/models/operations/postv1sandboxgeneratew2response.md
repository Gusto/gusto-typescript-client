# PostV1SandboxGenerateW2Response

## Example Usage

```typescript
import { PostV1SandboxGenerateW2Response } from "@gusto/embedded-api/models/operations/postv1sandboxgeneratew2.js";

let value: PostV1SandboxGenerateW2Response = {
  contentType: "<value>",
  statusCode: 103,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `contentType`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | HTTP response content type for this operation                                                    |
| `statusCode`                                                                                     | *number*                                                                                         | :heavy_check_mark:                                                                               | HTTP response status code for this operation                                                     |
| `rawResponse`                                                                                    | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                            | :heavy_check_mark:                                                                               | Raw HTTP response; suitable for custom response parsing                                          |
| `form`                                                                                           | [operations.PostV1SandboxGenerateW2Form](../../models/operations/postv1sandboxgeneratew2form.md) | :heavy_minus_sign:                                                                               | OK                                                                                               |