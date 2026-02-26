# ContractorPaymentMethod

## Overview

### Available Operations

* [getBankAccounts](#getbankaccounts) - Get all contractor bank accounts
* [get](#get) - Get a contractor's payment method
* [update](#update) - Update a contractor's payment method

## getBankAccounts

Returns all contractor bank accounts.

scope: `contractor_payment_methods:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-contractors-contractor_uuid-bank_accounts" method="get" path="/v1/contractors/{contractor_uuid}/bank_accounts" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.contractorPaymentMethod.getBankAccounts({
    contractorUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { contractorPaymentMethodGetBankAccounts } from "@gusto/embedded-api-v2025-11-15/funcs/contractorPaymentMethodGetBankAccounts.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await contractorPaymentMethodGetBankAccounts(gustoEmbedded, {
    contractorUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contractorPaymentMethodGetBankAccounts failed:", res.error);
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
  useContractorPaymentMethodGetBankAccounts,
  useContractorPaymentMethodGetBankAccountsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchContractorPaymentMethodGetBankAccounts,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateContractorPaymentMethodGetBankAccounts,
  invalidateAllContractorPaymentMethodGetBankAccounts,
} from "@gusto/embedded-api-v2025-11-15/react-query/contractorPaymentMethodGetBankAccounts.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1ContractorsContractorUuidBankAccountsRequest](../../models/operations/getv1contractorscontractoruuidbankaccountsrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1ContractorsContractorUuidBankAccountsResponse](../../models/operations/getv1contractorscontractoruuidbankaccountsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## get

Fetches a contractor's payment method. A contractor payment method
describes how the payment should be split across the contractor's associated
bank accounts.

scope: `contractor_payment_methods:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-contractors-contractor_uuid-payment_method" method="get" path="/v1/contractors/{contractor_uuid}/payment_method" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.contractorPaymentMethod.get({
    contractorUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { contractorPaymentMethodGet } from "@gusto/embedded-api-v2025-11-15/funcs/contractorPaymentMethodGet.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await contractorPaymentMethodGet(gustoEmbedded, {
    contractorUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contractorPaymentMethodGet failed:", res.error);
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
  useContractorPaymentMethodGet,
  useContractorPaymentMethodGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchContractorPaymentMethodGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateContractorPaymentMethodGet,
  invalidateAllContractorPaymentMethodGet,
} from "@gusto/embedded-api-v2025-11-15/react-query/contractorPaymentMethodGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1ContractorsContractorUuidPaymentMethodRequest](../../models/operations/getv1contractorscontractoruuidpaymentmethodrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1ContractorsContractorUuidPaymentMethodResponse](../../models/operations/getv1contractorscontractoruuidpaymentmethodresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Updates a contractor's payment method. Note that creating a contractor
bank account will also update the contractor's payment method.

scope: `contractor_payment_methods:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="put-v1-contractors-contractor_id-payment_method" method="put" path="/v1/contractors/{contractor_uuid}/payment_method" example="Basic" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.contractorPaymentMethod.update({
    contractorUuid: "<id>",
    requestBody: {
      version: "56d00c178bc7393b2a206ed6a86afcb4",
      type: "Direct Deposit",
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
import { contractorPaymentMethodUpdate } from "@gusto/embedded-api-v2025-11-15/funcs/contractorPaymentMethodUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await contractorPaymentMethodUpdate(gustoEmbedded, {
    contractorUuid: "<id>",
    requestBody: {
      version: "56d00c178bc7393b2a206ed6a86afcb4",
      type: "Direct Deposit",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contractorPaymentMethodUpdate failed:", res.error);
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
  useContractorPaymentMethodUpdateMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/contractorPaymentMethodUpdate.js";
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="put-v1-contractors-contractor_id-payment_method" method="put" path="/v1/contractors/{contractor_uuid}/payment_method" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.contractorPaymentMethod.update({
    contractorUuid: "<id>",
    requestBody: {
      version: "56d00c178bc7393b2a206ed6a86afcb4",
      type: "Direct Deposit",
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
import { contractorPaymentMethodUpdate } from "@gusto/embedded-api-v2025-11-15/funcs/contractorPaymentMethodUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await contractorPaymentMethodUpdate(gustoEmbedded, {
    contractorUuid: "<id>",
    requestBody: {
      version: "56d00c178bc7393b2a206ed6a86afcb4",
      type: "Direct Deposit",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contractorPaymentMethodUpdate failed:", res.error);
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
  useContractorPaymentMethodUpdateMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/contractorPaymentMethodUpdate.js";
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="put-v1-contractors-contractor_id-payment_method" method="put" path="/v1/contractors/{contractor_uuid}/payment_method" example="Nested" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.contractorPaymentMethod.update({
    contractorUuid: "<id>",
    requestBody: {
      version: "56d00c178bc7393b2a206ed6a86afcb4",
      type: "Direct Deposit",
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
import { contractorPaymentMethodUpdate } from "@gusto/embedded-api-v2025-11-15/funcs/contractorPaymentMethodUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await contractorPaymentMethodUpdate(gustoEmbedded, {
    contractorUuid: "<id>",
    requestBody: {
      version: "56d00c178bc7393b2a206ed6a86afcb4",
      type: "Direct Deposit",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contractorPaymentMethodUpdate failed:", res.error);
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
  useContractorPaymentMethodUpdateMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/contractorPaymentMethodUpdate.js";
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="put-v1-contractors-contractor_id-payment_method" method="put" path="/v1/contractors/{contractor_uuid}/payment_method" example="Resource" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.contractorPaymentMethod.update({
    contractorUuid: "<id>",
    requestBody: {
      version: "56d00c178bc7393b2a206ed6a86afcb4",
      type: "Direct Deposit",
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
import { contractorPaymentMethodUpdate } from "@gusto/embedded-api-v2025-11-15/funcs/contractorPaymentMethodUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await contractorPaymentMethodUpdate(gustoEmbedded, {
    contractorUuid: "<id>",
    requestBody: {
      version: "56d00c178bc7393b2a206ed6a86afcb4",
      type: "Direct Deposit",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contractorPaymentMethodUpdate failed:", res.error);
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
  useContractorPaymentMethodUpdateMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/contractorPaymentMethodUpdate.js";
```
### Example Usage: example-1

<!-- UsageSnippet language="typescript" operationID="put-v1-contractors-contractor_id-payment_method" method="put" path="/v1/contractors/{contractor_uuid}/payment_method" example="example-1" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.contractorPaymentMethod.update({
    contractorUuid: "<id>",
    requestBody: {
      version: "63859768485e218ccf8a449bb60f14ed",
      type: "Direct Deposit",
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
import { contractorPaymentMethodUpdate } from "@gusto/embedded-api-v2025-11-15/funcs/contractorPaymentMethodUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await contractorPaymentMethodUpdate(gustoEmbedded, {
    contractorUuid: "<id>",
    requestBody: {
      version: "63859768485e218ccf8a449bb60f14ed",
      type: "Direct Deposit",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contractorPaymentMethodUpdate failed:", res.error);
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
  useContractorPaymentMethodUpdateMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/contractorPaymentMethodUpdate.js";
```
### Example Usage: example-3

<!-- UsageSnippet language="typescript" operationID="put-v1-contractors-contractor_id-payment_method" method="put" path="/v1/contractors/{contractor_uuid}/payment_method" example="example-3" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.contractorPaymentMethod.update({
    contractorUuid: "<id>",
    requestBody: {
      version: "63859768485e218ccf8a449bb60f14ed",
      type: "Check",
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
import { contractorPaymentMethodUpdate } from "@gusto/embedded-api-v2025-11-15/funcs/contractorPaymentMethodUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await contractorPaymentMethodUpdate(gustoEmbedded, {
    contractorUuid: "<id>",
    requestBody: {
      version: "63859768485e218ccf8a449bb60f14ed",
      type: "Check",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contractorPaymentMethodUpdate failed:", res.error);
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
  useContractorPaymentMethodUpdateMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/contractorPaymentMethodUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1ContractorsContractorIdPaymentMethodRequest](../../models/operations/putv1contractorscontractoridpaymentmethodrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1ContractorsContractorIdPaymentMethodResponse](../../models/operations/putv1contractorscontractoridpaymentmethodresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |