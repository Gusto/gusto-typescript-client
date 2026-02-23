# SalaryEstimates

## Overview

### Available Operations

* [postV1EmployeesEmployeeIdSalaryEstimates](#postv1employeesemployeeidsalaryestimates) - Create a salary estimate for an employee
* [getV1SalaryEstimatesId](#getv1salaryestimatesid) - Get a salary estimate
* [putV1SalaryEstimatesId](#putv1salaryestimatesid) - Update a salary estimate
* [postV1SalaryEstimatesUuidAccept](#postv1salaryestimatesuuidaccept) - Accept a salary estimate
* [getV1SalaryEstimatesOccupations](#getv1salaryestimatesoccupations) - Search for BLS occupations

## postV1EmployeesEmployeeIdSalaryEstimates

Create a salary estimate for an employee. This endpoint helps calculate a reasonable salary for S Corp owners based on their occupation, experience level, location, and business revenue.

A salary estimate must include:
- Annual net revenue of the business
- ZIP code for location-based salary data
- One or more occupations with experience levels and time percentages (must sum to 100%)

Only one in-progress salary estimate can exist per employee at a time. If an in-progress estimate already exists, you must either accept it or use the update endpoint.

scope: `salary_estimates:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-employees-employee_id-salary_estimates" method="post" path="/v1/employees/{employee_id}/salary_estimates" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.salaryEstimates.postV1EmployeesEmployeeIdSalaryEstimates({
    employeeId: "<id>",
    requestBody: {
      annualNetRevenue: 500000,
      zipCode: "94107",
      occupations: [],
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
import { salaryEstimatesPostV1EmployeesEmployeeIdSalaryEstimates } from "@gusto/embedded-api/funcs/salaryEstimatesPostV1EmployeesEmployeeIdSalaryEstimates.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await salaryEstimatesPostV1EmployeesEmployeeIdSalaryEstimates(gustoEmbedded, {
    employeeId: "<id>",
    requestBody: {
      annualNetRevenue: 500000,
      zipCode: "94107",
      occupations: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("salaryEstimatesPostV1EmployeesEmployeeIdSalaryEstimates failed:", res.error);
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
  useSalaryEstimatesPostV1EmployeesEmployeeIdSalaryEstimatesMutation
} from "@gusto/embedded-api/react-query/salaryEstimatesPostV1EmployeesEmployeeIdSalaryEstimates.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1EmployeesEmployeeIdSalaryEstimatesRequest](../../models/operations/postv1employeesemployeeidsalaryestimatesrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1EmployeesEmployeeIdSalaryEstimatesResponse](../../models/operations/postv1employeesemployeeidsalaryestimatesresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## getV1SalaryEstimatesId

Retrieve a salary estimate by its UUID. Returns the estimated salary calculation along with all occupation details, revenue, and location information.

scope: `salary_estimates:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-salary_estimates-id" method="get" path="/v1/salary_estimates/{uuid}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.salaryEstimates.getV1SalaryEstimatesId({
    uuid: "3c9d1f7e-adda-44fb-ba0e-7e5843661514",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { salaryEstimatesGetV1SalaryEstimatesId } from "@gusto/embedded-api/funcs/salaryEstimatesGetV1SalaryEstimatesId.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await salaryEstimatesGetV1SalaryEstimatesId(gustoEmbedded, {
    uuid: "3c9d1f7e-adda-44fb-ba0e-7e5843661514",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("salaryEstimatesGetV1SalaryEstimatesId failed:", res.error);
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
  // Query hooks for fetching data.
  useSalaryEstimatesGetV1SalaryEstimatesId,
  useSalaryEstimatesGetV1SalaryEstimatesIdSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchSalaryEstimatesGetV1SalaryEstimatesId,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateSalaryEstimatesGetV1SalaryEstimatesId,
  invalidateAllSalaryEstimatesGetV1SalaryEstimatesId,
} from "@gusto/embedded-api/react-query/salaryEstimatesGetV1SalaryEstimatesId.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1SalaryEstimatesIdRequest](../../models/operations/getv1salaryestimatesidrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1SalaryEstimatesIdResponse](../../models/operations/getv1salaryestimatesidresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## putV1SalaryEstimatesId

Update an existing salary estimate. You can modify the annual net revenue, ZIP code, and occupations.

The salary estimate must not be finalized (accepted). Once accepted, salary estimates become read-only for record-keeping purposes.

scope: `salary_estimates:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-salary_estimates-id" method="put" path="/v1/salary_estimates/{uuid}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.salaryEstimates.putV1SalaryEstimatesId({
    uuid: "969f5dac-57dd-4091-b195-2546171d3a76",
    requestBody: {
      annualNetRevenue: 600000,
      zipCode: "94107",
      occupations: [
        {
          code: "151252",
          experienceLevel: "expert",
          timePercentage: "0.6",
          primary: true,
        },
      ],
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
import { salaryEstimatesPutV1SalaryEstimatesId } from "@gusto/embedded-api/funcs/salaryEstimatesPutV1SalaryEstimatesId.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await salaryEstimatesPutV1SalaryEstimatesId(gustoEmbedded, {
    uuid: "969f5dac-57dd-4091-b195-2546171d3a76",
    requestBody: {
      annualNetRevenue: 600000,
      zipCode: "94107",
      occupations: [
        {
          code: "151252",
          experienceLevel: "expert",
          timePercentage: "0.6",
          primary: true,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("salaryEstimatesPutV1SalaryEstimatesId failed:", res.error);
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
  useSalaryEstimatesPutV1SalaryEstimatesIdMutation
} from "@gusto/embedded-api/react-query/salaryEstimatesPutV1SalaryEstimatesId.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1SalaryEstimatesIdRequest](../../models/operations/putv1salaryestimatesidrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1SalaryEstimatesIdResponse](../../models/operations/putv1salaryestimatesidresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## postV1SalaryEstimatesUuidAccept

Accept and finalize a salary estimate. This associates the estimate with an employee job and marks it as accepted.

Once accepted, the salary estimate becomes read-only for record-keeping purposes. The accepted salary can then be used to set up compensation for the employee.

scope: `salary_estimates:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-salary_estimates-uuid-accept" method="post" path="/v1/salary_estimates/{uuid}/accept" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.salaryEstimates.postV1SalaryEstimatesUuidAccept({
    uuid: "22c00075-fa4c-4bdc-91e3-f72ab8ec7a1d",
    requestBody: {
      employeeJobUuid: "7f5d3d93-6d6f-48c0-9f4e-cd12c2d3e4b2",
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
import { salaryEstimatesPostV1SalaryEstimatesUuidAccept } from "@gusto/embedded-api/funcs/salaryEstimatesPostV1SalaryEstimatesUuidAccept.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await salaryEstimatesPostV1SalaryEstimatesUuidAccept(gustoEmbedded, {
    uuid: "22c00075-fa4c-4bdc-91e3-f72ab8ec7a1d",
    requestBody: {
      employeeJobUuid: "7f5d3d93-6d6f-48c0-9f4e-cd12c2d3e4b2",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("salaryEstimatesPostV1SalaryEstimatesUuidAccept failed:", res.error);
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
  useSalaryEstimatesPostV1SalaryEstimatesUuidAcceptMutation
} from "@gusto/embedded-api/react-query/salaryEstimatesPostV1SalaryEstimatesUuidAccept.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1SalaryEstimatesUuidAcceptRequest](../../models/operations/postv1salaryestimatesuuidacceptrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1SalaryEstimatesUuidAcceptResponse](../../models/operations/postv1salaryestimatesuuidacceptresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## getV1SalaryEstimatesOccupations

Search for Bureau of Labor Statistics (BLS) occupations by name or keyword. This endpoint helps users find the appropriate occupation codes to use when creating or updating salary estimates.

Returns a list of matching occupations with their codes, titles, and descriptions.

📘 System Access Authentication

This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access)

scope: `salary_estimates:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-salary_estimates-occupations" method="get" path="/v1/salary_estimates/occupations" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded();

async function run() {
  const result = await gustoEmbedded.salaryEstimates.getV1SalaryEstimatesOccupations({
    systemAccessAuth: process.env["GUSTOEMBEDDED_SYSTEM_ACCESS_AUTH"] ?? "",
  }, {
    search: "software",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { salaryEstimatesGetV1SalaryEstimatesOccupations } from "@gusto/embedded-api/funcs/salaryEstimatesGetV1SalaryEstimatesOccupations.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore();

async function run() {
  const res = await salaryEstimatesGetV1SalaryEstimatesOccupations(gustoEmbedded, {
    systemAccessAuth: process.env["GUSTOEMBEDDED_SYSTEM_ACCESS_AUTH"] ?? "",
  }, {
    search: "software",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("salaryEstimatesGetV1SalaryEstimatesOccupations failed:", res.error);
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
  // Query hooks for fetching data.
  useSalaryEstimatesGetV1SalaryEstimatesOccupations,
  useSalaryEstimatesGetV1SalaryEstimatesOccupationsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchSalaryEstimatesGetV1SalaryEstimatesOccupations,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateSalaryEstimatesGetV1SalaryEstimatesOccupations,
  invalidateAllSalaryEstimatesGetV1SalaryEstimatesOccupations,
} from "@gusto/embedded-api/react-query/salaryEstimatesGetV1SalaryEstimatesOccupations.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1SalaryEstimatesOccupationsRequest](../../models/operations/getv1salaryestimatesoccupationsrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetV1SalaryEstimatesOccupationsSecurity](../../models/operations/getv1salaryestimatesoccupationssecurity.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1SalaryEstimatesOccupationsResponse](../../models/operations/getv1salaryestimatesoccupationsresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |