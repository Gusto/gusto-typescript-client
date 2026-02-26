# PostV1CompaniesCompanyIdContractorPaymentsRequest

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdContractorPaymentsRequest } from "openapi/models/operations";

let value: PostV1CompaniesCompanyIdContractorPaymentsRequest = {
  companyId: "<id>",
  body: {
    contractorUuid: "<id>",
    date: new Date("2020-01-01"),
    wage: "5000",
    hours: "40",
    bonus: "500",
    reimbursement: "20",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1CompaniesCompanyIdContractorPaymentsXGustoAPIVersion](../../models/operations/post-v1-companies-company-id-contractor-payments-x-gusto-api-version.md)                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `companyId`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `body`                                                                                                                                                                                                                       | [models.ContractorPaymentBody](../../models/contractor-payment-body.md)                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |