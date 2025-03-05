# HistoricalEmployeeBody

## Example Usage

```typescript
import { HistoricalEmployeeBody } from "@gusto/embedded-api/models/components/historicalemployeebody.js";

let value: HistoricalEmployeeBody = {
  firstName: "Stan",
  lastName: "Cole",
  dateOfBirth: "1959-10-30",
  ssn: "<value>",
  workAddress: {},
  homeAddress: {
    street1: "<value>",
    city: "North Jalon",
    state: "Virginia",
    zip: "00237-9369",
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
| `email`                                                                                                      | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Optional. If provided, the email address will be saved to the employee.                                      |
| `job`                                                                                                        | [components.HistoricalEmployeeBodyJob](../../models/components/historicalemployeebodyjob.md)                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `employeeStateTaxes`                                                                                         | [components.EmployeeStateTaxes](../../models/components/employeestatetaxes.md)                               | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |