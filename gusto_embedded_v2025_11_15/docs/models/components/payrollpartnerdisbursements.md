# PayrollPartnerDisbursements

Partner disbursements for a payroll

## Example Usage

```typescript
import { PayrollPartnerDisbursements } from "@gusto/embedded-api-v2025-11-15/models/components/payrollpartnerdisbursements.js";

let value: PayrollPartnerDisbursements = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `payrollUuid`                                                                                                                | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The UUID of the payroll                                                                                                      |
| `disbursements`                                                                                                              | [components.PayrollPartnerDisbursementsDisbursements](../../models/components/payrollpartnerdisbursementsdisbursements.md)[] | :heavy_minus_sign:                                                                                                           | List of disbursements for the payroll                                                                                        |