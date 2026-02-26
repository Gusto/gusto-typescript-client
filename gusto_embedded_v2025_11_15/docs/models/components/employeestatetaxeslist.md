# EmployeeStateTaxesList

## Example Usage

```typescript
import { EmployeeStateTaxesList } from "@gusto/embedded-api-v2025-11-15/models/components/employeestatetaxeslist.js";

let value: EmployeeStateTaxesList = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `employeeUuid`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | The employee's uuid                                                                          |
| `state`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | Two letter US state abbreviation                                                             |
| `fileNewHireReport`                                                                          | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `isWorkState`                                                                                | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `questions`                                                                                  | [components.EmployeeStateTaxQuestion](../../models/components/employeestatetaxquestion.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |