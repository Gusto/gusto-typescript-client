# PayrollUnprocessedEmployeeCompensationsTypeReimbursements

## Example Usage

```typescript
import { PayrollUnprocessedEmployeeCompensationsTypeReimbursements } from "@gusto/embedded-api-v-2026-06-15/models/components/payrollunprocessedemployeecompensationstype.js";

let value: PayrollUnprocessedEmployeeCompensationsTypeReimbursements = {
  amount: "241.63",
  description: "yeast yum drain content irritably phrase",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The dollar amount of the reimbursement for the pay period.                                                             |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The description of the reimbursement. Null for unnamed reimbursements.                                                 |
| `uuid`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The UUID of the reimbursement. Null for unnamed reimbursements. This field is only available for unprocessed payrolls. |
| `recurring`                                                                                                            | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Whether the reimbursement is recurring. This field is only available for unprocessed payrolls.                         |