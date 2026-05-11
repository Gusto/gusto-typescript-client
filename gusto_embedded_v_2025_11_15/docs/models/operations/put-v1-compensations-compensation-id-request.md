# PutV1CompensationsCompensationIdRequest

## Example Usage

```typescript
import { PutV1CompensationsCompensationIdRequest } from "openapi/models/operations";

let value: PutV1CompensationsCompensationIdRequest = {
  compensationId: "<id>",
  body: {
    version: "56d00c178bc7393b2a206ed6a86afcb4",
    rate: "70000.00",
    paymentUnit: "Year",
    effectiveDate: "2023-01-01",
    title: "Software Engineer",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PutV1CompensationsCompensationIdXGustoAPIVersion](../../models/operations/put-v1-compensations-compensation-id-x-gusto-api-version.md)                                                                           | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `compensationId`                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the compensation                                                                                                                                                                                                 |
| `body`                                                                                                                                                                                                                       | [models.CompensationsUpdateRequestBody](../../models/compensations-update-request-body.md)                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |