# PayrollTaxesType

## Example Usage

```typescript
import { PayrollTaxesType } from "openapi/models";

let value: PayrollTaxesType = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `name`                                          | *string*                                        | :heavy_minus_sign:                              | The tax name                                    |
| `employer`                                      | *boolean*                                       | :heavy_minus_sign:                              | Whether this tax is an employer or employee tax |
| `amount`                                        | *number*                                        | :heavy_minus_sign:                              | The total tax for the payroll                   |