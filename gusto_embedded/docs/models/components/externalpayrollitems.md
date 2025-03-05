# ExternalPayrollItems

## Example Usage

```typescript
import { ExternalPayrollItems } from "@gusto/embedded-api/models/components/externalpayroll.js";

let value: ExternalPayrollItems = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `employeeUuid`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `earnings`                                                                                 | [components.Earnings](../../models/components/earnings.md)[]                               | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `benefits`                                                                                 | [components.ExternalPayrollBenefits](../../models/components/externalpayrollbenefits.md)[] | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `taxes`                                                                                    | [components.ExternalPayrollTaxes](../../models/components/externalpayrolltaxes.md)[]       | :heavy_minus_sign:                                                                         | N/A                                                                                        |