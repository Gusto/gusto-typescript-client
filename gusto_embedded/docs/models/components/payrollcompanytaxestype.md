# PayrollCompanyTaxesType

## Example Usage

```typescript
import { PayrollCompanyTaxesType } from "@gusto/embedded-api/models/components/payrollcompanytaxestype.js";

let value: PayrollCompanyTaxesType = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `name`                                          | *string*                                        | :heavy_minus_sign:                              | The tax name                                    |
| `employer`                                      | *boolean*                                       | :heavy_minus_sign:                              | Whether this tax is an employer or employee tax |
| `amount`                                        | *string*                                        | :heavy_minus_sign:                              | The amount of this tax for the payroll          |