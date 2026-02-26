# CompanyBenefits

## Overview

### Available Operations

* [create](#create) - Create a company benefit
* [list](#list) - Get benefits for a company
* [get](#get) - Get a company benefit
* [update](#update) - Update a company benefit
* [delete](#delete) - Delete a company benefit
* [getAll](#getall) - Get all benefits supported by Gusto
* [getSupported](#getsupported) - Get a supported benefit by ID
* [getSummary](#getsummary) - Get company benefit summary by company benefit id.
* [getEmployeeBenefits](#getemployeebenefits) - Get all employee benefits for a company benefit
* [updateEmployeeBenefits](#updateemployeebenefits) - Bulk update employee benefits for a company benefit
* [getRequirements](#getrequirements) - Get benefit fields requirements by ID
* [getV1CompanyBenefitsCompanyBenefitIdContributionExclusions](#getv1companybenefitscompanybenefitidcontributionexclusions) - Get contribution exclusions for a company benefit
* [putV1CompanyBenefitsCompanyBenefitIdContributionExclusions](#putv1companybenefitscompanybenefitidcontributionexclusions) - Update contribution exclusions for a company benefit

## create

Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.

Note that company benefits can be deactivated only when no employees are enrolled.

When the application has the `company_benefits:write:benefit_type_limited` data scope, the application can only create company benefits for benefit types that are permitted for the application.

scope: `company_benefits:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_id-company_benefits" method="post" path="/v1/companies/{company_id}/company_benefits" example="Basic" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.create({
    companyId: "<id>",
    requestBody: {
      description: "hm pfft surge beyond",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsCreate } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsCreate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsCreate(gustoEmbedded, {
    companyId: "<id>",
    requestBody: {
      description: "hm pfft surge beyond",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsCreate failed:", res.error);
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
  useCompanyBenefitsCreateMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsCreate.js";
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_id-company_benefits" method="post" path="/v1/companies/{company_id}/company_benefits" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.create({
    companyId: "<id>",
    requestBody: {
      description: "hm pfft surge beyond",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsCreate } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsCreate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsCreate(gustoEmbedded, {
    companyId: "<id>",
    requestBody: {
      description: "hm pfft surge beyond",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsCreate failed:", res.error);
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
  useCompanyBenefitsCreateMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsCreate.js";
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_id-company_benefits" method="post" path="/v1/companies/{company_id}/company_benefits" example="Nested" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.create({
    companyId: "<id>",
    requestBody: {
      description: "hm pfft surge beyond",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsCreate } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsCreate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsCreate(gustoEmbedded, {
    companyId: "<id>",
    requestBody: {
      description: "hm pfft surge beyond",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsCreate failed:", res.error);
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
  useCompanyBenefitsCreateMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsCreate.js";
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_id-company_benefits" method="post" path="/v1/companies/{company_id}/company_benefits" example="Resource" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.create({
    companyId: "<id>",
    requestBody: {
      description: "hm pfft surge beyond",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsCreate } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsCreate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsCreate(gustoEmbedded, {
    companyId: "<id>",
    requestBody: {
      description: "hm pfft surge beyond",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsCreate failed:", res.error);
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
  useCompanyBenefitsCreateMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyIdCompanyBenefitsRequest](../../models/operations/postv1companiescompanyidcompanybenefitsrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1CompaniesCompanyIdCompanyBenefitsResponse](../../models/operations/postv1companiescompanyidcompanybenefitsresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## list

Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.

Note that company benefits can be deactivated only when no employees are enrolled.

Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.

scope: `company_benefits:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_id-company_benefits" method="get" path="/v1/companies/{company_id}/company_benefits" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.list({
    companyId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsList } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsList.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsList(gustoEmbedded, {
    companyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsList failed:", res.error);
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
  useCompanyBenefitsList,
  useCompanyBenefitsListSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchCompanyBenefitsList,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateCompanyBenefitsList,
  invalidateAllCompanyBenefitsList,
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest](../../models/operations/getv1companiescompanyidcompanybenefitsrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CompaniesCompanyIdCompanyBenefitsResponse](../../models/operations/getv1companiescompanyidcompanybenefitsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## get

Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.

Note that company benefits can be deactivated only when no employees are enrolled.

When with_employee_benefits parameter with true value is passed, employee_benefits:read scope is required to return employee_benefits.

scope: `company_benefits:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-company_benefits-company_benefit_id" method="get" path="/v1/company_benefits/{company_benefit_id}" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.get({
    companyBenefitId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsGet } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsGet.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsGet(gustoEmbedded, {
    companyBenefitId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsGet failed:", res.error);
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
  useCompanyBenefitsGet,
  useCompanyBenefitsGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchCompanyBenefitsGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateCompanyBenefitsGet,
  invalidateAllCompanyBenefitsGet,
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompanyBenefitsCompanyBenefitIdRequest](../../models/operations/getv1companybenefitscompanybenefitidrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CompanyBenefitsCompanyBenefitIdResponse](../../models/operations/getv1companybenefitscompanybenefitidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.

Note that company benefits can be deactivated only when no employees are enrolled.

When the application has the `company_benefits:write:benefit_type_limited` data scope, the application can only update company benefits for benefit types that are permitted for the application.

scope: `company_benefits:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="put-v1-company_benefits-company_benefit_id" method="put" path="/v1/company_benefits/{company_benefit_id}" example="Basic" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.update({
    companyBenefitId: "<id>",
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
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsUpdate } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsUpdate(gustoEmbedded, {
    companyBenefitId: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsUpdate failed:", res.error);
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
  useCompanyBenefitsUpdateMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsUpdate.js";
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="put-v1-company_benefits-company_benefit_id" method="put" path="/v1/company_benefits/{company_benefit_id}" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.update({
    companyBenefitId: "<id>",
    requestBody: {
      version: "98jr3289h3298hr9329gf9egskt3kagri32qqgiqe3872",
      active: false,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsUpdate } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsUpdate(gustoEmbedded, {
    companyBenefitId: "<id>",
    requestBody: {
      version: "98jr3289h3298hr9329gf9egskt3kagri32qqgiqe3872",
      active: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsUpdate failed:", res.error);
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
  useCompanyBenefitsUpdateMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsUpdate.js";
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="put-v1-company_benefits-company_benefit_id" method="put" path="/v1/company_benefits/{company_benefit_id}" example="Nested" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.update({
    companyBenefitId: "<id>",
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
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsUpdate } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsUpdate(gustoEmbedded, {
    companyBenefitId: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsUpdate failed:", res.error);
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
  useCompanyBenefitsUpdateMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsUpdate.js";
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="put-v1-company_benefits-company_benefit_id" method="put" path="/v1/company_benefits/{company_benefit_id}" example="Resource" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.update({
    companyBenefitId: "<id>",
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
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsUpdate } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsUpdate(gustoEmbedded, {
    companyBenefitId: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsUpdate failed:", res.error);
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
  useCompanyBenefitsUpdateMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1CompanyBenefitsCompanyBenefitIdRequest](../../models/operations/putv1companybenefitscompanybenefitidrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1CompanyBenefitsCompanyBenefitIdResponse](../../models/operations/putv1companybenefitscompanybenefitidresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## delete

The following must be true in order to delete a company benefit
  - There are no employee benefits associated with the company benefit
  - There are no payroll items associated with the company benefit
  - The benefit is not managed by a Partner or by Gusto (type must be 'External')

When the application has the `company_benefits:write:benefit_type_limited` data scope, the application can only delete company benefits for benefit types that are permitted for the application.

scope: `company_benefits:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-v1-company_benefits-company_benefit_id" method="delete" path="/v1/company_benefits/{company_benefit_id}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.delete({
    companyBenefitId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsDelete } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsDelete.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsDelete(gustoEmbedded, {
    companyBenefitId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsDelete failed:", res.error);
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
  useCompanyBenefitsDeleteMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsDelete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1CompanyBenefitsCompanyBenefitIdRequest](../../models/operations/deletev1companybenefitscompanybenefitidrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1CompanyBenefitsCompanyBenefitIdResponse](../../models/operations/deletev1companybenefitscompanybenefitidresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## getAll

Returns all benefits supported by Gusto.

The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.

scope: `benefits:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-benefits" method="get" path="/v1/benefits" example="Supported Benefits" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.getAll({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsGetAll } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsGetAll.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsGetAll(gustoEmbedded, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsGetAll failed:", res.error);
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
  useCompanyBenefitsGetAll,
  useCompanyBenefitsGetAllSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchCompanyBenefitsGetAll,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateCompanyBenefitsGetAll,
  invalidateAllCompanyBenefitsGetAll,
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsGetAll.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1BenefitsRequest](../../models/operations/getv1benefitsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1BenefitsResponse](../../models/operations/getv1benefitsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getSupported

Returns a benefit supported by Gusto.

The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.

scope: `benefits:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-benefits-benefit_id" method="get" path="/v1/benefits/{benefit_id}" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.getSupported({
    benefitId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsGetSupported } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsGetSupported.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsGetSupported(gustoEmbedded, {
    benefitId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsGetSupported failed:", res.error);
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
  useCompanyBenefitsGetSupported,
  useCompanyBenefitsGetSupportedSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchCompanyBenefitsGetSupported,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateCompanyBenefitsGetSupported,
  invalidateAllCompanyBenefitsGetSupported,
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsGetSupported.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1BenefitsBenefitIdRequest](../../models/operations/getv1benefitsbenefitidrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1BenefitsBenefitIdResponse](../../models/operations/getv1benefitsbenefitidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getSummary

Returns summary benefit data for the requested company benefit id.

Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.

scope: `company_benefits:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-benefits-company_benefit_id-summary" method="get" path="/v1/company_benefits/{company_benefit_id}/summary" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.getSummary({
    companyBenefitId: "<id>",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsGetSummary } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsGetSummary.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsGetSummary(gustoEmbedded, {
    companyBenefitId: "<id>",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsGetSummary failed:", res.error);
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
  useCompanyBenefitsGetSummary,
  useCompanyBenefitsGetSummarySuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchCompanyBenefitsGetSummary,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateCompanyBenefitsGetSummary,
  invalidateAllCompanyBenefitsGetSummary,
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsGetSummary.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1BenefitsCompanyBenefitIdSummaryRequest](../../models/operations/getv1benefitscompanybenefitidsummaryrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1BenefitsCompanyBenefitIdSummaryResponse](../../models/operations/getv1benefitscompanybenefitidsummaryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getEmployeeBenefits

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

Returns an array of all employee benefits enrolled for this company benefit.

Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.

scope: `employee_benefits:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-company_benefits-company_benefit_id-employee_benefits" method="get" path="/v1/company_benefits/{company_benefit_id}/employee_benefits" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.getEmployeeBenefits({
    companyBenefitId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsGetEmployeeBenefits } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsGetEmployeeBenefits.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsGetEmployeeBenefits(gustoEmbedded, {
    companyBenefitId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsGetEmployeeBenefits failed:", res.error);
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
  useCompanyBenefitsGetEmployeeBenefits,
  useCompanyBenefitsGetEmployeeBenefitsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchCompanyBenefitsGetEmployeeBenefits,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateCompanyBenefitsGetEmployeeBenefits,
  invalidateAllCompanyBenefitsGetEmployeeBenefits,
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsGetEmployeeBenefits.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest](../../models/operations/getv1companybenefitscompanybenefitidemployeebenefitsrequest.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse](../../models/operations/getv1companybenefitscompanybenefitidemployeebenefitsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateEmployeeBenefits

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee's enrollment.

Create or update(if the employee is already enrolled in the company benefit previously) an employee benefit for the company benefit.

Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.

When the application has the `employee_benefits:write:benefit_type_limited` data scope, the application can only create or update employee benefits for benefit types that are permitted for the application.

scope: `employee_benefits:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="put-v1-company_benefits-company_benefit_id-employee_benefits" method="put" path="/v1/company_benefits/{company_benefit_id}/employee_benefits" example="Basic" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.updateEmployeeBenefits({
    companyBenefitId: "<id>",
    requestBody: {
      employeeBenefits: [
        {
          employeeUuid: "<id>",
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
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsUpdateEmployeeBenefits } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsUpdateEmployeeBenefits.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsUpdateEmployeeBenefits(gustoEmbedded, {
    companyBenefitId: "<id>",
    requestBody: {
      employeeBenefits: [
        {
          employeeUuid: "<id>",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsUpdateEmployeeBenefits failed:", res.error);
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
  useCompanyBenefitsUpdateEmployeeBenefitsMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsUpdateEmployeeBenefits.js";
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="put-v1-company_benefits-company_benefit_id-employee_benefits" method="put" path="/v1/company_benefits/{company_benefit_id}/employee_benefits" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.updateEmployeeBenefits({
    companyBenefitId: "<id>",
    requestBody: {
      employeeBenefits: [
        {
          version: "09j3d29jqdpj92109j9j2d90dq",
          employeeDeduction: "250.00",
          employeeUuid: "8f9f3f68-8fd3-499d-ade7-4a052e56494e",
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
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsUpdateEmployeeBenefits } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsUpdateEmployeeBenefits.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsUpdateEmployeeBenefits(gustoEmbedded, {
    companyBenefitId: "<id>",
    requestBody: {
      employeeBenefits: [
        {
          version: "09j3d29jqdpj92109j9j2d90dq",
          employeeDeduction: "250.00",
          employeeUuid: "8f9f3f68-8fd3-499d-ade7-4a052e56494e",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsUpdateEmployeeBenefits failed:", res.error);
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
  useCompanyBenefitsUpdateEmployeeBenefitsMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsUpdateEmployeeBenefits.js";
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="put-v1-company_benefits-company_benefit_id-employee_benefits" method="put" path="/v1/company_benefits/{company_benefit_id}/employee_benefits" example="Nested" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.updateEmployeeBenefits({
    companyBenefitId: "<id>",
    requestBody: {
      employeeBenefits: [
        {
          employeeUuid: "<id>",
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
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsUpdateEmployeeBenefits } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsUpdateEmployeeBenefits.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsUpdateEmployeeBenefits(gustoEmbedded, {
    companyBenefitId: "<id>",
    requestBody: {
      employeeBenefits: [
        {
          employeeUuid: "<id>",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsUpdateEmployeeBenefits failed:", res.error);
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
  useCompanyBenefitsUpdateEmployeeBenefitsMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsUpdateEmployeeBenefits.js";
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="put-v1-company_benefits-company_benefit_id-employee_benefits" method="put" path="/v1/company_benefits/{company_benefit_id}/employee_benefits" example="Resource" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.updateEmployeeBenefits({
    companyBenefitId: "<id>",
    requestBody: {
      employeeBenefits: [
        {
          employeeUuid: "<id>",
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
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsUpdateEmployeeBenefits } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsUpdateEmployeeBenefits.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsUpdateEmployeeBenefits(gustoEmbedded, {
    companyBenefitId: "<id>",
    requestBody: {
      employeeBenefits: [
        {
          employeeUuid: "<id>",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsUpdateEmployeeBenefits failed:", res.error);
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
  useCompanyBenefitsUpdateEmployeeBenefitsMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsUpdateEmployeeBenefits.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest](../../models/operations/putv1companybenefitscompanybenefitidemployeebenefitsrequest.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse](../../models/operations/putv1companybenefitscompanybenefitidemployeebenefitsresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## getRequirements

Returns field requirements for the requested benefit type.

scope: `benefits:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-benefits-benefits_id-requirements" method="get" path="/v1/benefits/{benefit_id}/requirements" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.getRequirements({
    benefitId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsGetRequirements } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsGetRequirements.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsGetRequirements(gustoEmbedded, {
    benefitId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsGetRequirements failed:", res.error);
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
  useCompanyBenefitsGetRequirements,
  useCompanyBenefitsGetRequirementsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchCompanyBenefitsGetRequirements,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateCompanyBenefitsGetRequirements,
  invalidateAllCompanyBenefitsGetRequirements,
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsGetRequirements.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1BenefitsBenefitsIdRequirementsRequest](../../models/operations/getv1benefitsbenefitsidrequirementsrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1BenefitsBenefitsIdRequirementsResponse](../../models/operations/getv1benefitsbenefitsidrequirementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getV1CompanyBenefitsCompanyBenefitIdContributionExclusions

Returns all contributions for a given company benefit and whether they are excluded or not.

Currently this endpoint only works for 401-k and Roth 401-k benefit types.

scope: `company_benefits:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-company_benefits-company_benefit_id-contribution_exclusions" method="get" path="/v1/company_benefits/{company_benefit_id}/contribution_exclusions" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.getV1CompanyBenefitsCompanyBenefitIdContributionExclusions({
    companyBenefitId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsGetV1CompanyBenefitsCompanyBenefitIdContributionExclusions } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsGetV1CompanyBenefitsCompanyBenefitIdContributionExclusions.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsGetV1CompanyBenefitsCompanyBenefitIdContributionExclusions(gustoEmbedded, {
    companyBenefitId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsGetV1CompanyBenefitsCompanyBenefitIdContributionExclusions failed:", res.error);
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
  useCompanyBenefitsGetV1CompanyBenefitsCompanyBenefitIdContributionExclusions,
  useCompanyBenefitsGetV1CompanyBenefitsCompanyBenefitIdContributionExclusionsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchCompanyBenefitsGetV1CompanyBenefitsCompanyBenefitIdContributionExclusions,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateCompanyBenefitsGetV1CompanyBenefitsCompanyBenefitIdContributionExclusions,
  invalidateAllCompanyBenefitsGetV1CompanyBenefitsCompanyBenefitIdContributionExclusions,
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsGetV1CompanyBenefitsCompanyBenefitIdContributionExclusions.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest](../../models/operations/getv1companybenefitscompanybenefitidcontributionexclusionsrequest.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CompanyBenefitsCompanyBenefitIdContributionExclusionsResponse](../../models/operations/getv1companybenefitscompanybenefitidcontributionexclusionsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## putV1CompanyBenefitsCompanyBenefitIdContributionExclusions

Updates contribution exclusions for a given company benefit.

Currently this endpoint only works for 401-k and Roth 401-k benefit types.

scope: `company_benefits:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="put-v1-company_benefits-company_benefit_id-contribution_exclusions" method="put" path="/v1/company_benefits/{company_benefit_id}/contribution_exclusions" example="Basic" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.putV1CompanyBenefitsCompanyBenefitIdContributionExclusions({
    companyBenefitId: "<id>",
    requestBody: {
      contributionExclusions: [
        {
          contributionUuid: "<id>",
          contributionType: "<value>",
          excluded: true,
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
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions(gustoEmbedded, {
    companyBenefitId: "<id>",
    requestBody: {
      contributionExclusions: [
        {
          contributionUuid: "<id>",
          contributionType: "<value>",
          excluded: true,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions failed:", res.error);
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
  useCompanyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions.js";
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="put-v1-company_benefits-company_benefit_id-contribution_exclusions" method="put" path="/v1/company_benefits/{company_benefit_id}/contribution_exclusions" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.putV1CompanyBenefitsCompanyBenefitIdContributionExclusions({
    companyBenefitId: "<id>",
    requestBody: {
      contributionExclusions: [
        {
          contributionUuid: "082dfd3e-5b55-11f0-bb42-ab7136ba04e2",
          contributionType: "Bonus",
          excluded: true,
        },
        {
          contributionUuid: "082e034c-5b55-11f0-bb42-ab7136ba04e2",
          contributionType: "Commission",
          excluded: false,
        },
        {
          contributionUuid: "082e1f6c-5b55-11f0-bb42-ab7136ba04e2",
          contributionType: "Regular",
          excluded: true,
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
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions(gustoEmbedded, {
    companyBenefitId: "<id>",
    requestBody: {
      contributionExclusions: [
        {
          contributionUuid: "082dfd3e-5b55-11f0-bb42-ab7136ba04e2",
          contributionType: "Bonus",
          excluded: true,
        },
        {
          contributionUuid: "082e034c-5b55-11f0-bb42-ab7136ba04e2",
          contributionType: "Commission",
          excluded: false,
        },
        {
          contributionUuid: "082e1f6c-5b55-11f0-bb42-ab7136ba04e2",
          contributionType: "Regular",
          excluded: true,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions failed:", res.error);
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
  useCompanyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions.js";
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="put-v1-company_benefits-company_benefit_id-contribution_exclusions" method="put" path="/v1/company_benefits/{company_benefit_id}/contribution_exclusions" example="Nested" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.putV1CompanyBenefitsCompanyBenefitIdContributionExclusions({
    companyBenefitId: "<id>",
    requestBody: {
      contributionExclusions: [
        {
          contributionUuid: "<id>",
          contributionType: "<value>",
          excluded: true,
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
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions(gustoEmbedded, {
    companyBenefitId: "<id>",
    requestBody: {
      contributionExclusions: [
        {
          contributionUuid: "<id>",
          contributionType: "<value>",
          excluded: true,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions failed:", res.error);
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
  useCompanyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions.js";
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="put-v1-company_benefits-company_benefit_id-contribution_exclusions" method="put" path="/v1/company_benefits/{company_benefit_id}/contribution_exclusions" example="Resource" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyBenefits.putV1CompanyBenefitsCompanyBenefitIdContributionExclusions({
    companyBenefitId: "<id>",
    requestBody: {
      contributionExclusions: [
        {
          contributionUuid: "<id>",
          contributionType: "<value>",
          excluded: true,
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
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions } from "@gusto/embedded-api-v2025-11-15/funcs/companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions(gustoEmbedded, {
    companyBenefitId: "<id>",
    requestBody: {
      contributionExclusions: [
        {
          contributionUuid: "<id>",
          contributionType: "<value>",
          excluded: true,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions failed:", res.error);
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
  useCompanyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest](../../models/operations/putv1companybenefitscompanybenefitidcontributionexclusionsrequest.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsResponse](../../models/operations/putv1companybenefitscompanybenefitidcontributionexclusionsresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |