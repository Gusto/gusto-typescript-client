# HolidayPayPolicies

## Overview

### Available Operations

* [get](#get) - Get a company's holiday pay policy
* [create](#create) - Create a holiday pay policy for a company
* [update](#update) - Update a company's holiday pay policy
* [delete](#delete) - Delete a company's holiday pay policy
* [addEmployees](#addemployees) - Add employees to a company's holiday pay policy
* [removeEmployees](#removeemployees) - Remove employees from a company's holiday pay policy

## get

Get a company's holiday pay policy

scope: `holiday_pay_policies:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-companies-company_uuid-holiday_pay_policy" method="get" path="/v1/companies/{company_uuid}/holiday_pay_policy" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.holidayPayPolicies.get({
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
import { holidayPayPoliciesGet } from "@gusto/embedded-api/funcs/holidayPayPoliciesGet.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await holidayPayPoliciesGet(gustoEmbedded, {
    companyUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("holidayPayPoliciesGet failed:", res.error);
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
  useHolidayPayPoliciesGet,
  useHolidayPayPoliciesGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchHolidayPayPoliciesGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateHolidayPayPoliciesGet,
  invalidateAllHolidayPayPoliciesGet,
} from "@gusto/embedded-api/react-query/holidayPayPoliciesGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCompaniesCompanyUuidHolidayPayPolicyRequest](../../models/operations/getcompaniescompanyuuidholidaypaypolicyrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCompaniesCompanyUuidHolidayPayPolicyResponse](../../models/operations/getcompaniescompanyuuidholidaypaypolicyresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## create

Create a holiday pay policy for a company

scope: `holiday_pay_policies:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-companies-company_uuid-holiday_pay_policy" method="post" path="/v1/companies/{company_uuid}/holiday_pay_policy" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.holidayPayPolicies.create({
    companyUuid: "<id>",
    requestBody: {
      federalHolidays: {
        mlkDay: {
          selected: true,
        },
        memorialDay: {
          selected: true,
        },
        independenceDay: {
          selected: true,
        },
        veteransDay: {
          selected: true,
        },
        thanksgiving: {
          selected: true,
        },
        christmasDay: {
          selected: true,
        },
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
import { holidayPayPoliciesCreate } from "@gusto/embedded-api/funcs/holidayPayPoliciesCreate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await holidayPayPoliciesCreate(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      federalHolidays: {
        mlkDay: {
          selected: true,
        },
        memorialDay: {
          selected: true,
        },
        independenceDay: {
          selected: true,
        },
        veteransDay: {
          selected: true,
        },
        thanksgiving: {
          selected: true,
        },
        christmasDay: {
          selected: true,
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("holidayPayPoliciesCreate failed:", res.error);
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
  useHolidayPayPoliciesCreateMutation
} from "@gusto/embedded-api/react-query/holidayPayPoliciesCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostCompaniesCompanyUuidHolidayPayPolicyRequest](../../models/operations/postcompaniescompanyuuidholidaypaypolicyrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostCompaniesCompanyUuidHolidayPayPolicyResponse](../../models/operations/postcompaniescompanyuuidholidaypaypolicyresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## update

Update a company's holiday pay policy

scope: `holiday_pay_policies:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-companies-company_uuid-holiday_pay_policy" method="put" path="/v1/companies/{company_uuid}/holiday_pay_policy" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.holidayPayPolicies.update({
    companyUuid: "<id>",
    requestBody: {
      version: "1b37938b017c7fd7116bada007072290",
      federalHolidays: {
        mlkDay: {
          selected: true,
        },
        memorialDay: {
          selected: true,
        },
        independenceDay: {
          selected: true,
        },
        veteransDay: {
          selected: true,
        },
        thanksgiving: {
          selected: true,
        },
        christmasDay: {
          selected: true,
        },
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
import { holidayPayPoliciesUpdate } from "@gusto/embedded-api/funcs/holidayPayPoliciesUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await holidayPayPoliciesUpdate(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      version: "1b37938b017c7fd7116bada007072290",
      federalHolidays: {
        mlkDay: {
          selected: true,
        },
        memorialDay: {
          selected: true,
        },
        independenceDay: {
          selected: true,
        },
        veteransDay: {
          selected: true,
        },
        thanksgiving: {
          selected: true,
        },
        christmasDay: {
          selected: true,
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("holidayPayPoliciesUpdate failed:", res.error);
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
  useHolidayPayPoliciesUpdateMutation
} from "@gusto/embedded-api/react-query/holidayPayPoliciesUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutCompaniesCompanyUuidHolidayPayPolicyRequest](../../models/operations/putcompaniescompanyuuidholidaypaypolicyrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutCompaniesCompanyUuidHolidayPayPolicyResponse](../../models/operations/putcompaniescompanyuuidholidaypaypolicyresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## delete

Delete a company's holiday pay policy

scope: `holiday_pay_policies:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-companies-company_uuid-holiday_pay_policy" method="delete" path="/v1/companies/{company_uuid}/holiday_pay_policy" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.holidayPayPolicies.delete({
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
import { holidayPayPoliciesDelete } from "@gusto/embedded-api/funcs/holidayPayPoliciesDelete.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await holidayPayPoliciesDelete(gustoEmbedded, {
    companyUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("holidayPayPoliciesDelete failed:", res.error);
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
  useHolidayPayPoliciesDeleteMutation
} from "@gusto/embedded-api/react-query/holidayPayPoliciesDelete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteCompaniesCompanyUuidHolidayPayPolicyRequest](../../models/operations/deletecompaniescompanyuuidholidaypaypolicyrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteCompaniesCompanyUuidHolidayPayPolicyResponse](../../models/operations/deletecompaniescompanyuuidholidaypaypolicyresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## addEmployees

Add employees to a company's holiday pay policy

scope: `holiday_pay_policies:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-companies-company_uuid-holiday_pay_policy-add" method="put" path="/v1/companies/{company_uuid}/holiday_pay_policy/add" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.holidayPayPolicies.addEmployees({
    companyUuid: "<id>",
    requestBody: {
      version: "1b37938b017c7fd7116bada007072290",
      employees: [
        {
          uuid: "1ca3cd25-3eda-48c6-ac88-f0e7fb91a15a",
        },
        {
          uuid: "fe977550-6621-4cfc-b4af-60b6af58c8ef",
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
import { holidayPayPoliciesAddEmployees } from "@gusto/embedded-api/funcs/holidayPayPoliciesAddEmployees.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await holidayPayPoliciesAddEmployees(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      version: "1b37938b017c7fd7116bada007072290",
      employees: [
        {
          uuid: "1ca3cd25-3eda-48c6-ac88-f0e7fb91a15a",
        },
        {
          uuid: "fe977550-6621-4cfc-b4af-60b6af58c8ef",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("holidayPayPoliciesAddEmployees failed:", res.error);
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
  useHolidayPayPoliciesAddEmployeesMutation
} from "@gusto/embedded-api/react-query/holidayPayPoliciesAddEmployees.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutCompaniesCompanyUuidHolidayPayPolicyAddRequest](../../models/operations/putcompaniescompanyuuidholidaypaypolicyaddrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutCompaniesCompanyUuidHolidayPayPolicyAddResponse](../../models/operations/putcompaniescompanyuuidholidaypaypolicyaddresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## removeEmployees

Remove employees from a company's holiday pay policy

scope: `holiday_pay_policies:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-companies-company_uuid-holiday_pay_policy-remove" method="put" path="/v1/companies/{company_uuid}/holiday_pay_policy/remove" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.holidayPayPolicies.removeEmployees({
    companyUuid: "<id>",
    requestBody: {
      version: "1b37938b017c7fd7116bada007072290",
      employees: [
        {
          uuid: "1ca3cd25-3eda-48c6-ac88-f0e7fb91a15a",
        },
        {
          uuid: "fe977550-6621-4cfc-b4af-60b6af58c8ef",
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
import { holidayPayPoliciesRemoveEmployees } from "@gusto/embedded-api/funcs/holidayPayPoliciesRemoveEmployees.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await holidayPayPoliciesRemoveEmployees(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      version: "1b37938b017c7fd7116bada007072290",
      employees: [
        {
          uuid: "1ca3cd25-3eda-48c6-ac88-f0e7fb91a15a",
        },
        {
          uuid: "fe977550-6621-4cfc-b4af-60b6af58c8ef",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("holidayPayPoliciesRemoveEmployees failed:", res.error);
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
  useHolidayPayPoliciesRemoveEmployeesMutation
} from "@gusto/embedded-api/react-query/holidayPayPoliciesRemoveEmployees.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest](../../models/operations/putcompaniescompanyuuidholidaypaypolicyremoverequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutCompaniesCompanyUuidHolidayPayPolicyRemoveResponse](../../models/operations/putcompaniescompanyuuidholidaypaypolicyremoveresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |