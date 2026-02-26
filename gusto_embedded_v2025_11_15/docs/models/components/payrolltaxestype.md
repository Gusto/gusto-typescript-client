# PayrollTaxesType

## Example Usage

```typescript
import { PayrollTaxesType } from "@gusto/embedded-api-v2025-11-15/models/components/payrolltaxestype.js";

let value: PayrollTaxesType = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `name`                                          | *string*                                        | :heavy_minus_sign:                              | The tax name                                    |
| `employer`                                      | *boolean*                                       | :heavy_minus_sign:                              | Whether this tax is an employer or employee tax |
| `amount`                                        | *number*                                        | :heavy_minus_sign:                              | The total tax for the payroll                   |