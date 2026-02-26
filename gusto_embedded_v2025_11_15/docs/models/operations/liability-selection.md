# LiabilitySelection

## Example Usage

```typescript
import { LiabilitySelection } from "openapi/models/operations";

let value: LiabilitySelection = {
  taxId: 361171,
  lastUnpaidExternalPayrollUuid: "<id>",
  unpaidLiabilityAmount: 3436.49,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `taxId`                                                                                                                   | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | The ID of the tax.                                                                                                        |
| `lastUnpaidExternalPayrollUuid`                                                                                           | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The UUID of the last unpaid external payroll uuid. It should be null when the full amount of tax liability has been paid. |
| `unpaidLiabilityAmount`                                                                                                   | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | A selection of unpaid liability amount.                                                                                   |