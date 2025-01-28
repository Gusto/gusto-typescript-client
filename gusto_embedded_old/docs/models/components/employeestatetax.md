# EmployeeStateTax

Example response

## Example Usage

```typescript
import { EmployeeStateTax } from "openapi/models/components";

let value: EmployeeStateTax = {
  employeeUuid: "<id>",
  state: "Oklahoma",
  questions: [
    {
      label: "<value>",
      description:
        "joshingly whose buttery once worth yippee gadzooks commemorate",
      key: "<key>",
      inputQuestionFormat: {
        type: "<value>",
      },
      answers: [
        {},
      ],
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `employeeUuid`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | The employee's uuid                                                                          |
| `state`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | Two letter US state abbreviation                                                             |
| `fileNewHireReport`                                                                          | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `isWorkState`                                                                                | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `questions`                                                                                  | [components.EmployeeStateTaxQuestion](../../models/components/employeestatetaxquestion.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |