# ExternalPayrollUpdateRequestTax

## Example Usage

```typescript
import { ExternalPayrollUpdateRequestTax } from "openapi/models";

let value: ExternalPayrollUpdateRequestTax = {
  taxId: 1,
  amount: "400.00",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `taxId`                    | *number*                   | :heavy_minus_sign:         | The ID of the tax.         | 1                          |
| `amount`                   | *string*                   | :heavy_minus_sign:         | The tax amount in dollars. | 400.00                     |