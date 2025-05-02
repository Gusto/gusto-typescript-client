# EmployeeStateTax

Example response

## Example Usage

```typescript
import { EmployeeStateTax } from "@gusto/embedded-api/models/components/employeestatetax.js";

let value: EmployeeStateTax = {
  employeeUuid: "<id>",
  state: "New Jersey",
  questions: [
    {
      label: "<value>",
      description: "for fork about below",
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