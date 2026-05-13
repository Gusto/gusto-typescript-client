# PostV1CompensationsCompensationIdRequest

## Example Usage

```typescript
import { PostV1CompensationsCompensationIdRequest } from "@gusto/embedded-api-v-2025-11-15/models/operations/postv1compensationscompensationid.js";

let value: PostV1CompensationsCompensationIdRequest = {
  jobId: "<id>",
  compensationsRequestBody: {
    rate: "70000.00",
    paymentUnit: "Year",
    flsaStatus: "Salaried Nonexempt",
    effectiveDate: "2023-01-01",
    title: "Software Engineer",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1CompensationsCompensationIdHeaderXGustoAPIVersion](../../models/operations/postv1compensationscompensationidheaderxgustoapiversion.md)                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `jobId`                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the job                                                                                                                                                                                                          |
| `compensationsRequestBody`                                                                                                                                                                                                   | [components.CompensationsRequestBody](../../models/components/compensationsrequestbody.md)                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |