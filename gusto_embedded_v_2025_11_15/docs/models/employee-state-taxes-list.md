# EmployeeStateTaxesList

## Example Usage

```typescript
import { EmployeeStateTaxesList } from "openapi/models";

let value: EmployeeStateTaxesList = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `employeeUuid`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | The employee's uuid                                                           |
| `state`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | Two letter US state abbreviation                                              |
| `fileNewHireReport`                                                           | *boolean*                                                                     | :heavy_minus_sign:                                                            | N/A                                                                           |
| `isWorkState`                                                                 | *boolean*                                                                     | :heavy_minus_sign:                                                            | N/A                                                                           |
| `questions`                                                                   | [models.EmployeeStateTaxQuestion](../models/employee-state-tax-question.md)[] | :heavy_minus_sign:                                                            | N/A                                                                           |