# HistoricalEmployees
(*historicalEmployees*)

## Overview

### Available Operations

* [update](#update) - Update a historical employee

## update

Update a historical employee, an employee that was previously dismissed from the company in the current year.

scope: `employees:manage`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-historical_employees" method="put" path="/v1/companies/{company_uuid}/historical_employees/{historical_employee_uuid}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.historicalEmployees.update({
    companyUuid: "<id>",
    historicalEmployeeUuid: "<id>",
    requestBody: {
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
        effectiveDate: new RFCDate("2022-09-15T00:00:00Z"),
      },
      job: {
        hireDate: new RFCDate("2018-05-09T00:00:00Z"),
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
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { historicalEmployeesUpdate } from "@gusto/embedded-api/funcs/historicalEmployeesUpdate.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await historicalEmployeesUpdate(gustoEmbedded, {
    companyUuid: "<id>",
    historicalEmployeeUuid: "<id>",
    requestBody: {
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
        effectiveDate: new RFCDate("2022-09-15T00:00:00Z"),
      },
      job: {
        hireDate: new RFCDate("2018-05-09T00:00:00Z"),
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

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useHistoricalEmployeesUpdateMutation
} from "@gusto/embedded-api/react-query/historicalEmployeesUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1HistoricalEmployeesRequest](../../models/operations/putv1historicalemployeesrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1HistoricalEmployeesResponse](../../models/operations/putv1historicalemployeesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |