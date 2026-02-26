# PutV1TimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest

## Example Usage

```typescript
import { PutV1TimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest } from "openapi/models/operations";

let value: PutV1TimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest = {
  timeOffPolicyUuid: "<id>",
  body: {
    employees: [
      {
        uuid: "01e90c50-ebae-4c3d-9888-6431d46fae3f",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PutV1TimeOffPoliciesTimeOffPolicyUuidAddEmployeesXGustoAPIVersion](../../models/operations/put-v1-time-off-policies-time-off-policy-uuid-add-employees-x-gusto-api-version.md)                                   | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `timeOffPolicyUuid`                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the time off policy                                                                                                                                                                                              |
| `body`                                                                                                                                                                                                                       | [operations.PutV1TimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody](../../models/operations/put-v1-time-off-policies-time-off-policy-uuid-add-employees-request-body.md)                                               | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |