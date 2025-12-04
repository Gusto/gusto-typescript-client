# EmployeeBenefits
(*employeeBenefits*)

## Overview

### Available Operations

* [create](#create) - Create an employee benefit
* [get](#get) - Get all benefits for an employee
* [retrieve](#retrieve) - Get an employee benefit
* [update](#update) - Update an employee benefit
* [delete](#delete) - Delete an employee benefit
* [getYtdBenefitAmountsFromDifferentCompany](#getytdbenefitamountsfromdifferentcompany) - Get year-to-date benefit amounts from a different company
* [createYtdBenefitAmountsFromDifferentCompany](#createytdbenefitamountsfromdifferentcompany) - Create year-to-date benefit amounts from a different company
* [getV1EmployeesEmployeeUuidSection603HighEarnerStatuses](#getv1employeesemployeeuuidsection603highearnerstatuses) - Get all Section 603 high earner statuses for an employee
* [postV1EmployeesEmployeeUuidSection603HighEarnerStatuses](#postv1employeesemployeeuuidsection603highearnerstatuses) - Create a Section 603 high earner status
* [getV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear](#getv1employeesemployeeuuidsection603highearnerstatuseseffectiveyear) - Get a Section 603 high earner status for a specific year
* [patchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear](#patchv1employeesemployeeuuidsection603highearnerstatuseseffectiveyear) - Update a Section 603 high earner status

## create

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee's enrollment.

When the application has the `employee_benefits:write:benefit_type_limited` data scope, the application can only create employee benefits for benefit types that are permitted for the application.

scope: `employee_benefits:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-employees-employee_id-employee_benefits" method="post" path="/v1/employees/{employee_id}/employee_benefits" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeeBenefits.create({
    employeeId: "<id>",
    requestBody: {
      companyBenefitUuid: "f68abb42-431e-4392-bc3f-2795627e00f3",
      employeeDeduction: "100.00",
      contribution: {
        type: "amount",
        value: "100.00",
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
import { employeeBenefitsCreate } from "@gusto/embedded-api/funcs/employeeBenefitsCreate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeeBenefitsCreate(gustoEmbedded, {
    employeeId: "<id>",
    requestBody: {
      companyBenefitUuid: "f68abb42-431e-4392-bc3f-2795627e00f3",
      employeeDeduction: "100.00",
      contribution: {
        type: "amount",
        value: "100.00",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsCreate failed:", res.error);
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
  useEmployeeBenefitsCreateMutation
} from "@gusto/embedded-api/react-query/employeeBenefitsCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1EmployeesEmployeeIdEmployeeBenefitsRequest](../../models/operations/postv1employeesemployeeidemployeebenefitsrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1EmployeesEmployeeIdEmployeeBenefitsResponse](../../models/operations/postv1employeesemployeeidemployeebenefitsresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## get

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

Returns an array of all employee benefits for this employee

Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.

scope: `employee_benefits:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-employees-employee_id-employee_benefits" method="get" path="/v1/employees/{employee_id}/employee_benefits" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeeBenefits.get({
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
import { employeeBenefitsGet } from "@gusto/embedded-api/funcs/employeeBenefitsGet.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeeBenefitsGet(gustoEmbedded, {
    employeeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsGet failed:", res.error);
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
  useEmployeeBenefitsGet,
  useEmployeeBenefitsGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchEmployeeBenefitsGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateEmployeeBenefitsGet,
  invalidateAllEmployeeBenefitsGet,
} from "@gusto/embedded-api/react-query/employeeBenefitsGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1EmployeesEmployeeIdEmployeeBenefitsRequest](../../models/operations/getv1employeesemployeeidemployeebenefitsrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1EmployeesEmployeeIdEmployeeBenefitsResponse](../../models/operations/getv1employeesemployeeidemployeebenefitsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## retrieve

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.

scope: `employee_benefits:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-employee_benefits-employee_benefit_id" method="get" path="/v1/employee_benefits/{employee_benefit_id}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeeBenefits.retrieve({
    employeeBenefitId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeeBenefitsRetrieve } from "@gusto/embedded-api/funcs/employeeBenefitsRetrieve.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeeBenefitsRetrieve(gustoEmbedded, {
    employeeBenefitId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsRetrieve failed:", res.error);
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
  useEmployeeBenefitsRetrieve,
  useEmployeeBenefitsRetrieveSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchEmployeeBenefitsRetrieve,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateEmployeeBenefitsRetrieve,
  invalidateAllEmployeeBenefitsRetrieve,
} from "@gusto/embedded-api/react-query/employeeBenefitsRetrieve.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1EmployeeBenefitsEmployeeBenefitIdRequest](../../models/operations/getv1employeebenefitsemployeebenefitidrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1EmployeeBenefitsEmployeeBenefitIdResponse](../../models/operations/getv1employeebenefitsemployeebenefitidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee's enrollment.

When the application has the `employee_benefits:write:benefit_type_limited` data scope, the application can only update employee benefits for benefit types that are permitted for the application.

scope: `employee_benefits:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-employee_benefits-employee_benefit_id" method="put" path="/v1/employee_benefits/{employee_benefit_id}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeeBenefits.update({
    employeeBenefitId: "<id>",
    requestBody: {
      version: "09j3d29jqdpj92109j9j2d90dq",
      employeeDeduction: "250.00",
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
import { employeeBenefitsUpdate } from "@gusto/embedded-api/funcs/employeeBenefitsUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeeBenefitsUpdate(gustoEmbedded, {
    employeeBenefitId: "<id>",
    requestBody: {
      version: "09j3d29jqdpj92109j9j2d90dq",
      employeeDeduction: "250.00",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsUpdate failed:", res.error);
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
  useEmployeeBenefitsUpdateMutation
} from "@gusto/embedded-api/react-query/employeeBenefitsUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1EmployeeBenefitsEmployeeBenefitIdRequest](../../models/operations/putv1employeebenefitsemployeebenefitidrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1EmployeeBenefitsEmployeeBenefitIdResponse](../../models/operations/putv1employeebenefitsemployeebenefitidresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## delete

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee's enrollment.

When the application has the `employee_benefits:write:benefit_type_limited` data scope, the application can only delete employee benefits for benefit types that are permitted for the application.

scope: `employee_benefits:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-v1-employee_benefits-employee_benefit_id" method="delete" path="/v1/employee_benefits/{employee_benefit_id}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeeBenefits.delete({
    employeeBenefitId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeeBenefitsDelete } from "@gusto/embedded-api/funcs/employeeBenefitsDelete.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeeBenefitsDelete(gustoEmbedded, {
    employeeBenefitId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsDelete failed:", res.error);
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
  useEmployeeBenefitsDeleteMutation
} from "@gusto/embedded-api/react-query/employeeBenefitsDelete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest](../../models/operations/deletev1employeebenefitsemployeebenefitidrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse](../../models/operations/deletev1employeebenefitsemployeebenefitidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getYtdBenefitAmountsFromDifferentCompany

Retrieves year-to-date benefit amounts that were contributed at a different company for the specified employee.
Returns benefit amounts for the requested tax year (defaults to current year if not specified).

This endpoint only supports retrieving outside contributions for 401(k) benefits.

scope: `employee_benefits:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-employee-ytd-benefit-amounts-from-different-company" method="get" path="/v1/employees/{employee_id}/ytd_benefit_amounts_from_different_company" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeeBenefits.getYtdBenefitAmountsFromDifferentCompany({
    employeeId: "<id>",
    taxYear: 2024,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeeBenefitsGetYtdBenefitAmountsFromDifferentCompany } from "@gusto/embedded-api/funcs/employeeBenefitsGetYtdBenefitAmountsFromDifferentCompany.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeeBenefitsGetYtdBenefitAmountsFromDifferentCompany(gustoEmbedded, {
    employeeId: "<id>",
    taxYear: 2024,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsGetYtdBenefitAmountsFromDifferentCompany failed:", res.error);
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
  useEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompany,
  useEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompanySuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompany,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompany,
  invalidateAllEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompany,
} from "@gusto/embedded-api/react-query/employeeBenefitsGetYtdBenefitAmountsFromDifferentCompany.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest](../../models/operations/getemployeeytdbenefitamountsfromdifferentcompanyrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse](../../models/operations/getemployeeytdbenefitamountsfromdifferentcompanyresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createYtdBenefitAmountsFromDifferentCompany

Year-to-date benefit amounts from a different company represents the amount of money added to an employee's plan during a current year, made outside of the current contribution when they were employed at a different company.

This endpoint only supports passing outside contributions for 401(k) benefits.

scope: `employee_benefits:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-employee-ytd-benefit-amounts-from-different-company" method="post" path="/v1/employees/{employee_id}/ytd_benefit_amounts_from_different_company" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeeBenefits.createYtdBenefitAmountsFromDifferentCompany({
    employeeId: "<id>",
    postEmployeeYtdBenefitAmountsFromDifferentCompany: {
      taxYear: 1828.56,
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
import { employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany } from "@gusto/embedded-api/funcs/employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany(gustoEmbedded, {
    employeeId: "<id>",
    postEmployeeYtdBenefitAmountsFromDifferentCompany: {
      taxYear: 1828.56,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany failed:", res.error);
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
  useEmployeeBenefitsCreateYtdBenefitAmountsFromDifferentCompanyMutation
} from "@gusto/embedded-api/react-query/employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest](../../models/operations/postemployeeytdbenefitamountsfromdifferentcompanyrequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse](../../models/operations/postemployeeytdbenefitamountsfromdifferentcompanyresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## getV1EmployeesEmployeeUuidSection603HighEarnerStatuses

Get all Section 603 high earner statuses for an employee across all years.

Section 603 of the SECURE 2.0 Act applies to employees aged 50 or older whose prior-year FICA wages exceed the IRS threshold.
These employees are classified as high earners, and their catch-up contributions to pre-tax retirement benefits must be designated as post-tax contributions.

scope: `employee_benefits:read`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-employees-employee_uuid-section603_high_earner_statuses" method="get" path="/v1/employees/{employee_uuid}/section603_high_earner_statuses" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeeBenefits.getV1EmployeesEmployeeUuidSection603HighEarnerStatuses({
    employeeUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatuses } from "@gusto/embedded-api/funcs/employeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatuses.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatuses(gustoEmbedded, {
    employeeUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatuses failed:", res.error);
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
  useEmployeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatuses,
  useEmployeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatusesSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchEmployeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatuses,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateEmployeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatuses,
  invalidateAllEmployeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatuses,
} from "@gusto/embedded-api/react-query/employeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatuses.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesRequest](../../models/operations/getv1employeesemployeeuuidsection603highearnerstatusesrequest.md)           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesResponse](../../models/operations/getv1employeesemployeeuuidsection603highearnerstatusesresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 404                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## postV1EmployeesEmployeeUuidSection603HighEarnerStatuses

Create a Section 603 high earner status for an employee for a specific year.

Section 603 of the SECURE 2.0 Act applies to employees aged 50 or older whose prior-year FICA wages exceed the IRS threshold.
These employees are classified as high earners, and their catch-up contributions to pre-tax retirement benefits must be designated as post-tax contributions.

scope: `employee_benefits:write`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-employees-employee_uuid-section603_high_earner_statuses" method="post" path="/v1/employees/{employee_uuid}/section603_high_earner_statuses" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeeBenefits.postV1EmployeesEmployeeUuidSection603HighEarnerStatuses({
    employeeUuid: "<id>",
    employeeSection603HighEarnerStatusCreateRequest: {
      effectiveYear: 2026,
      isHighEarner: true,
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
import { employeeBenefitsPostV1EmployeesEmployeeUuidSection603HighEarnerStatuses } from "@gusto/embedded-api/funcs/employeeBenefitsPostV1EmployeesEmployeeUuidSection603HighEarnerStatuses.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeeBenefitsPostV1EmployeesEmployeeUuidSection603HighEarnerStatuses(gustoEmbedded, {
    employeeUuid: "<id>",
    employeeSection603HighEarnerStatusCreateRequest: {
      effectiveYear: 2026,
      isHighEarner: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsPostV1EmployeesEmployeeUuidSection603HighEarnerStatuses failed:", res.error);
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
  useEmployeeBenefitsPostV1EmployeesEmployeeUuidSection603HighEarnerStatusesMutation
} from "@gusto/embedded-api/react-query/employeeBenefitsPostV1EmployeesEmployeeUuidSection603HighEarnerStatuses.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1EmployeesEmployeeUuidSection603HighEarnerStatusesRequest](../../models/operations/postv1employeesemployeeuuidsection603highearnerstatusesrequest.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1EmployeesEmployeeUuidSection603HighEarnerStatusesResponse](../../models/operations/postv1employeesemployeeuuidsection603highearnerstatusesresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 404, 409, 422                         | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## getV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear

Get a Section 603 high earner status for an employee for a specific year.

Section 603 of the SECURE 2.0 Act applies to employees aged 50 or older whose prior-year FICA wages exceed the IRS threshold.
These employees are classified as high earners, and their catch-up contributions to pre-tax retirement benefits must be designated as post-tax contributions.

scope: `employee_benefits:read`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-employees-employee_uuid-section603_high_earner_statuses-effective_year" method="get" path="/v1/employees/{employee_uuid}/section603_high_earner_statuses/{effective_year}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeeBenefits.getV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear({
    employeeUuid: "<id>",
    effectiveYear: 857230,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import {
  employeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear,
} from "@gusto/embedded-api/funcs/employeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear(gustoEmbedded, {
    employeeUuid: "<id>",
    effectiveYear: 857230,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear failed:", res.error);
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
  useEmployeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear,
  useEmployeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchEmployeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateEmployeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear,
  invalidateAllEmployeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear,
} from "@gusto/embedded-api/react-query/employeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear.js";
```

### Parameters

| Parameter                                                                                                                                                                                      | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                      | [operations.GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearRequest](../../models/operations/getv1employeesemployeeuuidsection603highearnerstatuseseffectiveyearrequest.md) | :heavy_check_mark:                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                     |
| `options`                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                        | :heavy_minus_sign:                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                 |
| `options.retries`                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                               |

### Response

**Promise\<[operations.GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearResponse](../../models/operations/getv1employeesemployeeuuidsection603highearnerstatuseseffectiveyearresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 404, 422                              | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## patchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear

Update a Section 603 high earner status for an employee for a specific year.

Section 603 of the SECURE 2.0 Act applies to employees aged 50 or older whose prior-year FICA wages exceed the IRS threshold.
These employees are classified as high earners, and their catch-up contributions to pre-tax retirement benefits must be designated as post-tax contributions.

scope: `employee_benefits:write`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch-v1-employees-employee_uuid-section603_high_earner_statuses-effective_year" method="patch" path="/v1/employees/{employee_uuid}/section603_high_earner_statuses/{effective_year}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeeBenefits.patchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear({
    employeeUuid: "<id>",
    effectiveYear: 152322,
    employeeSection603HighEarnerStatusUpdateRequest: {
      isHighEarner: true,
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
import {
  employeeBenefitsPatchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear,
} from "@gusto/embedded-api/funcs/employeeBenefitsPatchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeeBenefitsPatchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear(gustoEmbedded, {
    employeeUuid: "<id>",
    effectiveYear: 152322,
    employeeSection603HighEarnerStatusUpdateRequest: {
      isHighEarner: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsPatchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear failed:", res.error);
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
  useEmployeeBenefitsPatchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearMutation
} from "@gusto/embedded-api/react-query/employeeBenefitsPatchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear.js";
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.PatchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearRequest](../../models/operations/patchv1employeesemployeeuuidsection603highearnerstatuseseffectiveyearrequest.md) | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `options`                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                     |
| `options.retries`                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                   |

### Response

**Promise\<[operations.PatchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearResponse](../../models/operations/patchv1employeesemployeeuuidsection603highearnerstatuseseffectiveyearresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 404, 422                              | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |