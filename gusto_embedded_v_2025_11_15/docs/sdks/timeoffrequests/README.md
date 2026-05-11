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
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.timeOffRequests.postV1CompaniesCompanyUuidTimeOffAdminApprovedRequests({
    companyUuid: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { timeOffRequestsPostV1CompaniesCompanyUuidTimeOffAdminApprovedRequests } from "openapi/funcs/time-off-requests-post-v1-companies-company-uuid-time-off-admin-approved-requests.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await timeOffRequestsPostV1CompaniesCompanyUuidTimeOffAdminApprovedRequests(sdk, {
    companyUuid: "<id>",
    body: {
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsRequest](../../models/operations/post-v1-companies-company-uuid-time-off-admin-approved-requests-request.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmbeddedTimeOffRequest](../../models/embedded-time-off-request.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getV1CompaniesCompanyUuidTimeOffBalances

Get time off balances for all employees in a company

scope: `time_off_requests:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_uuid-time_off-balances" method="get" path="/v1/companies/{company_uuid}/time_off/balances" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.timeOffRequests.getV1CompaniesCompanyUuidTimeOffBalances({
    companyUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { timeOffRequestsGetV1CompaniesCompanyUuidTimeOffBalances } from "openapi/funcs/time-off-requests-get-v1-companies-company-uuid-time-off-balances.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await timeOffRequestsGetV1CompaniesCompanyUuidTimeOffBalances(sdk, {
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyUuidTimeOffBalancesRequest](../../models/operations/get-v1-companies-company-uuid-time-off-balances-request.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmbeddedTimeOffBalance[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getV1CompaniesCompanyUuidTimeOffRequests

Get all time off requests for a company. Supports filtering by status, employee, and date ranges.

Possible statuses:
- `pending` — awaiting approval
- `approved` — approved by an admin but not yet processed in a payroll
- `declined` — declined by an admin
- `consumed` — processed in a completed payroll

Allowed values for `status`: pending, approved, declined, consumed.

scope: `time_off_requests:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_uuid-time_off-requests" method="get" path="/v1/companies/{company_uuid}/time_off/requests" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.timeOffRequests.getV1CompaniesCompanyUuidTimeOffRequests({
    companyUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { timeOffRequestsGetV1CompaniesCompanyUuidTimeOffRequests } from "openapi/funcs/time-off-requests-get-v1-companies-company-uuid-time-off-requests.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await timeOffRequestsGetV1CompaniesCompanyUuidTimeOffRequests(sdk, {
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyUuidTimeOffRequestsRequest](../../models/operations/get-v1-companies-company-uuid-time-off-requests-request.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmbeddedTimeOffRequest[]](../../models/.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.SDKDefaultError          | 4XX, 5XX                        | \*/\*                           |

## postV1CompaniesCompanyUuidTimeOffRequests

Create a time off request for an employee

scope: `time_off_requests:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_uuid-time_off-requests" method="post" path="/v1/companies/{company_uuid}/time_off/requests" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.timeOffRequests.postV1CompaniesCompanyUuidTimeOffRequests({
    companyUuid: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { timeOffRequestsPostV1CompaniesCompanyUuidTimeOffRequests } from "openapi/funcs/time-off-requests-post-v1-companies-company-uuid-time-off-requests.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await timeOffRequestsPostV1CompaniesCompanyUuidTimeOffRequests(sdk, {
    companyUuid: "<id>",
    body: {
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyUuidTimeOffRequestsRequest](../../models/operations/post-v1-companies-company-uuid-time-off-requests-request.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmbeddedTimeOffRequest](../../models/embedded-time-off-request.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## postV1CompaniesCompanyUuidTimeOffRequestsPreview

Preview a time off request to see balance impact before creating

scope: `time_off_requests:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_uuid-time_off-requests-preview" method="post" path="/v1/companies/{company_uuid}/time_off/requests/preview" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.timeOffRequests.postV1CompaniesCompanyUuidTimeOffRequestsPreview({
    companyUuid: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { timeOffRequestsPostV1CompaniesCompanyUuidTimeOffRequestsPreview } from "openapi/funcs/time-off-requests-post-v1-companies-company-uuid-time-off-requests-preview.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await timeOffRequestsPostV1CompaniesCompanyUuidTimeOffRequestsPreview(sdk, {
    companyUuid: "<id>",
    body: {
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyUuidTimeOffRequestsPreviewRequest](../../models/operations/post-v1-companies-company-uuid-time-off-requests-preview-request.md)              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmbeddedTimeOffRequestPreview](../../models/embedded-time-off-request-preview.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getV1TimeOffRequestsTimeOffRequestUuid

Get a single time off request by UUID

scope: `time_off_requests:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-time_off-requests-time_off_request_uuid" method="get" path="/v1/time_off/requests/{time_off_request_uuid}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.timeOffRequests.getV1TimeOffRequestsTimeOffRequestUuid({
    timeOffRequestUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { timeOffRequestsGetV1TimeOffRequestsTimeOffRequestUuid } from "openapi/funcs/time-off-requests-get-v1-time-off-requests-time-off-request-uuid.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await timeOffRequestsGetV1TimeOffRequestsTimeOffRequestUuid(sdk, {
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1TimeOffRequestsTimeOffRequestUuidRequest](../../models/operations/get-v1-time-off-requests-time-off-request-uuid-request.md)                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmbeddedTimeOffRequest](../../models/embedded-time-off-request.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## deleteV1TimeOffRequestsTimeOffRequestUuid

Delete a time off request

scope: `time_off_requests:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-v1-time_off-requests-time_off_request_uuid" method="delete" path="/v1/time_off/requests/{time_off_request_uuid}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await sdk.timeOffRequests.deleteV1TimeOffRequestsTimeOffRequestUuid({
    timeOffRequestUuid: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { timeOffRequestsDeleteV1TimeOffRequestsTimeOffRequestUuid } from "openapi/funcs/time-off-requests-delete-v1-time-off-requests-time-off-request-uuid.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await timeOffRequestsDeleteV1TimeOffRequestsTimeOffRequestUuid(sdk, {
    timeOffRequestUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("timeOffRequestsDeleteV1TimeOffRequestsTimeOffRequestUuid failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1TimeOffRequestsTimeOffRequestUuidRequest](../../models/operations/delete-v1-time-off-requests-time-off-request-uuid-request.md)                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## putV1TimeOffRequestsTimeOffRequestUuidApprove

Approve a pending time off request. Optionally override the dates and hours.

Only requests with a `pending` status can be approved. Attempting to approve a request that has already been `declined` or `consumed` will fail with a 422 error.

scope: `time_off_requests:manage`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-time_off-requests-time_off_request_uuid-approve" method="put" path="/v1/time_off/requests/{time_off_request_uuid}/approve" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.timeOffRequests.putV1TimeOffRequestsTimeOffRequestUuidApprove({
    timeOffRequestUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { timeOffRequestsPutV1TimeOffRequestsTimeOffRequestUuidApprove } from "openapi/funcs/time-off-requests-put-v1-time-off-requests-time-off-request-uuid-approve.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await timeOffRequestsPutV1TimeOffRequestsTimeOffRequestUuidApprove(sdk, {
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1TimeOffRequestsTimeOffRequestUuidApproveRequest](../../models/operations/put-v1-time-off-requests-time-off-request-uuid-approve-request.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmbeddedTimeOffRequest](../../models/embedded-time-off-request.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.SDKDefaultError          | 4XX, 5XX                        | \*/\*                           |

## putV1TimeOffRequestsTimeOffRequestUuidDecline

Decline a pending or approved time off request. Requires an employer_note.

scope: `time_off_requests:manage`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-time_off-requests-time_off_request_uuid-decline" method="put" path="/v1/time_off/requests/{time_off_request_uuid}/decline" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.timeOffRequests.putV1TimeOffRequestsTimeOffRequestUuidDecline({
    timeOffRequestUuid: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { timeOffRequestsPutV1TimeOffRequestsTimeOffRequestUuidDecline } from "openapi/funcs/time-off-requests-put-v1-time-off-requests-time-off-request-uuid-decline.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await timeOffRequestsPutV1TimeOffRequestsTimeOffRequestUuidDecline(sdk, {
    timeOffRequestUuid: "<id>",
    body: {
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1TimeOffRequestsTimeOffRequestUuidDeclineRequest](../../models/operations/put-v1-time-off-requests-time-off-request-uuid-decline-request.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmbeddedTimeOffRequest](../../models/embedded-time-off-request.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.SDKDefaultError          | 4XX, 5XX                        | \*/\*                           |