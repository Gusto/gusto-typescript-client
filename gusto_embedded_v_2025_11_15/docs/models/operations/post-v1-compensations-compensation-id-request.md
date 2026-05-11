# PostV1CompensationsCompensationIdRequest

## Example Usage

```typescript
import { PostV1CompensationsCompensationIdRequest } from "openapi/models/operations";

let value: PostV1CompensationsCompensationIdRequest = {
  jobId: "<id>",
  body: {
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
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1CompensationsCompensationIdXGustoAPIVersion](../../models/operations/post-v1-compensations-compensation-id-x-gusto-api-version.md)                                                                         | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `jobId`                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the job                                                                                                                                                                                                          |
| `body`                                                                                                                                                                                                                       | [models.CompensationsRequestBody](../../models/compensations-request-body.md)                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |