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
import { GustoEmbedded } from "@gusto/embedded-api-v-2026-06-15";
import { RFCDate } from "@gusto/embedded-api-v-2026-06-15/types/rfcdate.js";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.historicalEmployees.update({
    companyUuid: "7b1d0df1-6403-4a06-8768-c1dd7d24d27a",
    historicalEmployeeUuid: "a2b3c4d-5e6f-7890-abcd-ef1234567890",
    requestBody: {
      version: "56d00c178bc7393b2a206ed6a86afcb4",
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v-2026-06-15/core.js";
import { historicalEmployeesUpdate } from "@gusto/embedded-api-v-2026-06-15/funcs/historicalEmployeesUpdate.js";
import { RFCDate } from "@gusto/embedded-api-v-2026-06-15/types/rfcdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await historicalEmployeesUpdate(gustoEmbedded, {
    companyUuid: "7b1d0df1-6403-4a06-8768-c1dd7d24d27a",
    historicalEmployeeUuid: "a2b3c4d-5e6f-7890-abcd-ef1234567890",
    requestBody: {
      version: "56d00c178bc7393b2a206ed6a86afcb4",
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
} from "@gusto/embedded-api-v-2026-06-15/react-query/historicalEmployeesUpdate.js";
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

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |