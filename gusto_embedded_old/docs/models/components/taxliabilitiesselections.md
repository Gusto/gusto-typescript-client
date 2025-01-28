# TaxLiabilitiesSelections

Example response

## Example Usage

```typescript
import { TaxLiabilitiesSelections } from "openapi/models/components";

let value: TaxLiabilitiesSelections = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `taxId`                                                                            | *number*                                                                           | :heavy_minus_sign:                                                                 | The ID of the tax.                                                                 |
| `taxName`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | The name of the tax.                                                               |
| `lastUnpaidExternalPayrollUuid`                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | The UUID of last unpaid external payroll.                                          |
| `possibleLiabilities`                                                              | [components.PossibleLiabilities](../../models/components/possibleliabilities.md)[] | :heavy_minus_sign:                                                                 | Possible tax liabilities selections.                                               |