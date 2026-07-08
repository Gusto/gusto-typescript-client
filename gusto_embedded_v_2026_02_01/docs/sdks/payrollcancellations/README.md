# PayrollCancellations

## Overview

### Available Operations

* [postV1PayrollBatches](#postv1payrollbatches) - Create a payroll cancellation batch
* [getV1PayrollBatchesPayrollBatchUuid](#getv1payrollbatchespayrollbatchuuid) - Get a payroll cancellation batch

## postV1PayrollBatches

Cancels up to 100 payrolls across one or more companies the partner is mapped to, asynchronously.

The batch is processed asynchronously. Use the returned batch UUID to poll `GET /v1/payroll_batches/{payroll_batch_uuid}` for status and per-payroll results.

Each item carries the payroll `uuid` and the `company_uuid` that owns it. A payroll whose company is not mapped to the partner — or that doesn't exist — is recorded as a `not_found` exclusion rather than a hard error, so every requested UUID lands in either `results` or `exclusions`.

Idempotency is scoped per `(partner, idempotency_key)`. A duplicate POST with the same `idempotency_key` returns a 409 Conflict referencing the existing batch UUID — no duplicate processing occurs.

📘 System Access Authentication

This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access)

scope: `payroll_batches:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-payroll_batches" method="post" path="/v1/payroll_batches" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v-2026-02-01";

const gustoEmbedded = new GustoEmbedded();

async function run() {
  const result = await gustoEmbedded.payrollCancellations.postV1PayrollBatches({
    systemAccessAuth: process.env["GUSTOEMBEDDED_SYSTEM_ACCESS_AUTH"] ?? "",
  }, {
    requestBody: {
      idempotencyKey: "80a74f8b-2c16-45e5-9038-aa108849c6e6",
      batchAction: "cancel",
      batch: [
        {
          entityType: "payroll",
          uuid: "f5ac6d4e-8400-4a52-a5cf-dea57b2ee65a",
          companyUuid: "7cd3f4a2-0bf9-485a-bbc0-f6adbdf0246b",
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
import { GustoEmbeddedCore } from "@gusto/embedded-api-v-2026-02-01/core.js";
import { payrollCancellationsPostV1PayrollBatches } from "@gusto/embedded-api-v-2026-02-01/funcs/payrollCancellationsPostV1PayrollBatches.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore();

async function run() {
  const res = await payrollCancellationsPostV1PayrollBatches(gustoEmbedded, {
    systemAccessAuth: process.env["GUSTOEMBEDDED_SYSTEM_ACCESS_AUTH"] ?? "",
  }, {
    requestBody: {
      idempotencyKey: "80a74f8b-2c16-45e5-9038-aa108849c6e6",
      batchAction: "cancel",
      batch: [
        {
          entityType: "payroll",
          uuid: "f5ac6d4e-8400-4a52-a5cf-dea57b2ee65a",
          companyUuid: "7cd3f4a2-0bf9-485a-bbc0-f6adbdf0246b",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payrollCancellationsPostV1PayrollBatches failed:", res.error);
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
  usePayrollCancellationsPostV1PayrollBatchesMutation
} from "@gusto/embedded-api-v-2026-02-01/react-query/payrollCancellationsPostV1PayrollBatches.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1PayrollBatchesRequest](../../models/operations/postv1payrollbatchesrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PostV1PayrollBatchesSecurity](../../models/operations/postv1payrollbatchessecurity.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1PayrollBatchesResponse](../../models/operations/postv1payrollbatchesresponse.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.PayrollBatchConflictError | 409                              | application/json                 |
| errors.UnprocessableEntityError  | 422                              | application/json                 |
| errors.APIError                  | 4XX, 5XX                         | \*/\*                            |

## getV1PayrollBatchesPayrollBatchUuid

Returns the status and per-payroll results of a payroll cancellation batch.

Poll this endpoint until the batch `status` reaches a terminal value (`completed` or `failed`). Once terminal, the response includes the `results` array (one entry per authorized payroll, each with its own per-payroll `status` — `success` or `failed`) and the `exclusions` array (one entry per payroll that could not be processed). A cancel is atomic, so a per-payroll result is only ever `success` or `failed` — never `partial_success`.

Note that the top-level batch `status` (`pending` / `processing` / `completed` / `failed`) is the request lifecycle, distinct from the per-payroll `status` inside `results[]`. A `completed` batch does not imply every payroll was cancelled — inspect the array for per-payroll outcomes.

Results are stored in Redis with a limited TTL after completion. If the partner polls after results have expired, this endpoint returns 410 Gone — partners should re-submit a new batch.

📘 System Access Authentication

This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access)

scope: `payroll_batches:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-payroll_batches-payroll_batch_uuid" method="get" path="/v1/payroll_batches/{payroll_batch_uuid}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v-2026-02-01";

const gustoEmbedded = new GustoEmbedded();

async function run() {
  const result = await gustoEmbedded.payrollCancellations.getV1PayrollBatchesPayrollBatchUuid({
    systemAccessAuth: process.env["GUSTOEMBEDDED_SYSTEM_ACCESS_AUTH"] ?? "",
  }, {
    payrollBatchUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v-2026-02-01/core.js";
import { payrollCancellationsGetV1PayrollBatchesPayrollBatchUuid } from "@gusto/embedded-api-v-2026-02-01/funcs/payrollCancellationsGetV1PayrollBatchesPayrollBatchUuid.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore();

async function run() {
  const res = await payrollCancellationsGetV1PayrollBatchesPayrollBatchUuid(gustoEmbedded, {
    systemAccessAuth: process.env["GUSTOEMBEDDED_SYSTEM_ACCESS_AUTH"] ?? "",
  }, {
    payrollBatchUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payrollCancellationsGetV1PayrollBatchesPayrollBatchUuid failed:", res.error);
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
  usePayrollCancellationsGetV1PayrollBatchesPayrollBatchUuid,
  usePayrollCancellationsGetV1PayrollBatchesPayrollBatchUuidSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchPayrollCancellationsGetV1PayrollBatchesPayrollBatchUuid,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidatePayrollCancellationsGetV1PayrollBatchesPayrollBatchUuid,
  invalidateAllPayrollCancellationsGetV1PayrollBatchesPayrollBatchUuid,
} from "@gusto/embedded-api-v-2026-02-01/react-query/payrollCancellationsGetV1PayrollBatchesPayrollBatchUuid.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1PayrollBatchesPayrollBatchUuidRequest](../../models/operations/getv1payrollbatchespayrollbatchuuidrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetV1PayrollBatchesPayrollBatchUuidSecurity](../../models/operations/getv1payrollbatchespayrollbatchuuidsecurity.md)                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1PayrollBatchesPayrollBatchUuidResponse](../../models/operations/getv1payrollbatchespayrollbatchuuidresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404, 410                   | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |