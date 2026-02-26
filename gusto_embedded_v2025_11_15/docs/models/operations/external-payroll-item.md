# ExternalPayrollItem

Submit wages, benefits, taxes for each employee

## Example Usage

```typescript
import { ExternalPayrollItem } from "openapi/models/operations";

let value: ExternalPayrollItem = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `employeeUuid`                                                                                                                                 | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The UUID of the employee.                                                                                                                      |
| `earnings`                                                                                                                                     | [operations.Earning](../../models/operations/earning.md)[]                                                                                     | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `benefits`                                                                                                                                     | [operations.Benefit](../../models/operations/benefit.md)[]                                                                                     | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `taxes`                                                                                                                                        | [operations.Tax](../../models/operations/tax.md)[]                                                                                             | :heavy_minus_sign:                                                                                                                             | An array of taxes for the employee. Depends on your company selections, taxes include federal income tax, social security, medicare, and more. |