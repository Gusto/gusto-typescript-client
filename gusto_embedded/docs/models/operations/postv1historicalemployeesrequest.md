# PostV1HistoricalEmployeesRequest

## Example Usage

```typescript
import { PostV1HistoricalEmployeesRequest } from "@gusto/embedded-api/models/operations/postv1historicalemployees.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

let value: PostV1HistoricalEmployeesRequest = {
  companyUuid: "7b1d0df1-6403-4a06-8768-c1dd7d24d27a",
  historicalEmployeeBody: {
    firstName: "Soren",
    middleInitial: "A",
    lastName: "Kierkegaard",
    preferredFirstName: "Angel",
    dateOfBirth: new RFCDate("1995-05-05"),
    ssn: "123456294",
    workAddress: {
      locationUuid: "1da85d35-1910-40a7-9c1f-8e2b3d4c5a6f",
    },
    homeAddress: {
      street1: "55 Mission St",
      street2: "Floor 3",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
    },
    termination: {
      effectiveDate: new RFCDate("2022-01-01"),
    },
    email: "soren.kierkegaard@example.com",
    job: {
      hireDate: new RFCDate("2020-01-01"),
    },
    employeeStateTaxes: {
      wcCovered: true,
      wcClassCode: "051000",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1HistoricalEmployeesHeaderXGustoAPIVersion](../../models/operations/postv1historicalemployeesheaderxgustoapiversion.md)                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |                                                                                                                                                                                                                              |
| `companyUuid`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company that will employ this historical record.                                                                                                                                                             | 7b1d0df1-6403-4a06-8768-c1dd7d24d27a                                                                                                                                                                                         |
| `historicalEmployeeBody`                                                                                                                                                                                                     | [components.HistoricalEmployeeBody](../../models/components/historicalemployeebody.md)                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |                                                                                                                                                                                                                              |