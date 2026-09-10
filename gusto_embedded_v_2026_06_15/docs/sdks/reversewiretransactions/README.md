# ReverseWireTransactions

## Overview

### Available Operations

* [getReverseWireTransactions](#getreversewiretransactions) - Get all reverse wire transactions for a company

## getReverseWireTransactions

Returns a paginated list of reverse wire (drawdown) transactions for a company. Reverse wires are debit transactions initiated by Gusto to pull funds from a partner's bank account to cover payroll or contractor payment obligations. Pagination is returned via the `x-page`, `x-per-page`, `x-total-count`, and `x-total-pages` response headers.

scope: `reverse_wire_transactions:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-reverse-wire-transactions" method="get" path="/v1/companies/{company_uuid}/reverse_wire_transactions" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v-2026-06-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reverseWireTransactions.getReverseWireTransactions({
    companyUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v-2026-06-15/core.js";
import { reverseWireTransactionsGetReverseWireTransactions } from "@gusto/embedded-api-v-2026-06-15/funcs/reverseWireTransactionsGetReverseWireTransactions.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reverseWireTransactionsGetReverseWireTransactions(gustoEmbedded, {
    companyUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reverseWireTransactionsGetReverseWireTransactions failed:", res.error);
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
  useReverseWireTransactionsGetReverseWireTransactions,
  useReverseWireTransactionsGetReverseWireTransactionsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchReverseWireTransactionsGetReverseWireTransactions,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateReverseWireTransactionsGetReverseWireTransactions,
  invalidateAllReverseWireTransactionsGetReverseWireTransactions,
} from "@gusto/embedded-api-v-2026-06-15/react-query/reverseWireTransactionsGetReverseWireTransactions.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetReverseWireTransactionsRequest](../../models/operations/getreversewiretransactionsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetReverseWireTransactionsResponse](../../models/operations/getreversewiretransactionsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |