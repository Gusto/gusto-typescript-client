# ContractorPayments

## Example Usage

```typescript
import { ContractorPayments } from "gusto-embedded/models/components";

let value: ContractorPayments = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contractorUuid`                                                                        | *string*                                                                                | :heavy_minus_sign:                                                                      | The UUID of the contractor.                                                             |
| `contractorFirstName`                                                                   | *string*                                                                                | :heavy_minus_sign:                                                                      | The first name of the contractor. Applies when `contractor_type` is `Individual`.       |
| `contractorLastName`                                                                    | *string*                                                                                | :heavy_minus_sign:                                                                      | The last name of the contractor.  Applies when `contractor_type` is `Individual`.       |
| `contractorBusinessName`                                                                | *string*                                                                                | :heavy_minus_sign:                                                                      | The business name of the contractor. Applies when `contractor_type` is `Business`.      |
| `contractorType`                                                                        | *string*                                                                                | :heavy_minus_sign:                                                                      | The type of contractor.<br/><br/>`Individual` `Business`                                |
| `paymentMethod`                                                                         | *string*                                                                                | :heavy_minus_sign:                                                                      | The payment method.<br/><br/>`Direct Deposit` `Check` `Historical Payment` `Correction Payment` |
| `wage`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | The fixed wage of the payment, regardless of hours worked.                              |
| `bonus`                                                                                 | *string*                                                                                | :heavy_minus_sign:                                                                      | The bonus amount in the payment.                                                        |
| `reimbursement`                                                                         | *string*                                                                                | :heavy_minus_sign:                                                                      | The reimbursement amount in the payment.                                                |