# PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody } from "@gusto/embedded-api/models/operations/postv1companiescompanyidcontractorpaymentgroups.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

let value: PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody = {
  checkDate: new RFCDate("2020-01-01"),
  creationToken: "1d532d13-8f61-4a57-ad3c-b5fac1c6e05e",
  contractorPayments: [
    {
      wage: 5000,
      hours: 40,
      bonus: 500,
      reimbursement: 20,
    },
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `checkDate`                                                                                                                          | [RFCDate](../../types/rfcdate.md)                                                                                                    | :heavy_check_mark:                                                                                                                   | The payment check date                                                                                                               | 2020-01-01                                                                                                                           |
| `creationToken`                                                                                                                      | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Required token used to make contractor payment group creation idempotent. String must be unique for each group you intend to create. | 1d532d13-8f61-4a57-ad3c-b5fac1c6e05e                                                                                                 |
| `contractorPayments`                                                                                                                 | [operations.ContractorPayments](../../models/operations/contractorpayments.md)[]                                                     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |                                                                                                                                      |