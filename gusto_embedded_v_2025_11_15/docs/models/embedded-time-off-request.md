# EmbeddedTimeOffRequest

The representation of a time off request.

## Example Usage

```typescript
import { EmbeddedTimeOffRequest } from "openapi/models";

let value: EmbeddedTimeOffRequest = {
  uuid: "ad158cfb-99e4-4741-9db3-0bd3a267f222",
  status: "pending",
  employeeNote: "Family vacation",
  employerNote: null,
  policyType: "vacation",
  policyUuid: "c2d9b1bd-3f36-4c2d-a727-b2af057d6a7f",
  days: {
    "2026-10-20": "8.000",
    "2026-10-21": "8.000",
  },
  employee: {
    uuid: "51924fa0-26c6-4d4c-8832-3ef0b422c67e",
    fullName: "Alex Johnson",
  },
  initiator: null,
  approver: {
    uuid: "21d8dff4-ce09-4120-a274-3a5628bf6769",
    fullName: "Morgan Chen",
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The UUID of the time off request.                                                                                           | ad158cfb-99e4-4741-9db3-0bd3a267f222                                                                                        |
| `status`                                                                                                                    | [models.EmbeddedTimeOffRequestStatus](../models/embedded-time-off-request-status.md)                                        | :heavy_check_mark:                                                                                                          | The status of the time off request.                                                                                         | pending                                                                                                                     |
| `employeeNote`                                                                                                              | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | A note about the time off request, from the employee to the employer.                                                       | Family vacation                                                                                                             |
| `employerNote`                                                                                                              | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | A note about the time off request, from the employer to the employee.                                                       | <nil>                                                                                                                       |
| `policyType`                                                                                                                | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The type of the time off policy (e.g. vacation, sick).                                                                      | vacation                                                                                                                    |
| `policyUuid`                                                                                                                | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The UUID of the time off policy associated with this request.                                                               | c2d9b1bd-3f36-4c2d-a727-b2af057d6a7f                                                                                        |
| `days`                                                                                                                      | Record<string, *string*>                                                                                                    | :heavy_check_mark:                                                                                                          | An object where keys are dates in YYYY-MM-DD format and values are hours as string decimals (e.g. {"2025-01-20": "8.000"}). | {<br/>"2026-10-20": "8.000",<br/>"2026-10-21": "8.000"<br/>}                                                                |
| `employee`                                                                                                                  | [models.EmbeddedTimeOffRequestEmployee](../models/embedded-time-off-request-employee.md)                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |
| `initiator`                                                                                                                 | [models.Initiator](../models/initiator.md)                                                                                  | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |
| `approver`                                                                                                                  | [models.Approver](../models/approver.md)                                                                                    | :heavy_check_mark:                                                                                                          | This value will be null if the request has not been approved.                                                               |                                                                                                                             |