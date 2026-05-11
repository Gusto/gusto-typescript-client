# PutV1ExternalPayrollRequest

## Example Usage

```typescript
import { PutV1ExternalPayrollRequest } from "openapi/models/operations";

let value: PutV1ExternalPayrollRequest = {
  companyUuid: "<id>",
  externalPayrollId: "<id>",
  body: {
    externalPayrollItems: [
      {
        employeeUuid: "44f7cba9-7a3d-4f08-b7bd-6fcf5211f8ca",
        earnings: [
          {
            earningType: "CompanyPayType",
            earningId: 1,
            amount: "10000.00",
            hours: "80.0",
          },
        ],
        benefits: [
          {
            benefitId: 22,
            companyContributionAmount: "100.00",
            employeeDeductionAmount: "50.00",
          },
        ],
        taxes: [
          {
            taxId: 1,
            amount: "400.00",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PutV1ExternalPayrollXGustoAPIVersion](../../models/operations/put-v1-external-payroll-x-gusto-api-version.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `companyUuid`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `externalPayrollId`                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the external payroll                                                                                                                                                                                             |
| `body`                                                                                                                                                                                                                       | [models.ExternalPayrollUpdateRequest](../../models/external-payroll-update-request.md)                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |