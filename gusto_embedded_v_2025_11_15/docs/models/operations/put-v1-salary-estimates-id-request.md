# PutV1SalaryEstimatesIdRequest

## Example Usage

```typescript
import { PutV1SalaryEstimatesIdRequest } from "openapi/models/operations";

let value: PutV1SalaryEstimatesIdRequest = {
  uuid: "ef44c759-3a5c-4d09-ade0-dcf3fcf13e2b",
  body: {
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
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PutV1SalaryEstimatesIdXGustoAPIVersion](../../models/operations/put-v1-salary-estimates-id-x-gusto-api-version.md)                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `uuid`                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the salary estimate                                                                                                                                                                                              |
| `body`                                                                                                                                                                                                                       | [operations.PutV1SalaryEstimatesIdRequestBody](../../models/operations/put-v1-salary-estimates-id-request-body.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |