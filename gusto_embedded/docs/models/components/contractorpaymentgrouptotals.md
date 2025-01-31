# ContractorPaymentGroupTotals

## Example Usage

```typescript
import { ContractorPaymentGroupTotals } from "@gusto/embedded-api/models/components";

let value: ContractorPaymentGroupTotals = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `amount`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | The total amount for the group of contractor payments.                                           |
| `debitAmount`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | The total debit amount for the group of contractor payments. Sum of wage & reimbursement amount. |
| `wageAmount`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | The total wage amount for the group of contractor payments.                                      |
| `reimbursementAmount`                                                                            | *string*                                                                                         | :heavy_minus_sign:                                                                               | The total reimbursement amount for the group of contractor payments.                             |