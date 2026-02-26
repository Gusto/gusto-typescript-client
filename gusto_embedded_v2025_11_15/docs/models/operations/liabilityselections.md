# LiabilitySelections

## Example Usage

```typescript
import { LiabilitySelections } from "@gusto/embedded-api-v2025-11-15/models/operations/putv1taxliabilities.js";

let value: LiabilitySelections = {
  taxId: 807174,
  lastUnpaidExternalPayrollUuid: "<id>",
  unpaidLiabilityAmount: 4956.42,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `taxId`                                                                                                                   | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | The ID of the tax.                                                                                                        |
| `lastUnpaidExternalPayrollUuid`                                                                                           | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The UUID of the last unpaid external payroll uuid. It should be null when the full amount of tax liability has been paid. |
| `unpaidLiabilityAmount`                                                                                                   | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | A selection of unpaid liability amount.                                                                                   |