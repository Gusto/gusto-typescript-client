# PayrollUpdateReimbursements

## Example Usage

```typescript
import { PayrollUpdateReimbursements } from "@gusto/embedded-api-v2025-11-15/models/components/payrollupdate.js";

let value: PayrollUpdateReimbursements = {};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                            | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | The dollar amount of the reimbursement for the pay period.                                                                          |
| `description`                                                                                                                       | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | The description of the reimbursement. If not provided, the reimbursement will be unnamed.                                           |
| `uuid`                                                                                                                              | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | The UUID of an existing reimbursement. This parameter is optional and can be provided in order to update an existing reimbursement. |