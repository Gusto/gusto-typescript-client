# HistoricalEmployees

## Overview

### Available Operations

* [update](#update) - Update a historical employee

## update

Update a historical employee, an employee that was previously dismissed from the company in the current year.

scope: `employees:manage`

### Example Usage: Create Historical Employee Example

<!-- UsageSnippet language="typescript" operationID="put-v1-historical_employees" method="put" path="/v1/companies/{company_uuid}/historical_employees/{historical_employee_uuid}" example="Create Historical Employee Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.historicalEmployees.update({
    companyUuid: "<id>",
    historicalEmployeeUuid: "<id>",
    body: {
      version: "56d00c178bc7393b2a206ed6a86afcb4",
      firstName: "Damion",
      lastName: "Vandervort",
      dateOfBirth: "1998-11-29",
      ssn: "<value>",
      workAddress: {},
      homeAddress: {
        street1: "<value>",
        city: "Diannafort",
        state: "Oregon",
        zip: "08576",
      },
      termination: {},
      job: {},
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
    companyUuid: "<id>",
    historicalEmployeeUuid: "<id>",
    body: {
      version: "56d00c178bc7393b2a206ed6a86afcb4",
      firstName: "Damion",
      lastName: "Vandervort",
      dateOfBirth: "1998-11-29",
      ssn: "<value>",
      workAddress: {},
      homeAddress: {
        street1: "<value>",
        city: "Diannafort",
        state: "Oregon",
        zip: "08576",
      },
      termination: {},
      job: {},
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
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="put-v1-historical_employees" method="put" path="/v1/companies/{company_uuid}/historical_employees/{historical_employee_uuid}" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.historicalEmployees.update({
    companyUuid: "<id>",
    historicalEmployeeUuid: "<id>",
    body: {
      version: "db0edd04aaac4506f7edab03ac855d56",
      firstName: "Soren",
      middleInitial: "A",
      lastName: "Kierkegaard",
      dateOfBirth: "1995-05-05T00:00:00Z",
      ssn: "123456294",
      workAddress: {
        locationUuid: "1da85d35-1910-4d5e-8e94-39e8cdfe8c9a",
      },
      homeAddress: {
        street1: "300 3rd Street",
        street2: null,
        city: "San Francisco",
        state: "CA",
        zip: "94107",
      },
      termination: {
        effectiveDate: new Date("2022-09-15T00:00:00Z"),
      },
      job: {
        hireDate: new Date("2018-05-09T00:00:00Z"),
      },
      employeeStateTaxes: {
        wcCovered: true,
        wcClassCode: "20992",
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
    companyUuid: "<id>",
    historicalEmployeeUuid: "<id>",
    body: {
      version: "db0edd04aaac4506f7edab03ac855d56",
      firstName: "Soren",
      middleInitial: "A",
      lastName: "Kierkegaard",
      dateOfBirth: "1995-05-05T00:00:00Z",
      ssn: "123456294",
      workAddress: {
        locationUuid: "1da85d35-1910-4d5e-8e94-39e8cdfe8c9a",
      },
      homeAddress: {
        street1: "300 3rd Street",
        street2: null,
        city: "San Francisco",
        state: "CA",
        zip: "94107",
      },
      termination: {
        effectiveDate: new Date("2022-09-15T00:00:00Z"),
      },
      job: {
        hireDate: new Date("2018-05-09T00:00:00Z"),
      },
      employeeStateTaxes: {
        wcCovered: true,
        wcClassCode: "20992",
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

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |