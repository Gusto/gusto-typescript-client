# PutTimeOffPoliciesTimeOffPolicyUuidResponse

## Example Usage

```typescript
import { PutTimeOffPoliciesTimeOffPolicyUuidResponse } from "@gusto/embedded-api/models/operations/puttimeoffpoliciestimeoffpolicyuuid.js";

let value: PutTimeOffPoliciesTimeOffPolicyUuidResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `httpMeta`                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)   | :heavy_check_mark:                                                   | N/A                                                                  |
| `timeOffPolicy`                                                      | [components.TimeOffPolicy](../../models/components/timeoffpolicy.md) | :heavy_minus_sign:                                                   | OK                                                                   |