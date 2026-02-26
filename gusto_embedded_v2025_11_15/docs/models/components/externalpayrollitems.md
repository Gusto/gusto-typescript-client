# ExternalPayrollItems

## Example Usage

```typescript
import { ExternalPayrollItems } from "@gusto/embedded-api-v2025-11-15/models/components/externalpayroll.js";

let value: ExternalPayrollItems = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `employeeUuid`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `earnings`                                                                           | [components.Earnings](../../models/components/earnings.md)[]                         | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `benefits`                                                                           | [components.Benefits](../../models/components/benefits.md)[]                         | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `taxes`                                                                              | [components.ExternalPayrollTaxes](../../models/components/externalpayrolltaxes.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |