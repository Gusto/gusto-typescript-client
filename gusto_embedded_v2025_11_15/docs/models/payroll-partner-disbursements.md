# PayrollPartnerDisbursements

Partner disbursements for a payroll

## Example Usage

```typescript
import { PayrollPartnerDisbursements } from "openapi/models";

let value: PayrollPartnerDisbursements = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `payrollUuid`                                                                                               | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The UUID of the payroll                                                                                     |
| `disbursements`                                                                                             | [models.PayrollPartnerDisbursementsDisbursement](../models/payroll-partner-disbursements-disbursement.md)[] | :heavy_minus_sign:                                                                                          | List of disbursements for the payroll                                                                       |