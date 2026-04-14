# PutV1SalaryEstimatesIdRequest

## Example Usage

```typescript
import { PutV1SalaryEstimatesIdRequest } from "@gusto/embedded-api/models/operations/putv1salaryestimatesid.js";

let value: PutV1SalaryEstimatesIdRequest = {
  uuid: "ef44c759-3a5c-4d09-ade0-dcf3fcf13e2b",
  requestBody: {
    annualNetRevenue: 600000,
    zipCode: "94107",
    occupations: [
      {
        code: "151252",
        experienceLevel: "expert",
        timePercentage: "0.6",
        primary: true,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PutV1SalaryEstimatesIdHeaderXGustoAPIVersion](../../models/operations/putv1salaryestimatesidheaderxgustoapiversion.md)                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `uuid`                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the salary estimate                                                                                                                                                                                              |
| `requestBody`                                                                                                                                                                                                                | [operations.PutV1SalaryEstimatesIdRequestBody](../../models/operations/putv1salaryestimatesidrequestbody.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |