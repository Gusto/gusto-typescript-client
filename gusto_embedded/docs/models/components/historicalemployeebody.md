# HistoricalEmployeeBody

## Example Usage

```typescript
import { HistoricalEmployeeBody } from "@gusto/embedded-api/models/components/historicalemployeebody.js";

let value: HistoricalEmployeeBody = {
  firstName: "Jessie",
  lastName: "Boehm",
  dateOfBirth: "1998-08-05",
  ssn: "<value>",
  workAddress: {},
  homeAddress: {
    street1: "<value>",
    city: "Rancho Santa Margarita",
    state: "Michigan",
    zip: "06434",
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