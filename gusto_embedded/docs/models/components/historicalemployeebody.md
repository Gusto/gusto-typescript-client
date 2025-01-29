# HistoricalEmployeeBody

## Example Usage

```typescript
import { HistoricalEmployeeBody } from "gusto-embedded/models/components";

let value: HistoricalEmployeeBody = {
  firstName: "Eloy",
  lastName: "Towne",
  dateOfBirth: "1998-04-07",
  ssn: "<value>",
  workAddress: {},
  homeAddress: {
    street1: "<value>",
    city: "Heathcotestad",
    state: "South Dakota",
    zip: "80880",
  },
  termination: {},
  job: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `firstName`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `middleInitial`                                                                                              | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `lastName`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `preferredFirstName`                                                                                         | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `dateOfBirth`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `ssn`                                                                                                        | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `workAddress`                                                                                                | [components.WorkAddress](../../models/components/workaddress.md)                                             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `homeAddress`                                                                                                | [components.HistoricalEmployeeBodyHomeAddress](../../models/components/historicalemployeebodyhomeaddress.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `termination`                                                                                                | [components.HistoricalEmployeeBodyTermination](../../models/components/historicalemployeebodytermination.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `job`                                                                                                        | [components.HistoricalEmployeeBodyJob](../../models/components/historicalemployeebodyjob.md)                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `employeeStateTaxes`                                                                                         | [components.EmployeeStateTaxes](../../models/components/employeestatetaxes.md)                               | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |