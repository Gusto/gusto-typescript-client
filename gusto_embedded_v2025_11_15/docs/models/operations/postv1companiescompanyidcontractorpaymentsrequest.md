# PostV1CompaniesCompanyIdContractorPaymentsRequest

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdContractorPaymentsRequest } from "@gusto/embedded-api-v2025-11-15/models/operations/postv1companiescompanyidcontractorpayments.js";
import { RFCDate } from "@gusto/embedded-api-v2025-11-15/types/rfcdate.js";

let value: PostV1CompaniesCompanyIdContractorPaymentsRequest = {
  companyId: "<id>",
  contractorPaymentBody: {
    contractorUuid: "<id>",
    date: new RFCDate("2020-01-01"),
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
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1CompaniesCompanyIdContractorPaymentsHeaderXGustoAPIVersion](../../models/operations/postv1companiescompanyidcontractorpaymentsheaderxgustoapiversion.md)                                                   | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `companyId`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `contractorPaymentBody`                                                                                                                                                                                                      | [components.ContractorPaymentBody](../../models/components/contractorpaymentbody.md)                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |