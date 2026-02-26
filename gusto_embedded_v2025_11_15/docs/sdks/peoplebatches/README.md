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
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.peopleBatches.postV1CompaniesCompanyIdPeopleBatches({
    companyId: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { peopleBatchesPostV1CompaniesCompanyIdPeopleBatches } from "openapi/funcs/people-batches-post-v1-companies-company-id-people-batches.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await peopleBatchesPostV1CompaniesCompanyIdPeopleBatches(sdk, {
    companyId: "<id>",
    body: {
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyIdPeopleBatchesRequest](../../models/operations/post-v1-companies-company-id-people-batches-request.md)                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1CompaniesCompanyIdPeopleBatchesResponse](../../models/operations/post-v1-companies-company-id-people-batches-response.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.ConflictError                  | 409                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## getV1PeopleBatchesPeopleBatchUuid

Returns the status and results of a people batch.

Poll this endpoint to check the batch processing status and retrieve results.

scope: `people_batches:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-people_batches-people_batch_uuid" method="get" path="/v1/people_batches/{people_batch_uuid}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.peopleBatches.getV1PeopleBatchesPeopleBatchUuid({
    peopleBatchUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { peopleBatchesGetV1PeopleBatchesPeopleBatchUuid } from "openapi/funcs/people-batches-get-v1-people-batches-people-batch-uuid.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await peopleBatchesGetV1PeopleBatchesPeopleBatchUuid(sdk, {
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1PeopleBatchesPeopleBatchUuidRequest](../../models/operations/get-v1-people-batches-people-batch-uuid-request.md)                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1PeopleBatchesPeopleBatchUuidResponse](../../models/operations/get-v1-people-batches-people-batch-uuid-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |