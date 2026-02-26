# ExternalPayrollTaxSuggestions

The representation of an external payroll with minimal information.

## Example Usage

```typescript
import { ExternalPayrollTaxSuggestions } from "openapi/models";

let value: ExternalPayrollTaxSuggestions = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `employeeUuid`                                        | *string*                                              | :heavy_minus_sign:                                    | The UUID of the employee.                             |
| `taxSuggestions`                                      | [models.TaxSuggestion](../models/tax-suggestion.md)[] | :heavy_minus_sign:                                    | Possible tax liabilities selections.                  |