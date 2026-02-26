# Introspection

## Overview

### Available Operations

* [getInfo](#getinfo) - Get info about the current access token
* [oauthAccessToken](#oauthaccesstoken) - Create a System Access Token or Refresh an Access Token

## getInfo

Returns scope and resource information associated with the current access token.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-token-info" method="get" path="/v1/token_info" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.introspection.getInfo({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { introspectionGetInfo } from "@gusto/embedded-api-v2025-11-15/funcs/introspectionGetInfo.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await introspectionGetInfo(gustoEmbedded, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("introspectionGetInfo failed:", res.error);
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
  useIntrospectionGetInfo,
  useIntrospectionGetInfoSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchIntrospectionGetInfo,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateIntrospectionGetInfo,
  invalidateAllIntrospectionGetInfo,
} from "@gusto/embedded-api-v2025-11-15/react-query/introspectionGetInfo.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1TokenInfoRequest](../../models/operations/getv1tokeninforequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1TokenInfoResponse](../../models/operations/getv1tokeninforesponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## oauthAccessToken

Creates a system access token or refreshes an oauth access token

### Example Usage

<!-- UsageSnippet language="typescript" operationID="oauth-access-token" method="post" path="/oauth/token" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded();

async function run() {
  const result = await gustoEmbedded.introspection.oauthAccessToken({
    requestBody: {
      clientId: "qr6L_9FRkbMVL_GdwvrMW6Ef8tcU6NUxjWpOfqXqOG8",
      clientSecret: "3aQSHRB3596nZhm6NdNBELZ1u9xbZmvCrKpBhbZYq6w",
      grantType: "system_access",
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
import { introspectionOauthAccessToken } from "@gusto/embedded-api-v2025-11-15/funcs/introspectionOauthAccessToken.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore();

async function run() {
  const res = await introspectionOauthAccessToken(gustoEmbedded, {
    requestBody: {
      clientId: "qr6L_9FRkbMVL_GdwvrMW6Ef8tcU6NUxjWpOfqXqOG8",
      clientSecret: "3aQSHRB3596nZhm6NdNBELZ1u9xbZmvCrKpBhbZYq6w",
      grantType: "system_access",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("introspectionOauthAccessToken failed:", res.error);
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
  useIntrospectionOauthAccessTokenMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/introspectionOauthAccessToken.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OauthAccessTokenRequest](../../models/operations/oauthaccesstokenrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.OauthAccessTokenResponse](../../models/operations/oauthaccesstokenresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |