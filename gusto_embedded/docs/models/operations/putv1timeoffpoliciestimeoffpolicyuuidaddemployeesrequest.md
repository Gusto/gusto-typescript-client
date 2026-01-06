# PutV1TimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest

## Example Usage

```typescript
import { PutV1TimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest } from "@gusto/embedded-api/models/operations/putv1timeoffpoliciestimeoffpolicyuuidaddemployees.js";

let value: PutV1TimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest = {
  timeOffPolicyUuid: "<id>",
  requestBody: {
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
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PutV1TimeOffPoliciesTimeOffPolicyUuidAddEmployeesHeaderXGustoAPIVersion](../../models/operations/putv1timeoffpoliciestimeoffpolicyuuidaddemployeesheaderxgustoapiversion.md)                                     | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `timeOffPolicyUuid`                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the time off policy                                                                                                                                                                                              |
| `requestBody`                                                                                                                                                                                                                | [operations.PutV1TimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody](../../models/operations/putv1timeoffpoliciestimeoffpolicyuuidaddemployeesrequestbody.md)                                                           | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |