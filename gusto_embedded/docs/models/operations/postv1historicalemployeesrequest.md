# PostV1HistoricalEmployeesRequest

## Example Usage

```typescript
import { PostV1HistoricalEmployeesRequest } from "@gusto/embedded-api/models/operations/postv1historicalemployees.js";

let value: PostV1HistoricalEmployeesRequest = {
  companyUuid: "<id>",
  historicalEmployeeBody: {
    firstName: "Baylee",
    lastName: "Stamm",
    dateOfBirth: "1956-03-06",
    ssn: "<value>",
    workAddress: {},
    homeAddress: {
      street1: "<value>",
      city: "West Heatherville",
      state: "North Dakota",
      zip: "12580",
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