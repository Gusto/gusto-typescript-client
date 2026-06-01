# PayrollDigests

## Overview

### Available Operations

* [postV1PayrollDigests](#postv1payrolldigests) - Create a payroll digest batch
* [getV1PayrollDigestsPayrollDigestUuid](#getv1payrolldigestspayrolldigestuuid) - Get a payroll digest batch

## postV1PayrollDigests

Triggers an asynchronous computation of payroll digest data (statuses, blockers, pay periods, totals) across up to 25 companies that the partner is mapped to.

The batch is processed asynchronously. Use the returned batch UUID to poll `GET /v1/payroll_digests/{payroll_digest_uuid}` for status and results.

Idempotency is scoped per `(partner, idempotency_key)`. A duplicate POST with the same `idempotency_key` returns a 409 Conflict referencing the existing batch UUID — no duplicate computation occurs.

📘 System Access Authentication

This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access)

scope: `payroll_digests:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-payroll_digests" method="post" path="/v1/payroll_digests" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v-2026-06-15";

const gustoEmbedded = new GustoEmbedded();

async function run() {
  const result = await gustoEmbedded.payrollDigests.postV1PayrollDigests({
    systemAccessAuth: process.env["GUSTOEMBEDDED_SYSTEM_ACCESS_AUTH"] ?? "",
  }, {
    requestBody: {
      idempotencyKey: "80a74f8b-2c16-45e5-9038-aa108849c6e6",
      batchAction: "create",
      batch: [],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v-2026-06-15/core.js";
import { payrollDigestsPostV1PayrollDigests } from "@gusto/embedded-api-v-2026-06-15/funcs/payrollDigestsPostV1PayrollDigests.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore();

async function run() {
  const res = await payrollDigestsPostV1PayrollDigests(gustoEmbedded, {
    systemAccessAuth: process.env["GUSTOEMBEDDED_SYSTEM_ACCESS_AUTH"] ?? "",
  }, {
    requestBody: {
      idempotencyKey: "80a74f8b-2c16-45e5-9038-aa108849c6e6",
      batchAction: "create",
      batch: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payrollDigestsPostV1PayrollDigests failed:", res.error);
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
  usePayrollDigestsPostV1PayrollDigestsMutation
} from "@gusto/embedded-api-v-2026-06-15/react-query/payrollDigestsPostV1PayrollDigests.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1PayrollDigestsRequest](../../models/operations/postv1payrolldigestsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PostV1PayrollDigestsSecurity](../../models/operations/postv1payrolldigestssecurity.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1PayrollDigestsResponse](../../models/operations/postv1payrolldigestsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PayrollDigestConflictError | 409                               | application/json                  |
| errors.UnprocessableEntityError   | 422                               | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## getV1PayrollDigestsPayrollDigestUuid

Returns the status and results of a payroll digest batch.

Poll this endpoint until the batch `status` reaches a terminal value (`completed` or `failed`). Once terminal, the response includes the full `results` array (one entry per attempted company, each with its own per-company `status` — `success`, `partial_success`, or `failed`) and the `exclusions` array (one entry per company that could not be looked up or processed).

Note that the top-level batch `status` (`pending` / `processing` / `completed` / `failed`) is distinct from the per-company `status` returned inside `results[]` and `exclusions[]`. A `completed` batch does not imply every company succeeded — inspect the arrays for per-company outcomes.

Results are stored in Redis with a short TTL after completion. If the partner polls after results have expired, this endpoint returns 410 Gone — partners should re-submit a new batch to fetch fresh data.

📘 System Access Authentication

This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access)

scope: `payroll_digests:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-payroll_digests-payroll_digest_uuid" method="get" path="/v1/payroll_digests/{payroll_digest_uuid}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v-2026-06-15";

const gustoEmbedded = new GustoEmbedded();

async function run() {
  const result = await gustoEmbedded.payrollDigests.getV1PayrollDigestsPayrollDigestUuid({
    systemAccessAuth: process.env["GUSTOEMBEDDED_SYSTEM_ACCESS_AUTH"] ?? "",
  }, {
    payrollDigestUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v-2026-06-15/core.js";
import { payrollDigestsGetV1PayrollDigestsPayrollDigestUuid } from "@gusto/embedded-api-v-2026-06-15/funcs/payrollDigestsGetV1PayrollDigestsPayrollDigestUuid.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore();

async function run() {
  const res = await payrollDigestsGetV1PayrollDigestsPayrollDigestUuid(gustoEmbedded, {
    systemAccessAuth: process.env["GUSTOEMBEDDED_SYSTEM_ACCESS_AUTH"] ?? "",
  }, {
    payrollDigestUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payrollDigestsGetV1PayrollDigestsPayrollDigestUuid failed:", res.error);
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
  usePayrollDigestsGetV1PayrollDigestsPayrollDigestUuid,
  usePayrollDigestsGetV1PayrollDigestsPayrollDigestUuidSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchPayrollDigestsGetV1PayrollDigestsPayrollDigestUuid,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidatePayrollDigestsGetV1PayrollDigestsPayrollDigestUuid,
  invalidateAllPayrollDigestsGetV1PayrollDigestsPayrollDigestUuid,
} from "@gusto/embedded-api-v-2026-06-15/react-query/payrollDigestsGetV1PayrollDigestsPayrollDigestUuid.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1PayrollDigestsPayrollDigestUuidRequest](../../models/operations/getv1payrolldigestspayrolldigestuuidrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetV1PayrollDigestsPayrollDigestUuidSecurity](../../models/operations/getv1payrolldigestspayrolldigestuuidsecurity.md)                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1PayrollDigestsPayrollDigestUuidResponse](../../models/operations/getv1payrolldigestspayrolldigestuuidresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404, 410                   | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |