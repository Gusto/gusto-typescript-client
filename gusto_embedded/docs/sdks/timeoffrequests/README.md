# TimeOffRequests

## Overview

### Available Operations

* [postV1CompaniesCompanyUuidTimeOffAdminApprovedRequests](#postv1companiescompanyuuidtimeoffadminapprovedrequests) - Create an admin-approved time off request
* [getV1CompaniesCompanyUuidTimeOffBalances](#getv1companiescompanyuuidtimeoffbalances) - Get time off balances for a company
* [getV1CompaniesCompanyUuidTimeOffRequests](#getv1companiescompanyuuidtimeoffrequests) - List time off requests for a company
* [postV1CompaniesCompanyUuidTimeOffRequests](#postv1companiescompanyuuidtimeoffrequests) - Create a time off request
* [postV1CompaniesCompanyUuidTimeOffRequestsPreview](#postv1companiescompanyuuidtimeoffrequestspreview) - Preview a time off request
* [getV1TimeOffRequestsTimeOffRequestUuid](#getv1timeoffrequeststimeoffrequestuuid) - Get a time off request
* [deleteV1TimeOffRequestsTimeOffRequestUuid](#deletev1timeoffrequeststimeoffrequestuuid) - Delete a time off request
* [putV1TimeOffRequestsTimeOffRequestUuidApprove](#putv1timeoffrequeststimeoffrequestuuidapprove) - Approve a time off request
* [putV1TimeOffRequestsTimeOffRequestUuidDecline](#putv1timeoffrequeststimeoffrequestuuiddecline) - Decline a time off request

## postV1CompaniesCompanyUuidTimeOffAdminApprovedRequests

Create a pre-approved time off request on behalf of an employee (admin or system initiated).
The request is always created with approved status.

scope: `time_off_requests:manage`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_uuid-time_off-admin_approved_requests" method="post" path="/v1/companies/{company_uuid}/time_off/admin_approved_requests" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.timeOffRequests.postV1CompaniesCompanyUuidTimeOffAdminApprovedRequests({
    companyUuid: "<id>",
    requestBody: {
      employeeUuid: "<id>",
      policyUuid: "<id>",
      startDate: "<value>",
      endDate: "<value>",
      days: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
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
import { timeOffRequestsPostV1CompaniesCompanyUuidTimeOffAdminApprovedRequests } from "@gusto/embedded-api/funcs/timeOffRequestsPostV1CompaniesCompanyUuidTimeOffAdminApprovedRequests.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await timeOffRequestsPostV1CompaniesCompanyUuidTimeOffAdminApprovedRequests(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      employeeUuid: "<id>",
      policyUuid: "<id>",
      startDate: "<value>",
      endDate: "<value>",
      days: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("timeOffRequestsPostV1CompaniesCompanyUuidTimeOffAdminApprovedRequests failed:", res.error);
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
  useTimeOffRequestsPostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsMutation
} from "@gusto/embedded-api/react-query/timeOffRequestsPostV1CompaniesCompanyUuidTimeOffAdminApprovedRequests.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsRequest](../../models/operations/postv1companiescompanyuuidtimeoffadminapprovedrequestsrequest.md)           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsResponse](../../models/operations/postv1companiescompanyuuidtimeoffadminapprovedrequestsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getV1CompaniesCompanyUuidTimeOffBalances

Get time off balances for all employees in a company

scope: `time_off_requests:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_uuid-time_off-balances" method="get" path="/v1/companies/{company_uuid}/time_off/balances" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.timeOffRequests.getV1CompaniesCompanyUuidTimeOffBalances({
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
import { timeOffRequestsGetV1CompaniesCompanyUuidTimeOffBalances } from "@gusto/embedded-api/funcs/timeOffRequestsGetV1CompaniesCompanyUuidTimeOffBalances.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await timeOffRequestsGetV1CompaniesCompanyUuidTimeOffBalances(gustoEmbedded, {
    companyUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("timeOffRequestsGetV1CompaniesCompanyUuidTimeOffBalances failed:", res.error);
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
  useTimeOffRequestsGetV1CompaniesCompanyUuidTimeOffBalances,
  useTimeOffRequestsGetV1CompaniesCompanyUuidTimeOffBalancesSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchTimeOffRequestsGetV1CompaniesCompanyUuidTimeOffBalances,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateTimeOffRequestsGetV1CompaniesCompanyUuidTimeOffBalances,
  invalidateAllTimeOffRequestsGetV1CompaniesCompanyUuidTimeOffBalances,
} from "@gusto/embedded-api/react-query/timeOffRequestsGetV1CompaniesCompanyUuidTimeOffBalances.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyUuidTimeOffBalancesRequest](../../models/operations/getv1companiescompanyuuidtimeoffbalancesrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CompaniesCompanyUuidTimeOffBalancesResponse](../../models/operations/getv1companiescompanyuuidtimeoffbalancesresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getV1CompaniesCompanyUuidTimeOffRequests

Get all time off requests for a company. Supports filtering by status, employee, and date ranges.

Possible statuses:
- `pending` — awaiting approval
- `approved` — approved by an admin but not yet processed in a payroll
- `declined` — declined by an admin
- `consumed` — processed in a completed payroll

scope: `time_off_requests:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_uuid-time_off-requests" method="get" path="/v1/companies/{company_uuid}/time_off/requests" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.timeOffRequests.getV1CompaniesCompanyUuidTimeOffRequests({
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
import { timeOffRequestsGetV1CompaniesCompanyUuidTimeOffRequests } from "@gusto/embedded-api/funcs/timeOffRequestsGetV1CompaniesCompanyUuidTimeOffRequests.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await timeOffRequestsGetV1CompaniesCompanyUuidTimeOffRequests(gustoEmbedded, {
    companyUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("timeOffRequestsGetV1CompaniesCompanyUuidTimeOffRequests failed:", res.error);
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
  useTimeOffRequestsGetV1CompaniesCompanyUuidTimeOffRequests,
  useTimeOffRequestsGetV1CompaniesCompanyUuidTimeOffRequestsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchTimeOffRequestsGetV1CompaniesCompanyUuidTimeOffRequests,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateTimeOffRequestsGetV1CompaniesCompanyUuidTimeOffRequests,
  invalidateAllTimeOffRequestsGetV1CompaniesCompanyUuidTimeOffRequests,
} from "@gusto/embedded-api/react-query/timeOffRequestsGetV1CompaniesCompanyUuidTimeOffRequests.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyUuidTimeOffRequestsRequest](../../models/operations/getv1companiescompanyuuidtimeoffrequestsrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CompaniesCompanyUuidTimeOffRequestsResponse](../../models/operations/getv1companiescompanyuuidtimeoffrequestsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## postV1CompaniesCompanyUuidTimeOffRequests

Create a time off request for an employee

scope: `time_off_requests:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_uuid-time_off-requests" method="post" path="/v1/companies/{company_uuid}/time_off/requests" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.timeOffRequests.postV1CompaniesCompanyUuidTimeOffRequests({
    companyUuid: "<id>",
    requestBody: {
      employeeUuid: "<id>",
      policyUuid: "<id>",
      startDate: "<value>",
      endDate: "<value>",
      days: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
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
import { timeOffRequestsPostV1CompaniesCompanyUuidTimeOffRequests } from "@gusto/embedded-api/funcs/timeOffRequestsPostV1CompaniesCompanyUuidTimeOffRequests.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await timeOffRequestsPostV1CompaniesCompanyUuidTimeOffRequests(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      employeeUuid: "<id>",
      policyUuid: "<id>",
      startDate: "<value>",
      endDate: "<value>",
      days: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("timeOffRequestsPostV1CompaniesCompanyUuidTimeOffRequests failed:", res.error);
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
  useTimeOffRequestsPostV1CompaniesCompanyUuidTimeOffRequestsMutation
} from "@gusto/embedded-api/react-query/timeOffRequestsPostV1CompaniesCompanyUuidTimeOffRequests.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyUuidTimeOffRequestsRequest](../../models/operations/postv1companiescompanyuuidtimeoffrequestsrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1CompaniesCompanyUuidTimeOffRequestsResponse](../../models/operations/postv1companiescompanyuuidtimeoffrequestsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## postV1CompaniesCompanyUuidTimeOffRequestsPreview

Preview a time off request to see balance impact before creating

scope: `time_off_requests:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_uuid-time_off-requests-preview" method="post" path="/v1/companies/{company_uuid}/time_off/requests/preview" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.timeOffRequests.postV1CompaniesCompanyUuidTimeOffRequestsPreview({
    companyUuid: "<id>",
    requestBody: {
      employeeUuid: "<id>",
      policyUuid: "<id>",
      startDate: "<value>",
      endDate: "<value>",
      days: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
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
import { timeOffRequestsPostV1CompaniesCompanyUuidTimeOffRequestsPreview } from "@gusto/embedded-api/funcs/timeOffRequestsPostV1CompaniesCompanyUuidTimeOffRequestsPreview.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await timeOffRequestsPostV1CompaniesCompanyUuidTimeOffRequestsPreview(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      employeeUuid: "<id>",
      policyUuid: "<id>",
      startDate: "<value>",
      endDate: "<value>",
      days: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("timeOffRequestsPostV1CompaniesCompanyUuidTimeOffRequestsPreview failed:", res.error);
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
  useTimeOffRequestsPostV1CompaniesCompanyUuidTimeOffRequestsPreviewMutation
} from "@gusto/embedded-api/react-query/timeOffRequestsPostV1CompaniesCompanyUuidTimeOffRequestsPreview.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyUuidTimeOffRequestsPreviewRequest](../../models/operations/postv1companiescompanyuuidtimeoffrequestspreviewrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1CompaniesCompanyUuidTimeOffRequestsPreviewResponse](../../models/operations/postv1companiescompanyuuidtimeoffrequestspreviewresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getV1TimeOffRequestsTimeOffRequestUuid

Get a single time off request by UUID

scope: `time_off_requests:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-time_off-requests-time_off_request_uuid" method="get" path="/v1/time_off/requests/{time_off_request_uuid}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.timeOffRequests.getV1TimeOffRequestsTimeOffRequestUuid({
    timeOffRequestUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { timeOffRequestsGetV1TimeOffRequestsTimeOffRequestUuid } from "@gusto/embedded-api/funcs/timeOffRequestsGetV1TimeOffRequestsTimeOffRequestUuid.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await timeOffRequestsGetV1TimeOffRequestsTimeOffRequestUuid(gustoEmbedded, {
    timeOffRequestUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("timeOffRequestsGetV1TimeOffRequestsTimeOffRequestUuid failed:", res.error);
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
  useTimeOffRequestsGetV1TimeOffRequestsTimeOffRequestUuid,
  useTimeOffRequestsGetV1TimeOffRequestsTimeOffRequestUuidSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchTimeOffRequestsGetV1TimeOffRequestsTimeOffRequestUuid,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateTimeOffRequestsGetV1TimeOffRequestsTimeOffRequestUuid,
  invalidateAllTimeOffRequestsGetV1TimeOffRequestsTimeOffRequestUuid,
} from "@gusto/embedded-api/react-query/timeOffRequestsGetV1TimeOffRequestsTimeOffRequestUuid.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1TimeOffRequestsTimeOffRequestUuidRequest](../../models/operations/getv1timeoffrequeststimeoffrequestuuidrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1TimeOffRequestsTimeOffRequestUuidResponse](../../models/operations/getv1timeoffrequeststimeoffrequestuuidresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## deleteV1TimeOffRequestsTimeOffRequestUuid

Delete a time off request

scope: `time_off_requests:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-v1-time_off-requests-time_off_request_uuid" method="delete" path="/v1/time_off/requests/{time_off_request_uuid}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.timeOffRequests.deleteV1TimeOffRequestsTimeOffRequestUuid({
    timeOffRequestUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { timeOffRequestsDeleteV1TimeOffRequestsTimeOffRequestUuid } from "@gusto/embedded-api/funcs/timeOffRequestsDeleteV1TimeOffRequestsTimeOffRequestUuid.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await timeOffRequestsDeleteV1TimeOffRequestsTimeOffRequestUuid(gustoEmbedded, {
    timeOffRequestUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("timeOffRequestsDeleteV1TimeOffRequestsTimeOffRequestUuid failed:", res.error);
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
  useTimeOffRequestsDeleteV1TimeOffRequestsTimeOffRequestUuidMutation
} from "@gusto/embedded-api/react-query/timeOffRequestsDeleteV1TimeOffRequestsTimeOffRequestUuid.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1TimeOffRequestsTimeOffRequestUuidRequest](../../models/operations/deletev1timeoffrequeststimeoffrequestuuidrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1TimeOffRequestsTimeOffRequestUuidResponse](../../models/operations/deletev1timeoffrequeststimeoffrequestuuidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## putV1TimeOffRequestsTimeOffRequestUuidApprove

Approve a pending time off request. Optionally override the dates and hours.

Only requests with a `pending` status can be approved. Attempting to approve a request that has already been `declined` or `consumed` will fail with a 422 error.

scope: `time_off_requests:manage`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-time_off-requests-time_off_request_uuid-approve" method="put" path="/v1/time_off/requests/{time_off_request_uuid}/approve" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.timeOffRequests.putV1TimeOffRequestsTimeOffRequestUuidApprove({
    timeOffRequestUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { timeOffRequestsPutV1TimeOffRequestsTimeOffRequestUuidApprove } from "@gusto/embedded-api/funcs/timeOffRequestsPutV1TimeOffRequestsTimeOffRequestUuidApprove.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await timeOffRequestsPutV1TimeOffRequestsTimeOffRequestUuidApprove(gustoEmbedded, {
    timeOffRequestUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("timeOffRequestsPutV1TimeOffRequestsTimeOffRequestUuidApprove failed:", res.error);
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
  useTimeOffRequestsPutV1TimeOffRequestsTimeOffRequestUuidApproveMutation
} from "@gusto/embedded-api/react-query/timeOffRequestsPutV1TimeOffRequestsTimeOffRequestUuidApprove.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1TimeOffRequestsTimeOffRequestUuidApproveRequest](../../models/operations/putv1timeoffrequeststimeoffrequestuuidapproverequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1TimeOffRequestsTimeOffRequestUuidApproveResponse](../../models/operations/putv1timeoffrequeststimeoffrequestuuidapproveresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## putV1TimeOffRequestsTimeOffRequestUuidDecline

Decline a pending or approved time off request. Requires an employer_note.

scope: `time_off_requests:manage`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-time_off-requests-time_off_request_uuid-decline" method="put" path="/v1/time_off/requests/{time_off_request_uuid}/decline" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.timeOffRequests.putV1TimeOffRequestsTimeOffRequestUuidDecline({
    timeOffRequestUuid: "<id>",
    requestBody: {
      employerNote: "<value>",
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
import { timeOffRequestsPutV1TimeOffRequestsTimeOffRequestUuidDecline } from "@gusto/embedded-api/funcs/timeOffRequestsPutV1TimeOffRequestsTimeOffRequestUuidDecline.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await timeOffRequestsPutV1TimeOffRequestsTimeOffRequestUuidDecline(gustoEmbedded, {
    timeOffRequestUuid: "<id>",
    requestBody: {
      employerNote: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("timeOffRequestsPutV1TimeOffRequestsTimeOffRequestUuidDecline failed:", res.error);
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
  useTimeOffRequestsPutV1TimeOffRequestsTimeOffRequestUuidDeclineMutation
} from "@gusto/embedded-api/react-query/timeOffRequestsPutV1TimeOffRequestsTimeOffRequestUuidDecline.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1TimeOffRequestsTimeOffRequestUuidDeclineRequest](../../models/operations/putv1timeoffrequeststimeoffrequestuuiddeclinerequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1TimeOffRequestsTimeOffRequestUuidDeclineResponse](../../models/operations/putv1timeoffrequeststimeoffrequestuuiddeclineresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |