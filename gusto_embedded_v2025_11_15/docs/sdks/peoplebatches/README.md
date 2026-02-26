# PeopleBatches

## Overview

### Available Operations

* [postV1CompaniesCompanyIdPeopleBatches](#postv1companiescompanyidpeoplebatches) - Create a people batch
* [getV1PeopleBatchesPeopleBatchUuid](#getv1peoplebatchespeoplebatchuuid) - Get a people batch

## postV1CompaniesCompanyIdPeopleBatches

Creates a batch for bulk employee creation.

The batch is processed asynchronously. Use the returned batch UUID to poll for status and results.

scope: `people_batches:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_id-people_batches" method="post" path="/v1/companies/{company_id}/people_batches" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.peopleBatches.postV1CompaniesCompanyIdPeopleBatches({
    companyId: "<id>",
    requestBody: {
      idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
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
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { peopleBatchesPostV1CompaniesCompanyIdPeopleBatches } from "@gusto/embedded-api-v2025-11-15/funcs/peopleBatchesPostV1CompaniesCompanyIdPeopleBatches.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await peopleBatchesPostV1CompaniesCompanyIdPeopleBatches(gustoEmbedded, {
    companyId: "<id>",
    requestBody: {
      idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
      batchAction: "create",
      batch: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("peopleBatchesPostV1CompaniesCompanyIdPeopleBatches failed:", res.error);
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
  usePeopleBatchesPostV1CompaniesCompanyIdPeopleBatchesMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/peopleBatchesPostV1CompaniesCompanyIdPeopleBatches.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyIdPeopleBatchesRequest](../../models/operations/postv1companiescompanyidpeoplebatchesrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1CompaniesCompanyIdPeopleBatchesResponse](../../models/operations/postv1companiescompanyidpeoplebatchesresponse.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.NotFoundErrorObject                               | 404                                                      | application/json                                         |
| errors.PostV1CompaniesCompanyIdPeopleBatchesResponseBody | 409                                                      | application/json                                         |
| errors.UnprocessableEntityErrorObject                    | 422                                                      | application/json                                         |
| errors.APIError                                          | 4XX, 5XX                                                 | \*/\*                                                    |

## getV1PeopleBatchesPeopleBatchUuid

Returns the status and results of a people batch.

Poll this endpoint to check the batch processing status and retrieve results.

scope: `people_batches:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-people_batches-people_batch_uuid" method="get" path="/v1/people_batches/{people_batch_uuid}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.peopleBatches.getV1PeopleBatchesPeopleBatchUuid({
    peopleBatchUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { peopleBatchesGetV1PeopleBatchesPeopleBatchUuid } from "@gusto/embedded-api-v2025-11-15/funcs/peopleBatchesGetV1PeopleBatchesPeopleBatchUuid.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await peopleBatchesGetV1PeopleBatchesPeopleBatchUuid(gustoEmbedded, {
    peopleBatchUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("peopleBatchesGetV1PeopleBatchesPeopleBatchUuid failed:", res.error);
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
  usePeopleBatchesGetV1PeopleBatchesPeopleBatchUuid,
  usePeopleBatchesGetV1PeopleBatchesPeopleBatchUuidSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchPeopleBatchesGetV1PeopleBatchesPeopleBatchUuid,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidatePeopleBatchesGetV1PeopleBatchesPeopleBatchUuid,
  invalidateAllPeopleBatchesGetV1PeopleBatchesPeopleBatchUuid,
} from "@gusto/embedded-api-v2025-11-15/react-query/peopleBatchesGetV1PeopleBatchesPeopleBatchUuid.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1PeopleBatchesPeopleBatchUuidRequest](../../models/operations/getv1peoplebatchespeoplebatchuuidrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1PeopleBatchesPeopleBatchUuidResponse](../../models/operations/getv1peoplebatchespeoplebatchuuidresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |