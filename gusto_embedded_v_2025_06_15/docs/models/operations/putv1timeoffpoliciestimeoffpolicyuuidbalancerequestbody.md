# PutV1TimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody

## Example Usage

```typescript
import { PutV1TimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody } from "@gusto/embedded-api/models/operations/putv1timeoffpoliciestimeoffpolicyuuidbalance.js";

let value: PutV1TimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody = {
  employees: [
    {
      uuid: "b9066878-af6e-4fe3-aea9-2993d2e9aa4f",
      balance: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `employees`                                                                                                                                            | [operations.PutV1TimeOffPoliciesTimeOffPolicyUuidBalanceEmployees](../../models/operations/putv1timeoffpoliciestimeoffpolicyuuidbalanceemployees.md)[] | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |