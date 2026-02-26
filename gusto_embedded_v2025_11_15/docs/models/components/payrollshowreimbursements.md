# PayrollShowReimbursements

## Example Usage

```typescript
import { PayrollShowReimbursements } from "@gusto/embedded-api-v2025-11-15/models/components/payroll.js";

let value: PayrollShowReimbursements = {
  amount: "102.28",
  description: "fatal wearily kiddingly gentle pry or intensely bah pish",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The dollar amount of the reimbursement for the pay period.                                                             |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The description of the reimbursement. Null for unnamed reimbursements.                                                 |
| `uuid`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The UUID of the reimbursement. Null for unnamed reimbursements. This field is only available for unprocessed payrolls. |
| `recurring`                                                                                                            | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Whether the reimbursement is recurring. This field is only available for unprocessed payrolls.                         |