# Employees

## Overview

### Available Operations

* [list](#list) - Get employees of a company
* [create](#create) - Create an employee
* [getV1CompaniesCompanyIdEmployeesPaymentDetails](#getv1companiescompanyidemployeespaymentdetails) - Get employee payment details for a company
* [createHistorical](#createhistorical) - Create a historical employee
* [get](#get) - Get an employee
* [update](#update) - Update an employee.
* [delete](#delete) - Delete an onboarding employee
* [getCustomFields](#getcustomfields) - Get an employee's custom fields
* [updateOnboardingDocumentsConfig](#updateonboardingdocumentsconfig) - Update employee onboarding documents config
* [getOnboardingStatus](#getonboardingstatus) - Get the employee's onboarding status
* [updateOnboardingStatus](#updateonboardingstatus) - Update the employee's onboarding status
* [getTimeOffActivities](#gettimeoffactivities) - Get employee time off activities

## list

Get all of the employees, onboarding, active and terminated, for a given company.

Note: Compensation data (pay rate, payment unit, and related fields) represents sensitive employee pay information. When retrieving employee job data, these fields (`rate`, `payment_unit`, `current_compensation_uuid`, `compensations`) are only returned when the `compensations:read` scope is included. This allows you to access employee and job metadata without exposing pay rates.

scope: `employees:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_id-employees" method="get" path="/v1/companies/{company_id}/employees" example="test_example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.list({
    companyId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeesList } from "@gusto/embedded-api/funcs/employeesList.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesList(gustoEmbedded, {
    companyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesList failed:", res.error);
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
  useEmployeesList,
  useEmployeesListSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchEmployeesList,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateEmployeesList,
  invalidateAllEmployeesList,
} from "@gusto/embedded-api/react-query/employeesList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyIdEmployeesRequest](../../models/operations/getv1companiescompanyidemployeesrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CompaniesCompanyIdEmployeesResponse](../../models/operations/getv1companiescompanyidemployeesresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## create

Create an employee.

scope: `employees:manage`

### Example Usage: request_example_1

<!-- UsageSnippet language="typescript" operationID="post-v1-employees" method="post" path="/v1/companies/{company_id}/employees" example="request_example_1" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.create({
    companyId: "<id>",
    requestBody: {
      firstName: "Karl",
      lastName: "The Fog",
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
import { employeesCreate } from "@gusto/embedded-api/funcs/employeesCreate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesCreate(gustoEmbedded, {
    companyId: "<id>",
    requestBody: {
      firstName: "Karl",
      lastName: "The Fog",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesCreate failed:", res.error);
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
  useEmployeesCreateMutation
} from "@gusto/embedded-api/react-query/employeesCreate.js";
```
### Example Usage: test_example

<!-- UsageSnippet language="typescript" operationID="post-v1-employees" method="post" path="/v1/companies/{company_id}/employees" example="test_example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.create({
    companyId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeesCreate } from "@gusto/embedded-api/funcs/employeesCreate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesCreate(gustoEmbedded, {
    companyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesCreate failed:", res.error);
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
  useEmployeesCreateMutation
} from "@gusto/embedded-api/react-query/employeesCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1EmployeesRequest](../../models/operations/postv1employeesrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1EmployeesResponse](../../models/operations/postv1employeesresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## getV1CompaniesCompanyIdEmployeesPaymentDetails

Fetches payment details for employees in a given company. Results are paginated.

Use the `employee_uuid` query parameter to filter for a single employee.
Use the `payroll_uuid` query parameter to filter for employees on a specific payroll.
Providing both `employee_uuid` and `payroll_uuid` will result in a 400 error.
An empty array is returned if the company has no employees or if no employees match the filter criteria.

The `encrypted_account_number` in the `splits` array is only visible if the `employee_payment_methods:read:account_number` scope is present.

Base scope: `employee_payment_methods:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_id-employees-payment_details" method="get" path="/v1/companies/{company_id}/employees/payment_details" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.getV1CompaniesCompanyIdEmployeesPaymentDetails({
    companyId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeesGetV1CompaniesCompanyIdEmployeesPaymentDetails } from "@gusto/embedded-api/funcs/employeesGetV1CompaniesCompanyIdEmployeesPaymentDetails.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesGetV1CompaniesCompanyIdEmployeesPaymentDetails(gustoEmbedded, {
    companyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesGetV1CompaniesCompanyIdEmployeesPaymentDetails failed:", res.error);
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
  useEmployeesGetV1CompaniesCompanyIdEmployeesPaymentDetails,
  useEmployeesGetV1CompaniesCompanyIdEmployeesPaymentDetailsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchEmployeesGetV1CompaniesCompanyIdEmployeesPaymentDetails,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateEmployeesGetV1CompaniesCompanyIdEmployeesPaymentDetails,
  invalidateAllEmployeesGetV1CompaniesCompanyIdEmployeesPaymentDetails,
} from "@gusto/embedded-api/react-query/employeesGetV1CompaniesCompanyIdEmployeesPaymentDetails.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyIdEmployeesPaymentDetailsRequest](../../models/operations/getv1companiescompanyidemployeespaymentdetailsrequest.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CompaniesCompanyIdEmployeesPaymentDetailsResponse](../../models/operations/getv1companiescompanyidemployeespaymentdetailsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createHistorical

Create a historical employee, an employee that was previously dismissed from the company in the current year.

scope: `employees:manage`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="post-v1-historical_employees" method="post" path="/v1/companies/{company_uuid}/historical_employees" example="Basic" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.createHistorical({
    companyUuid: "<id>",
    historicalEmployeeBody: {
      firstName: "Martin",
      lastName: "Flatley",
      dateOfBirth: "1991-02-20",
      ssn: "<value>",
      workAddress: {},
      homeAddress: {
        street1: "<value>",
        city: "New Alysonfield",
        state: "Arizona",
        zip: "00061-3612",
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
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeesCreateHistorical } from "@gusto/embedded-api/funcs/employeesCreateHistorical.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesCreateHistorical(gustoEmbedded, {
    companyUuid: "<id>",
    historicalEmployeeBody: {
      firstName: "Martin",
      lastName: "Flatley",
      dateOfBirth: "1991-02-20",
      ssn: "<value>",
      workAddress: {},
      homeAddress: {
        street1: "<value>",
        city: "New Alysonfield",
        state: "Arizona",
        zip: "00061-3612",
      },
      termination: {},
      job: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesCreateHistorical failed:", res.error);
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
  useEmployeesCreateHistoricalMutation
} from "@gusto/embedded-api/react-query/employeesCreateHistorical.js";
```
### Example Usage: Create Historical Employee Example

<!-- UsageSnippet language="typescript" operationID="post-v1-historical_employees" method="post" path="/v1/companies/{company_uuid}/historical_employees" example="Create Historical Employee Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.createHistorical({
    companyUuid: "<id>",
    historicalEmployeeBody: {
      firstName: "Martin",
      lastName: "Flatley",
      dateOfBirth: "1991-02-20",
      ssn: "<value>",
      workAddress: {},
      homeAddress: {
        street1: "<value>",
        city: "New Alysonfield",
        state: "Arizona",
        zip: "00061-3612",
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
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeesCreateHistorical } from "@gusto/embedded-api/funcs/employeesCreateHistorical.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesCreateHistorical(gustoEmbedded, {
    companyUuid: "<id>",
    historicalEmployeeBody: {
      firstName: "Martin",
      lastName: "Flatley",
      dateOfBirth: "1991-02-20",
      ssn: "<value>",
      workAddress: {},
      homeAddress: {
        street1: "<value>",
        city: "New Alysonfield",
        state: "Arizona",
        zip: "00061-3612",
      },
      termination: {},
      job: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesCreateHistorical failed:", res.error);
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
  useEmployeesCreateHistoricalMutation
} from "@gusto/embedded-api/react-query/employeesCreateHistorical.js";
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="post-v1-historical_employees" method="post" path="/v1/companies/{company_uuid}/historical_employees" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.createHistorical({
    companyUuid: "<id>",
    historicalEmployeeBody: {
      firstName: "Soren",
      middleInitial: "A",
      lastName: "Kierkegaard",
      preferredFirstName: "Angel",
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
import { employeesCreateHistorical } from "@gusto/embedded-api/funcs/employeesCreateHistorical.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesCreateHistorical(gustoEmbedded, {
    companyUuid: "<id>",
    historicalEmployeeBody: {
      firstName: "Soren",
      middleInitial: "A",
      lastName: "Kierkegaard",
      preferredFirstName: "Angel",
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
    console.log("employeesCreateHistorical failed:", res.error);
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
  useEmployeesCreateHistoricalMutation
} from "@gusto/embedded-api/react-query/employeesCreateHistorical.js";
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="post-v1-historical_employees" method="post" path="/v1/companies/{company_uuid}/historical_employees" example="Nested" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.createHistorical({
    companyUuid: "<id>",
    historicalEmployeeBody: {
      firstName: "Martin",
      lastName: "Flatley",
      dateOfBirth: "1991-02-20",
      ssn: "<value>",
      workAddress: {},
      homeAddress: {
        street1: "<value>",
        city: "New Alysonfield",
        state: "Arizona",
        zip: "00061-3612",
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
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeesCreateHistorical } from "@gusto/embedded-api/funcs/employeesCreateHistorical.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesCreateHistorical(gustoEmbedded, {
    companyUuid: "<id>",
    historicalEmployeeBody: {
      firstName: "Martin",
      lastName: "Flatley",
      dateOfBirth: "1991-02-20",
      ssn: "<value>",
      workAddress: {},
      homeAddress: {
        street1: "<value>",
        city: "New Alysonfield",
        state: "Arizona",
        zip: "00061-3612",
      },
      termination: {},
      job: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesCreateHistorical failed:", res.error);
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
  useEmployeesCreateHistoricalMutation
} from "@gusto/embedded-api/react-query/employeesCreateHistorical.js";
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="post-v1-historical_employees" method="post" path="/v1/companies/{company_uuid}/historical_employees" example="Resource" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.createHistorical({
    companyUuid: "<id>",
    historicalEmployeeBody: {
      firstName: "Martin",
      lastName: "Flatley",
      dateOfBirth: "1991-02-20",
      ssn: "<value>",
      workAddress: {},
      homeAddress: {
        street1: "<value>",
        city: "New Alysonfield",
        state: "Arizona",
        zip: "00061-3612",
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
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeesCreateHistorical } from "@gusto/embedded-api/funcs/employeesCreateHistorical.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesCreateHistorical(gustoEmbedded, {
    companyUuid: "<id>",
    historicalEmployeeBody: {
      firstName: "Martin",
      lastName: "Flatley",
      dateOfBirth: "1991-02-20",
      ssn: "<value>",
      workAddress: {},
      homeAddress: {
        street1: "<value>",
        city: "New Alysonfield",
        state: "Arizona",
        zip: "00061-3612",
      },
      termination: {},
      job: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesCreateHistorical failed:", res.error);
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
  useEmployeesCreateHistoricalMutation
} from "@gusto/embedded-api/react-query/employeesCreateHistorical.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1HistoricalEmployeesRequest](../../models/operations/postv1historicalemployeesrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1HistoricalEmployeesResponse](../../models/operations/postv1historicalemployeesresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## get

Get an employee.

Note: Compensation data (pay rate, payment unit, and related fields) represents sensitive employee pay information. When retrieving employee job data, these fields (`rate`, `payment_unit`, `current_compensation_uuid`, `compensations`) are only returned when the `compensations:read` scope is included. This allows you to access employee and job metadata without exposing pay rates.

scope: `employees:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-employees" method="get" path="/v1/employees/{employee_id}" example="test_example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.get({
    employeeId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeesGet } from "@gusto/embedded-api/funcs/employeesGet.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesGet(gustoEmbedded, {
    employeeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesGet failed:", res.error);
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
  useEmployeesGet,
  useEmployeesGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchEmployeesGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateEmployeesGet,
  invalidateAllEmployeesGet,
} from "@gusto/embedded-api/react-query/employeesGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1EmployeesRequest](../../models/operations/getv1employeesrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1EmployeesResponse](../../models/operations/getv1employeesresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## update

Update an employee.

scope: `employees:write`

### Example Usage: request_example_1

<!-- UsageSnippet language="typescript" operationID="put-v1-employees" method="put" path="/v1/employees/{employee_id}" example="request_example_1" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.update({
    employeeId: "<id>",
    requestBody: {
      version: "16db4494c093c78f703aac608c7b8ea2",
      firstName: "Weezy",
      middleInitial: "F",
      lastName: "Baby",
      email: "tunechi@cashmoneyrecords.com",
      dateOfBirth: "1991-01-31",
      ssn: "824920233",
      workEmail: "new.partner.work@example.com",
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
import { employeesUpdate } from "@gusto/embedded-api/funcs/employeesUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesUpdate(gustoEmbedded, {
    employeeId: "<id>",
    requestBody: {
      version: "16db4494c093c78f703aac608c7b8ea2",
      firstName: "Weezy",
      middleInitial: "F",
      lastName: "Baby",
      email: "tunechi@cashmoneyrecords.com",
      dateOfBirth: "1991-01-31",
      ssn: "824920233",
      workEmail: "new.partner.work@example.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesUpdate failed:", res.error);
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
  useEmployeesUpdateMutation
} from "@gusto/embedded-api/react-query/employeesUpdate.js";
```
### Example Usage: test_example

<!-- UsageSnippet language="typescript" operationID="put-v1-employees" method="put" path="/v1/employees/{employee_id}" example="test_example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.update({
    employeeId: "<id>",
    requestBody: {
      version: "<value>",
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
import { employeesUpdate } from "@gusto/embedded-api/funcs/employeesUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesUpdate(gustoEmbedded, {
    employeeId: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesUpdate failed:", res.error);
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
  useEmployeesUpdateMutation
} from "@gusto/embedded-api/react-query/employeesUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1EmployeesRequest](../../models/operations/putv1employeesrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1EmployeesResponse](../../models/operations/putv1employeesresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 409, 422                              | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## delete

Use this endpoint to delete an employee who is in onboarding. Deleting
an onboarded employee is not allowed and will return a 422 response. Please check out the Terminations api
if you need to terminate an onboarded employee.

scope: `employees:manage`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-v1-employee" method="delete" path="/v1/employees/{employee_id}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.delete({
    employeeId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeesDelete } from "@gusto/embedded-api/funcs/employeesDelete.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesDelete(gustoEmbedded, {
    employeeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesDelete failed:", res.error);
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
  useEmployeesDeleteMutation
} from "@gusto/embedded-api/react-query/employeesDelete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1EmployeeRequest](../../models/operations/deletev1employeerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1EmployeeResponse](../../models/operations/deletev1employeeresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## getCustomFields

Returns a list of the employee's custom fields.

scope: `employees:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-employees-employee_id-custom_fields" method="get" path="/v1/employees/{employee_id}/custom_fields" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.getCustomFields({
    employeeId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeesGetCustomFields } from "@gusto/embedded-api/funcs/employeesGetCustomFields.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesGetCustomFields(gustoEmbedded, {
    employeeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesGetCustomFields failed:", res.error);
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
  useEmployeesGetCustomFields,
  useEmployeesGetCustomFieldsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchEmployeesGetCustomFields,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateEmployeesGetCustomFields,
  invalidateAllEmployeesGetCustomFields,
} from "@gusto/embedded-api/react-query/employeesGetCustomFields.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1EmployeesEmployeeIdCustomFieldsRequest](../../models/operations/getv1employeesemployeeidcustomfieldsrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1EmployeesEmployeeIdCustomFieldsResponse](../../models/operations/getv1employeesemployeeidcustomfieldsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateOnboardingDocumentsConfig

Indicate whether to include the Form I-9 for an employee during the onboarding process.
If included, the employee will be prompted to complete Form I-9 as part of their onboarding.

## Related guides
- [Employee onboarding](doc:employee-onboarding)

scope: `employees:manage`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-employees-employee_id-onboarding_documents_config" method="put" path="/v1/employees/{employee_id}/onboarding_documents_config" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.updateOnboardingDocumentsConfig({
    employeeId: "<id>",
    employeeOnboardingDocumentsConfigRequest: {
      i9Document: true,
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
import { employeesUpdateOnboardingDocumentsConfig } from "@gusto/embedded-api/funcs/employeesUpdateOnboardingDocumentsConfig.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesUpdateOnboardingDocumentsConfig(gustoEmbedded, {
    employeeId: "<id>",
    employeeOnboardingDocumentsConfigRequest: {
      i9Document: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesUpdateOnboardingDocumentsConfig failed:", res.error);
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
  useEmployeesUpdateOnboardingDocumentsConfigMutation
} from "@gusto/embedded-api/react-query/employeesUpdateOnboardingDocumentsConfig.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest](../../models/operations/putv1employeesemployeeidonboardingdocumentsconfigrequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse](../../models/operations/putv1employeesemployeeidonboardingdocumentsconfigresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getOnboardingStatus

# Description
Retrieves an employee's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.


## onboarding_status

### Admin-facilitated onboarding
| onboarding_status | Description |
|:------------------|------------:|
| `admin_onboarding_incomplete` | Admin needs to complete the full employee-onboarding. |
| `onboarding_completed` | Employee has been fully onboarded and verified. |

### Employee self-onboarding
| onboarding_status | Description |
|:------------------|------------:|
| `admin_onboarding_incomplete` | Admin needs to enter basic information about the employee. |
| `self_onboarding_pending_invite` | Admin has the intention to invite the employee to self-onboard (e.g., marking a checkbox), but the system has not yet sent the invitation. |
| `self_onboarding_invited` | Employee has been sent an invitation to self-onboard. |
| `self_onboarding_invited_started` | Employee has started the self-onboarding process. |
| `self_onboarding_invited_overdue` | Employee's start date has passed, and employee has still not completed self-onboarding. |
| `self_onboarding_completed_by_employee` | Employee has completed entering in their information. The status should be updated via API to "self_onboarding_awaiting_admin_review" from here, once the Admin has started reviewing. |
| `self_onboarding_awaiting_admin_review` | Admin has started to verify the employee's information. |
| `onboarding_completed` | Employee has been fully onboarded and verified. |

## onboarding_steps

| onboarding_steps | Requirement(s) to be completed |
|:-----------------|-------------------------------:|
| `personal_details` | Add employee's first name, last name, email, date of birth, social security number |
| `compensation_details` | Associate employee to a job & compensation. |
| `add_work_address` | Add employee work address. |
| `add_home_address` | Add employee home address. |
| `federal_tax_setup` | Set up federal tax withholdings. |
| `state_tax_setup` | Set up state tax withholdings. |
| `direct_deposit_setup` | (optional) Set up employee's direct deposit. |
| `employee_form_signing` | Employee forms (e.g., W4, direct deposit authorization) are generated & signed. |
| `file_new_hire_report` | File a new hire report for this employee. |
| `admin_review` | Admin reviews & confirms employee details (only required for Employee self-onboarding) |

scope: `employees:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-employees-employee_id-onboarding_status" method="get" path="/v1/employees/{employee_id}/onboarding_status" example="test_example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.getOnboardingStatus({
    employeeId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeesGetOnboardingStatus } from "@gusto/embedded-api/funcs/employeesGetOnboardingStatus.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesGetOnboardingStatus(gustoEmbedded, {
    employeeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesGetOnboardingStatus failed:", res.error);
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
  useEmployeesGetOnboardingStatus,
  useEmployeesGetOnboardingStatusSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchEmployeesGetOnboardingStatus,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateEmployeesGetOnboardingStatus,
  invalidateAllEmployeesGetOnboardingStatus,
} from "@gusto/embedded-api/react-query/employeesGetOnboardingStatus.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1EmployeesEmployeeIdOnboardingStatusRequest](../../models/operations/getv1employeesemployeeidonboardingstatusrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1EmployeesEmployeeIdOnboardingStatusResponse](../../models/operations/getv1employeesemployeeidonboardingstatusresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## updateOnboardingStatus

Updates an employee's onboarding status.
        Below is a list of valid onboarding status changes depending on the intended action to be performed on behalf of the employee.

        | Action | current onboarding_status | new onboarding_status |
        |:------------------|:------------:|----------:|
        | Mark an employee as self-onboarding | `admin_onboarding_incomplete` | `self_onboarding_pending_invite` |
        | Invite an employee to self-onboard | `admin_onboarding_incomplete` or `self_onboarding_pending_invite` | `self_onboarding_invited` |
        | Cancel an employee's self-onboarding | `self_onboarding_invited` or `self_onboarding_pending_invite` | `admin_onboarding_incomplete` |
        | Review an employee's self-onboarded info | `self_onboarding_completed_by_employee` | `self_onboarding_awaiting_admin_review` |
        | Finish an employee's onboarding | `admin_onboarding_incomplete` or `self_onboarding_awaiting_admin_review` | `onboarding_completed` |

scope: `employees:manage`

### Example Usage: request_example_1

<!-- UsageSnippet language="typescript" operationID="put-v1-employees-employee_id-onboarding_status" method="put" path="/v1/employees/{employee_id}/onboarding_status" example="request_example_1" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.updateOnboardingStatus({
    employeeId: "<id>",
    requestBody: {
      onboardingStatus: "admin_onboarding_incomplete",
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
import { employeesUpdateOnboardingStatus } from "@gusto/embedded-api/funcs/employeesUpdateOnboardingStatus.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesUpdateOnboardingStatus(gustoEmbedded, {
    employeeId: "<id>",
    requestBody: {
      onboardingStatus: "admin_onboarding_incomplete",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesUpdateOnboardingStatus failed:", res.error);
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
  useEmployeesUpdateOnboardingStatusMutation
} from "@gusto/embedded-api/react-query/employeesUpdateOnboardingStatus.js";
```
### Example Usage: test_example

<!-- UsageSnippet language="typescript" operationID="put-v1-employees-employee_id-onboarding_status" method="put" path="/v1/employees/{employee_id}/onboarding_status" example="test_example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.updateOnboardingStatus({
    employeeId: "<id>",
    requestBody: {
      onboardingStatus: "self_onboarding_invited",
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
import { employeesUpdateOnboardingStatus } from "@gusto/embedded-api/funcs/employeesUpdateOnboardingStatus.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesUpdateOnboardingStatus(gustoEmbedded, {
    employeeId: "<id>",
    requestBody: {
      onboardingStatus: "self_onboarding_invited",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesUpdateOnboardingStatus failed:", res.error);
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
  useEmployeesUpdateOnboardingStatusMutation
} from "@gusto/embedded-api/react-query/employeesUpdateOnboardingStatus.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1EmployeesEmployeeIdOnboardingStatusRequest](../../models/operations/putv1employeesemployeeidonboardingstatusrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1EmployeesEmployeeIdOnboardingStatusResponse](../../models/operations/putv1employeesemployeeidonboardingstatusresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## getTimeOffActivities

Get employee time off activities.

scope: `employee_time_off_activities:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-version-employees-time_off_activities" method="get" path="/v1/employees/{employee_uuid}/time_off_activities" example="example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employees.getTimeOffActivities({
    employeeUuid: "<id>",
    timeOffType: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeesGetTimeOffActivities } from "@gusto/embedded-api/funcs/employeesGetTimeOffActivities.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeesGetTimeOffActivities(gustoEmbedded, {
    employeeUuid: "<id>",
    timeOffType: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeesGetTimeOffActivities failed:", res.error);
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
  useEmployeesGetTimeOffActivities,
  useEmployeesGetTimeOffActivitiesSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchEmployeesGetTimeOffActivities,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateEmployeesGetTimeOffActivities,
  invalidateAllEmployeesGetTimeOffActivities,
} from "@gusto/embedded-api/react-query/employeesGetTimeOffActivities.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetVersionEmployeesTimeOffActivitiesRequest](../../models/operations/getversionemployeestimeoffactivitiesrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetVersionEmployeesTimeOffActivitiesResponse](../../models/operations/getversionemployeestimeoffactivitiesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |