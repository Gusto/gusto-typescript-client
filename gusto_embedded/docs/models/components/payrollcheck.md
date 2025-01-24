# PayrollCheck

Example response

## Example Usage

```typescript
import { PayrollCheck } from "gusto-embedded/models/components";

let value: PayrollCheck = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `payrollUuid`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | A unique identifier of the payroll.                                                              |
| `printingFormat`                                                                                 | *string*                                                                                         | :heavy_minus_sign:                                                                               | The format the checks will be printed.                                                           |
| `startingCheckNumber`                                                                            | *string*                                                                                         | :heavy_minus_sign:                                                                               | The starting check number for the checks being printed.                                          |
| `requestUuid`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | A unique identifier of the Generated Document request                                            |
| `status`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | Current status of the Generated Document                                                         |
| `employeeCheckNumberMapping`                                                                     | [components.EmployeeCheckNumberMapping](../../models/components/employeechecknumbermapping.md)[] | :heavy_minus_sign:                                                                               | An array of mapping employee uuids to their check numbers                                        |