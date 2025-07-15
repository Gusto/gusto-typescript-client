# PutV1HistoricalEmployeesRequest

## Example Usage

```typescript
import { PutV1HistoricalEmployeesRequest } from "@gusto/embedded-api/models/operations/putv1historicalemployees.js";

let value: PutV1HistoricalEmployeesRequest = {
  companyUuid: "<id>",
  historicalEmployeeUuid: "<id>",
  requestBody: {
    version: "56d00c178bc7393b2a206ed6a86afcb4",
    firstName: "Mellie",
    lastName: "Stroman-Bergstrom",
    dateOfBirth: "1987-03-01",
    ssn: "<value>",
    workAddress: {},
    homeAddress: {
      street1: "<value>",
      city: "South Alessia",
      state: "Arizona",
      zip: "43501-5370",
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
| `historicalEmployeeUuid`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the historical employee                                                                                                                                                                                          |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [components.VersionHeader](../../models/components/versionheader.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `requestBody`                                                                                                                                                                                                                | [operations.PutV1HistoricalEmployeesRequestBody](../../models/operations/putv1historicalemployeesrequestbody.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                           | Update a historical employee.                                                                                                                                                                                                |