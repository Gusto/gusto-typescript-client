# PutV1TimeOffPoliciesTimeOffPolicyUuidBalanceEmployees

## Example Usage

```typescript
import { PutV1TimeOffPoliciesTimeOffPolicyUuidBalanceEmployees } from "@gusto/embedded-api/models/operations/putv1timeoffpoliciestimeoffpolicyuuidbalance.js";

let value: PutV1TimeOffPoliciesTimeOffPolicyUuidBalanceEmployees = {
  uuid: "05b4b908-87c5-4a69-b242-970f39f112bf",
  balance: "<value>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `uuid`                           | *string*                         | :heavy_check_mark:               | The UUID of the employee         |
| `balance`                        | *string*                         | :heavy_check_mark:               | The new balance for the employee |