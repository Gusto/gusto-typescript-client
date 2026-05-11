# PutV1HistoricalEmployeesRequest

## Example Usage

```typescript
import { PutV1HistoricalEmployeesRequest } from "openapi/models/operations";

let value: PutV1HistoricalEmployeesRequest = {
  companyUuid: "7b1d0df1-6403-4a06-8768-c1dd7d24d27a",
  historicalEmployeeUuid: "a2b3c4d-5e6f-7890-abcd-ef1234567890",
  body: {
    version: "56d00c178bc7393b2a206ed6a86afcb4",
    firstName: "Soren",
    middleInitial: "A",
    lastName: "Kierkegaard",
    preferredFirstName: "Angel",
    dateOfBirth: new Date("1995-05-05"),
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
      effectiveDate: new Date("2022-01-01"),
    },
    email: "soren.kierkegaard@example.com",
    job: {
      hireDate: new Date("2020-01-01"),
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
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PutV1HistoricalEmployeesXGustoAPIVersion](../../models/operations/put-v1-historical-employees-x-gusto-api-version.md)                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |                                                                                                                                                                                                                              |
| `companyUuid`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company that will employ this historical record.                                                                                                                                                             | 7b1d0df1-6403-4a06-8768-c1dd7d24d27a                                                                                                                                                                                         |
| `historicalEmployeeUuid`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the historical employee returned from create or list responses.                                                                                                                                                  | a2b3c4d-5e6f-7890-abcd-ef1234567890                                                                                                                                                                                          |
| `body`                                                                                                                                                                                                                       | [operations.PutV1HistoricalEmployeesRequestBody](../../models/operations/put-v1-historical-employees-request-body.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |                                                                                                                                                                                                                              |