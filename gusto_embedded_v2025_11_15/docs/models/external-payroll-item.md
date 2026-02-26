# ExternalPayrollItem

## Example Usage

```typescript
import { ExternalPayrollItem } from "openapi/models";

let value: ExternalPayrollItem = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `employeeUuid`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `earnings`                                                               | [models.Earning](../models/earning.md)[]                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `benefits`                                                               | [models.ExternalPayrollBenefit](../models/external-payroll-benefit.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |
| `taxes`                                                                  | [models.ExternalPayrollTax](../models/external-payroll-tax.md)[]         | :heavy_minus_sign:                                                       | N/A                                                                      |