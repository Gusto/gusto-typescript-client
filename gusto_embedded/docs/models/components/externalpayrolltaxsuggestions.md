# ExternalPayrollTaxSuggestions

The representation of an external payroll with minimal information.

## Example Usage

```typescript
import { ExternalPayrollTaxSuggestions } from "@gusto/embedded-api/models/components";

let value: ExternalPayrollTaxSuggestions = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `employeeUuid`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | The UUID of the employee.                                                |
| `taxSuggestions`                                                         | [components.TaxSuggestions](../../models/components/taxsuggestions.md)[] | :heavy_minus_sign:                                                       | Possible tax liabilities selections.                                     |