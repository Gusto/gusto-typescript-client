# Reimbursements

## Overview

### Available Operations

* [getV1EmployeesEmployeeIdRecurringReimbursements](#getv1employeesemployeeidrecurringreimbursements) - Get recurring reimbursements for an employee
* [postV1EmployeesEmployeeIdRecurringReimbursements](#postv1employeesemployeeidrecurringreimbursements) - Create a recurring reimbursement
* [getV1RecurringReimbursements](#getv1recurringreimbursements) - Get a recurring reimbursement
* [putV1RecurringReimbursements](#putv1recurringreimbursements) - Update a recurring reimbursement
* [deleteV1RecurringReimbursements](#deletev1recurringreimbursements) - Delete a recurring reimbursement

## getV1EmployeesEmployeeIdRecurringReimbursements

Get all active recurring reimbursements for an employee.

scope: `reimbursements:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-employees-employee_id-recurring_reimbursements" method="get" path="/v1/employees/{employee_id}/recurring_reimbursements" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reimbursements.getV1EmployeesEmployeeIdRecurringReimbursements({
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
import { reimbursementsGetV1EmployeesEmployeeIdRecurringReimbursements } from "@gusto/embedded-api/funcs/reimbursementsGetV1EmployeesEmployeeIdRecurringReimbursements.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reimbursementsGetV1EmployeesEmployeeIdRecurringReimbursements(gustoEmbedded, {
    employeeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reimbursementsGetV1EmployeesEmployeeIdRecurringReimbursements failed:", res.error);
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
  useReimbursementsGetV1EmployeesEmployeeIdRecurringReimbursements,
  useReimbursementsGetV1EmployeesEmployeeIdRecurringReimbursementsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchReimbursementsGetV1EmployeesEmployeeIdRecurringReimbursements,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateReimbursementsGetV1EmployeesEmployeeIdRecurringReimbursements,
  invalidateAllReimbursementsGetV1EmployeesEmployeeIdRecurringReimbursements,
} from "@gusto/embedded-api/react-query/reimbursementsGetV1EmployeesEmployeeIdRecurringReimbursements.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1EmployeesEmployeeIdRecurringReimbursementsRequest](../../models/operations/getv1employeesemployeeidrecurringreimbursementsrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1EmployeesEmployeeIdRecurringReimbursementsResponse](../../models/operations/getv1employeesemployeeidrecurringreimbursementsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## postV1EmployeesEmployeeIdRecurringReimbursements

Create a recurring reimbursement for an employee.

scope: `reimbursements:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-employees-employee_id-recurring_reimbursements" method="post" path="/v1/employees/{employee_id}/recurring_reimbursements" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reimbursements.postV1EmployeesEmployeeIdRecurringReimbursements({
    employeeId: "<id>",
    requestBody: {
      description: "as procrastinate produce provided gracefully huzzah likewise when",
      amount: 2610.77,
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
import { reimbursementsPostV1EmployeesEmployeeIdRecurringReimbursements } from "@gusto/embedded-api/funcs/reimbursementsPostV1EmployeesEmployeeIdRecurringReimbursements.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reimbursementsPostV1EmployeesEmployeeIdRecurringReimbursements(gustoEmbedded, {
    employeeId: "<id>",
    requestBody: {
      description: "as procrastinate produce provided gracefully huzzah likewise when",
      amount: 2610.77,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reimbursementsPostV1EmployeesEmployeeIdRecurringReimbursements failed:", res.error);
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
  useReimbursementsPostV1EmployeesEmployeeIdRecurringReimbursementsMutation
} from "@gusto/embedded-api/react-query/reimbursementsPostV1EmployeesEmployeeIdRecurringReimbursements.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1EmployeesEmployeeIdRecurringReimbursementsRequest](../../models/operations/postv1employeesemployeeidrecurringreimbursementsrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1EmployeesEmployeeIdRecurringReimbursementsResponse](../../models/operations/postv1employeesemployeeidrecurringreimbursementsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404, 422                   | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getV1RecurringReimbursements

Get a specific recurring reimbursement.

scope: `reimbursements:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-recurring_reimbursements" method="get" path="/v1/recurring_reimbursements/{id}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reimbursements.getV1RecurringReimbursements({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { reimbursementsGetV1RecurringReimbursements } from "@gusto/embedded-api/funcs/reimbursementsGetV1RecurringReimbursements.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reimbursementsGetV1RecurringReimbursements(gustoEmbedded, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reimbursementsGetV1RecurringReimbursements failed:", res.error);
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
  useReimbursementsGetV1RecurringReimbursements,
  useReimbursementsGetV1RecurringReimbursementsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchReimbursementsGetV1RecurringReimbursements,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateReimbursementsGetV1RecurringReimbursements,
  invalidateAllReimbursementsGetV1RecurringReimbursements,
} from "@gusto/embedded-api/react-query/reimbursementsGetV1RecurringReimbursements.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1RecurringReimbursementsRequest](../../models/operations/getv1recurringreimbursementsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1RecurringReimbursementsResponse](../../models/operations/getv1recurringreimbursementsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## putV1RecurringReimbursements

Update a recurring reimbursement.

scope: `reimbursements:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-recurring_reimbursements" method="put" path="/v1/recurring_reimbursements/{id}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reimbursements.putV1RecurringReimbursements({
    id: "<id>",
    requestBody: {
      version: "56d00c178bc7393b2a206ed6a86afcb4",
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
import { reimbursementsPutV1RecurringReimbursements } from "@gusto/embedded-api/funcs/reimbursementsPutV1RecurringReimbursements.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reimbursementsPutV1RecurringReimbursements(gustoEmbedded, {
    id: "<id>",
    requestBody: {
      version: "56d00c178bc7393b2a206ed6a86afcb4",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reimbursementsPutV1RecurringReimbursements failed:", res.error);
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
  useReimbursementsPutV1RecurringReimbursementsMutation
} from "@gusto/embedded-api/react-query/reimbursementsPutV1RecurringReimbursements.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1RecurringReimbursementsRequest](../../models/operations/putv1recurringreimbursementsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1RecurringReimbursementsResponse](../../models/operations/putv1recurringreimbursementsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404, 409, 422              | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## deleteV1RecurringReimbursements

Delete (soft delete) a recurring reimbursement for an employee.

scope: `reimbursements:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-v1-recurring_reimbursements" method="delete" path="/v1/recurring_reimbursements/{id}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reimbursements.deleteV1RecurringReimbursements({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { reimbursementsDeleteV1RecurringReimbursements } from "@gusto/embedded-api/funcs/reimbursementsDeleteV1RecurringReimbursements.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reimbursementsDeleteV1RecurringReimbursements(gustoEmbedded, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reimbursementsDeleteV1RecurringReimbursements failed:", res.error);
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
  useReimbursementsDeleteV1RecurringReimbursementsMutation
} from "@gusto/embedded-api/react-query/reimbursementsDeleteV1RecurringReimbursements.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1RecurringReimbursementsRequest](../../models/operations/deletev1recurringreimbursementsrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1RecurringReimbursementsResponse](../../models/operations/deletev1recurringreimbursementsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |