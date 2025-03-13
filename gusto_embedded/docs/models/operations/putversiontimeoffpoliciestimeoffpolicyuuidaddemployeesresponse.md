# PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse

## Example Usage

```typescript
import { PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse } from "@gusto/embedded-api/models/operations/putversiontimeoffpoliciestimeoffpolicyuuidaddemployees.js";

let value: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse = {
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