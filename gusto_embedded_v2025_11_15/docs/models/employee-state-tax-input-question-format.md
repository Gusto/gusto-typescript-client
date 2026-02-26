# EmployeeStateTaxInputQuestionFormat

## Example Usage

```typescript
import { EmployeeStateTaxInputQuestionFormat } from "openapi/models";

let value: EmployeeStateTaxInputQuestionFormat = {
  type: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Describes the type of question - Text, Number, Select, Currency, Date                                              |
| `options`                                                                                                          | [models.EmployeeStateTaxInputQuestionFormatOption](../models/employee-state-tax-input-question-format-option.md)[] | :heavy_minus_sign:                                                                                                 | For "Select" type questions, the allowed values and display labels.                                                |