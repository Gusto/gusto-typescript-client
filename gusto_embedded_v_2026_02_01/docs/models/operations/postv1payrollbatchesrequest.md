# PostV1PayrollBatchesRequest

## Example Usage

```typescript
import { PostV1PayrollBatchesRequest } from "@gusto/embedded-api-v-2026-02-01/models/operations/postv1payrollbatches.js";

let value: PostV1PayrollBatchesRequest = {
  requestBody: {
    idempotencyKey: "80a74f8b-2c16-45e5-9038-aa108849c6e6",
    batchAction: "cancel",
    batch: [],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1PayrollBatchesHeaderXGustoAPIVersion](../../models/operations/postv1payrollbatchesheaderxgustoapiversion.md)                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `requestBody`                                                                                                                                                                                                                | [operations.PostV1PayrollBatchesRequestBody](../../models/operations/postv1payrollbatchesrequestbody.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |