# HistoricalEmployees

## Overview

### Available Operations

* [update](#update) - Update a historical employee

## update

Update a historical employee, an employee that was previously dismissed from the company in the current year.

scope: `employees:manage employees:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-historical_employees" method="put" path="/v1/companies/{company_uuid}/historical_employees/{historical_employee_uuid}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.historicalEmployees.update({
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { historicalEmployeesUpdate } from "openapi/funcs/historical-employees-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await historicalEmployeesUpdate(sdk, {
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("historicalEmployeesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1HistoricalEmployeesRequest](../../models/operations/put-v1-historical-employees-request.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Employee](../../models/employee.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.SDKDefaultError          | 4XX, 5XX                        | \*/\*                           |