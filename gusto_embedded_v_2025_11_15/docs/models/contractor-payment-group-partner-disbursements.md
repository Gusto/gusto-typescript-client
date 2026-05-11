# ContractorPaymentGroupPartnerDisbursements

Partner disbursements for a contractor payment group

## Example Usage

```typescript
import { ContractorPaymentGroupPartnerDisbursements } from "openapi/models";

let value: ContractorPaymentGroupPartnerDisbursements = {};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `contractorPaymentGroupUuid`                                                                                                                | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | The UUID of the contractor payment group                                                                                                    |
| `disbursements`                                                                                                                             | [models.ContractorPaymentGroupPartnerDisbursementsDisbursement](../models/contractor-payment-group-partner-disbursements-disbursement.md)[] | :heavy_minus_sign:                                                                                                                          | List of disbursements for the contractor payment group                                                                                      |