# TaxPaymentLineItem

A single payroll tax liability rolled up into a tax payment

## Example Usage

```typescript
import { TaxPaymentLineItem } from "@gusto/embedded-api-v-2026-02-01/models/components/taxpaymentlineitem.js";

let value: TaxPaymentLineItem = {
  payrollUuid: "<id>",
  uniqueTaxId: "<id>",
  amount: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `payrollUuid`                                             | *string*                                                  | :heavy_check_mark:                                        | Unique identifier of the payroll this liability came from |
| `uniqueTaxId`                                             | *string*                                                  | :heavy_check_mark:                                        | Unique identifier of the tax type this liability is for   |
| `amount`                                                  | *string*                                                  | :heavy_check_mark:                                        | The amount of this liability included in the tax payment  |