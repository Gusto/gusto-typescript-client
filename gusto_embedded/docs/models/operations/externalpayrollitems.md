# ExternalPayrollItems

Submit wages, benefits, taxes for each employee

## Example Usage

```typescript
import { ExternalPayrollItems } from "gusto-embedded/models/operations";

let value: ExternalPayrollItems = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `employeeUuid`                                                                                                                                 | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The UUID of the employee.                                                                                                                      |
| `earnings`                                                                                                                                     | [operations.Earnings](../../models/operations/earnings.md)[]                                                                                   | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `benefits`                                                                                                                                     | [operations.Benefits](../../models/operations/benefits.md)[]                                                                                   | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `taxes`                                                                                                                                        | [operations.Taxes](../../models/operations/taxes.md)[]                                                                                         | :heavy_minus_sign:                                                                                                                             | An array of taxes for the employee. Depends on your company selections, taxes include federal income tax, social security, medicare, and more. |