# PayrollUpdateReimbursement

## Example Usage

```typescript
import { PayrollUpdateReimbursement } from "openapi/models";

let value: PayrollUpdateReimbursement = {};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                            | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | The dollar amount of the reimbursement for the pay period.                                                                          |
| `description`                                                                                                                       | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | The description of the reimbursement. If not provided, the reimbursement will be unnamed.                                           |
| `uuid`                                                                                                                              | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | The UUID of an existing reimbursement. This parameter is optional and can be provided in order to update an existing reimbursement. |