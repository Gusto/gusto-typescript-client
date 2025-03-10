# PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse

## Example Usage

```typescript
import { PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse } from "@gusto/embedded-api/models/operations/putv1timeoffpoliciestimeoffpolicyuuidremoveemployees.js";

let value: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse = {
  contentType: "<value>",
  statusCode: 416,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `timeOffPolicy`                                                       | [components.TimeOffPolicy](../../models/components/timeoffpolicy.md)  | :heavy_minus_sign:                                                    | OK                                                                    |