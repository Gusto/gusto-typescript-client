# TaxLiabilitySelectionsRequest

The request body for updating tax liability selections.

## Example Usage

```typescript
import { TaxLiabilitySelectionsRequest } from "openapi/models";

let value: TaxLiabilitySelectionsRequest = {
  liabilitySelections: [
    {
      taxId: 1,
      lastUnpaidExternalPayrollUuid: "1bf1efe1-72d4-4e6e-a181-611f3ea66435",
      unpaidLiabilityAmount: "47.5",
    },
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `liabilitySelections`                                                   | [models.LiabilitySelection](../models/liability-selection.md)[]         | :heavy_check_mark:                                                      | Tax liability selections to record for the company's external payrolls. |