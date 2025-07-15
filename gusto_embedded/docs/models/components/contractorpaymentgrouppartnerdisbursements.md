# ContractorPaymentGroupPartnerDisbursements

Partner disbursements for a contractor payment group

## Example Usage

```typescript
import { ContractorPaymentGroupPartnerDisbursements } from "@gusto/embedded-api/models/components/contractorpaymentgrouppartnerdisbursements.js";

let value: ContractorPaymentGroupPartnerDisbursements = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `contractorPaymentGroupUuid`                                           | *string*                                                               | :heavy_minus_sign:                                                     | The UUID of the contractor payment group                               |
| `disbursements`                                                        | [components.Disbursements](../../models/components/disbursements.md)[] | :heavy_minus_sign:                                                     | List of disbursements for the contractor payment group                 |