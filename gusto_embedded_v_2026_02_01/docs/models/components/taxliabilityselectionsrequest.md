# TaxLiabilitySelectionsRequest

The request body for updating tax liability selections.

## Example Usage

```typescript
import { TaxLiabilitySelectionsRequest } from "@gusto/embedded-api-v-2026-02-01/models/components/taxliabilityselectionsrequest.js";

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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `liabilitySelections`                                                              | [components.LiabilitySelections](../../models/components/liabilityselections.md)[] | :heavy_check_mark:                                                                 | Tax liability selections to record for the company's external payrolls.            |