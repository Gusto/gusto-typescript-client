# Companies.Suspensions

## Overview

### Available Operations

* [get](#get) - Get suspensions for this company
* [suspend](#suspend) - Suspend a company's account

## get

Get existing suspension records for this company. A company may have multiple suspension records if they have suspended their Gusto account more than once.

>📘 To check if company is already suspended
>
> To determine if a company is _currently_ suspended, use the `is_suspended` and `company_status` fields in the [Get a company](https://docs.gusto.com/embedded-payroll/reference/get-v1-companies) endpoint.

scope: `company_suspensions:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-companies-company_uuid-suspensions" method="get" path="/v1/companies/{company_uuid}/suspensions" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companies.suspensions.get({
    companyUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { companiesSuspensionsGet } from "@gusto/embedded-api/funcs/companiesSuspensionsGet.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companiesSuspensionsGet(gustoEmbedded, {
    companyUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesSuspensionsGet failed:", res.error);
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
  useCompaniesSuspensionsGet,
  useCompaniesSuspensionsGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchCompaniesSuspensionsGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateCompaniesSuspensionsGet,
  invalidateAllCompaniesSuspensionsGet,
} from "@gusto/embedded-api/react-query/companiesSuspensionsGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCompaniesCompanyUuidSuspensionsRequest](../../models/operations/getcompaniescompanyuuidsuspensionsrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCompaniesCompanyUuidSuspensionsResponse](../../models/operations/getcompaniescompanyuuidsuspensionsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## suspend

Use this endpoint to suspend a company. After suspension, company will no longer be able to run payroll but will retain access to their information, such as retrieving employee info or retrieving past payrolls.

scope: `company_suspensions:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="post-companies-company_uuid-suspensions" method="post" path="/v1/companies/{company_uuid}/suspensions" example="Basic" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companies.suspensions.suspend({
    companyUuid: "<id>",
    requestBody: {
      fileQuarterlyForms: false,
      fileYearlyForms: true,
      reconcileTaxMethod: "pay_taxes",
      reason: "switching_provider",
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
import { companiesSuspensionsSuspend } from "@gusto/embedded-api/funcs/companiesSuspensionsSuspend.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companiesSuspensionsSuspend(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      fileQuarterlyForms: false,
      fileYearlyForms: true,
      reconcileTaxMethod: "pay_taxes",
      reason: "switching_provider",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesSuspensionsSuspend failed:", res.error);
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
  useCompaniesSuspensionsSuspendMutation
} from "@gusto/embedded-api/react-query/companiesSuspensionsSuspend.js";
```
### Example Usage: Company is shutting down

<!-- UsageSnippet language="typescript" operationID="post-companies-company_uuid-suspensions" method="post" path="/v1/companies/{company_uuid}/suspensions" example="Company is shutting down" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companies.suspensions.suspend({
    companyUuid: "<id>",
    requestBody: {
      fileQuarterlyForms: true,
      fileYearlyForms: true,
      reconcileTaxMethod: "pay_taxes",
      reason: "shutting_down",
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
import { companiesSuspensionsSuspend } from "@gusto/embedded-api/funcs/companiesSuspensionsSuspend.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companiesSuspensionsSuspend(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      fileQuarterlyForms: true,
      fileYearlyForms: true,
      reconcileTaxMethod: "pay_taxes",
      reason: "shutting_down",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesSuspensionsSuspend failed:", res.error);
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
  useCompaniesSuspensionsSuspendMutation
} from "@gusto/embedded-api/react-query/companiesSuspensionsSuspend.js";
```
### Example Usage: Leaving to join another payroll provider

<!-- UsageSnippet language="typescript" operationID="post-companies-company_uuid-suspensions" method="post" path="/v1/companies/{company_uuid}/suspensions" example="Leaving to join another payroll provider" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companies.suspensions.suspend({
    companyUuid: "<id>",
    requestBody: {
      fileQuarterlyForms: true,
      fileYearlyForms: true,
      reconcileTaxMethod: "pay_taxes",
      reason: "switching_provider",
      leavingFor: "other",
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
import { companiesSuspensionsSuspend } from "@gusto/embedded-api/funcs/companiesSuspensionsSuspend.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companiesSuspensionsSuspend(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      fileQuarterlyForms: true,
      fileYearlyForms: true,
      reconcileTaxMethod: "pay_taxes",
      reason: "switching_provider",
      leavingFor: "other",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesSuspensionsSuspend failed:", res.error);
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
  useCompaniesSuspensionsSuspendMutation
} from "@gusto/embedded-api/react-query/companiesSuspensionsSuspend.js";
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="post-companies-company_uuid-suspensions" method="post" path="/v1/companies/{company_uuid}/suspensions" example="Nested" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companies.suspensions.suspend({
    companyUuid: "<id>",
    requestBody: {
      fileQuarterlyForms: false,
      fileYearlyForms: true,
      reconcileTaxMethod: "pay_taxes",
      reason: "switching_provider",
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
import { companiesSuspensionsSuspend } from "@gusto/embedded-api/funcs/companiesSuspensionsSuspend.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companiesSuspensionsSuspend(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      fileQuarterlyForms: false,
      fileYearlyForms: true,
      reconcileTaxMethod: "pay_taxes",
      reason: "switching_provider",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesSuspensionsSuspend failed:", res.error);
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
  useCompaniesSuspensionsSuspendMutation
} from "@gusto/embedded-api/react-query/companiesSuspensionsSuspend.js";
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="post-companies-company_uuid-suspensions" method="post" path="/v1/companies/{company_uuid}/suspensions" example="Resource" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companies.suspensions.suspend({
    companyUuid: "<id>",
    requestBody: {
      fileQuarterlyForms: false,
      fileYearlyForms: true,
      reconcileTaxMethod: "pay_taxes",
      reason: "switching_provider",
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
import { companiesSuspensionsSuspend } from "@gusto/embedded-api/funcs/companiesSuspensionsSuspend.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companiesSuspensionsSuspend(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      fileQuarterlyForms: false,
      fileYearlyForms: true,
      reconcileTaxMethod: "pay_taxes",
      reason: "switching_provider",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesSuspensionsSuspend failed:", res.error);
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
  useCompaniesSuspensionsSuspendMutation
} from "@gusto/embedded-api/react-query/companiesSuspensionsSuspend.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostCompaniesCompanyUuidSuspensionsRequest](../../models/operations/postcompaniescompanyuuidsuspensionsrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostCompaniesCompanyUuidSuspensionsResponse](../../models/operations/postcompaniescompanyuuidsuspensionsresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.CompanySuspensionCreationErrors | 422                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |