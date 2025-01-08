# EmployeeStateTaxInputQuestionFormat

## Example Usage

```typescript
import { EmployeeStateTaxInputQuestionFormat } from "gusto_embedded/models/components";

let value: EmployeeStateTaxInputQuestionFormat = {
  type: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `type`                                                                | *string*                                                              | :heavy_check_mark:                                                    | Describes the type of question - Text, Number, Select, Currency, Date |
| `options`                                                             | [components.Options](../../models/components/options.md)[]            | :heavy_minus_sign:                                                    | For "Select" type questions, the allowed values and display labels.   |