# ContractorPaymentGroupPreviewStatus

The status of the contractor payment group.  Will be `Funded` if all payments that should be funded (i.e. have `Direct Deposit` for payment method) are funded.  A group can have status `Funded` while having associated payments that have status `Unfunded`, i.e. payment with `Check` payment method.

## Example Usage

```typescript
import { ContractorPaymentGroupPreviewStatus } from "@gusto/embedded-api-v2025-11-15/models/components/contractorpaymentgrouppreview.js";

let value: ContractorPaymentGroupPreviewStatus = "Unfunded";
```

## Values

```typescript
"Unfunded" | "Funded"
```