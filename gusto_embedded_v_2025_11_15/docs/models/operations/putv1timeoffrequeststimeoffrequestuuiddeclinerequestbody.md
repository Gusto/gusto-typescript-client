# PutV1TimeOffRequestsTimeOffRequestUuidDeclineRequestBody

## Example Usage

```typescript
import { PutV1TimeOffRequestsTimeOffRequestUuidDeclineRequestBody } from "@gusto/embedded-api-v-2025-11-15/models/operations/putv1timeoffrequeststimeoffrequestuuiddecline.js";

let value: PutV1TimeOffRequestsTimeOffRequestUuidDeclineRequestBody = {
  employerNote: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `employerNote`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Note explaining why the request was declined                                                  |
| `approverUuid`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the admin declining the request. Defaults to the company's primary payroll admin. |