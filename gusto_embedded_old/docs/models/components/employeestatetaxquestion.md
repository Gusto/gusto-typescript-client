# EmployeeStateTaxQuestion

## Example Usage

```typescript
import { EmployeeStateTaxQuestion } from "openapi/models/components";

let value: EmployeeStateTaxQuestion = {
  label: "<value>",
  description:
    "nimble duh wordy phew provided consequently considering unnaturally busy",
  key: "<key>",
  inputQuestionFormat: {
    type: "<value>",
  },
  answers: [
    {},
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `label`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | A short title for the question                                                                                   |
| `description`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | An explaination of the question - this may contain inline html formatted links.                                  |
| `key`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | A unique identifier of the question (for the given state) - used for updating the answer.                        |
| `inputQuestionFormat`                                                                                            | [components.EmployeeStateTaxInputQuestionFormat](../../models/components/employeestatetaxinputquestionformat.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `answers`                                                                                                        | [components.EmployeeStateTaxAnswer](../../models/components/employeestatetaxanswer.md)[]                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |