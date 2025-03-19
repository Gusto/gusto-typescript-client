# TaxRefunds

Describes the taxes which are refundable to the company for this suspension. These may be refunded, or paid
by Gusto, depending on the value in `reconcile_tax_method`.


## Example Usage

```typescript
import { TaxRefunds } from "@gusto/embedded-api/models/components/companysuspension.js";

let value: TaxRefunds = {};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `amount`                  | *string*                  | :heavy_minus_sign:        | Dollar amount.            |
| `description`             | *string*                  | :heavy_minus_sign:        | What kind of tax this is. |