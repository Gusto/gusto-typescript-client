# PostV1PayrollDigestsRequest

## Example Usage

```typescript
import { PostV1PayrollDigestsRequest } from "@gusto/embedded-api/models/operations/postv1payrolldigests.js";

let value: PostV1PayrollDigestsRequest = {
  requestBody: {
    idempotencyKey: "80a74f8b-2c16-45e5-9038-aa108849c6e6",
    batchAction: "create",
    batch: [],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1PayrollDigestsHeaderXGustoAPIVersion](../../models/operations/postv1payrolldigestsheaderxgustoapiversion.md)                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `requestBody`                                                                                                                                                                                                                | [operations.PostV1PayrollDigestsRequestBody](../../models/operations/postv1payrolldigestsrequestbody.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |