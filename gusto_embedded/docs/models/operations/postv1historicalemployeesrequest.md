# PostV1HistoricalEmployeesRequest

## Example Usage

```typescript
import { PostV1HistoricalEmployeesRequest } from "@gusto/embedded-api/models/operations/postv1historicalemployees.js";

let value: PostV1HistoricalEmployeesRequest = {
  companyUuid: "<id>",
  historicalEmployeeBody: {
    firstName: "Bianka",
    lastName: "Jacobson",
    dateOfBirth: "1969-05-22",
    ssn: "<value>",
    workAddress: {},
    homeAddress: {
      street1: "<value>",
      city: "Hegmanncester",
      state: "New York",
      zip: "46086",
    },
    termination: {},
    job: {},
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [components.VersionHeader](../../models/components/versionheader.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `historicalEmployeeBody`                                                                                                                                                                                                     | [components.HistoricalEmployeeBody](../../models/components/historicalemployeebody.md)                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                           | Create a historical employee.                                                                                                                                                                                                |