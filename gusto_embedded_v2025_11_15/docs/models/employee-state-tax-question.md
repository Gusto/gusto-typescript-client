# EmployeeStateTaxQuestion

## Example Usage

```typescript
import { EmployeeStateTaxQuestion } from "openapi/models";

let value: EmployeeStateTaxQuestion = {
  label: "<value>",
  description: "majority lay before",
  key: "<key>",
  isQuestionForAdminOnly: true,
  inputQuestionFormat: {
    type: "<value>",
  },
  answers: [
    {},
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `label`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | A short title for the question                                                                      |
| `description`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | An explaination of the question - this may contain inline html formatted links.                     |
| `key`                                                                                               | *string*                                                                                            | :heavy_check_mark:                                                                                  | A unique identifier of the question (for the given state) - used for updating the answer.           |
| `isQuestionForAdminOnly`                                                                            | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `inputQuestionFormat`                                                                               | [models.EmployeeStateTaxInputQuestionFormat](../models/employee-state-tax-input-question-format.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `answers`                                                                                           | [models.EmployeeStateTaxAnswer](../models/employee-state-tax-answer.md)[]                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |