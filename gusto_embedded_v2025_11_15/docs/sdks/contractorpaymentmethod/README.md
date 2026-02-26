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
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.contractorPaymentMethod.getBankAccounts({
    contractorUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { contractorPaymentMethodGetBankAccounts } from "openapi/funcs/contractor-payment-method-get-bank-accounts.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await contractorPaymentMethodGetBankAccounts(sdk, {
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1ContractorsContractorUuidBankAccountsRequest](../../models/operations/get-v1-contractors-contractor-uuid-bank-accounts-request.md)                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ContractorBankAccount[]](../../models/.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## get

Fetches a contractor's payment method. A contractor payment method
describes how the payment should be split across the contractor's associated
bank accounts.

scope: `contractor_payment_methods:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-contractors-contractor_uuid-payment_method" method="get" path="/v1/contractors/{contractor_uuid}/payment_method" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.contractorPaymentMethod.get({
    contractorUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { contractorPaymentMethodGet } from "openapi/funcs/contractor-payment-method-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await contractorPaymentMethodGet(sdk, {
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1ContractorsContractorUuidPaymentMethodRequest](../../models/operations/get-v1-contractors-contractor-uuid-payment-method-request.md)                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ContractorPaymentMethod](../../models/contractor-payment-method.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## update

Updates a contractor's payment method. Note that creating a contractor
bank account will also update the contractor's payment method.

scope: `contractor_payment_methods:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="put-v1-contractors-contractor_id-payment_method" method="put" path="/v1/contractors/{contractor_uuid}/payment_method" example="Basic" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.contractorPaymentMethod.update({
    contractorUuid: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { contractorPaymentMethodUpdate } from "openapi/funcs/contractor-payment-method-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await contractorPaymentMethodUpdate(sdk, {
    contractorUuid: "<id>",
    body: {
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
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="put-v1-contractors-contractor_id-payment_method" method="put" path="/v1/contractors/{contractor_uuid}/payment_method" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.contractorPaymentMethod.update({
    contractorUuid: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { contractorPaymentMethodUpdate } from "openapi/funcs/contractor-payment-method-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await contractorPaymentMethodUpdate(sdk, {
    contractorUuid: "<id>",
    body: {
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
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="put-v1-contractors-contractor_id-payment_method" method="put" path="/v1/contractors/{contractor_uuid}/payment_method" example="Nested" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.contractorPaymentMethod.update({
    contractorUuid: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { contractorPaymentMethodUpdate } from "openapi/funcs/contractor-payment-method-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await contractorPaymentMethodUpdate(sdk, {
    contractorUuid: "<id>",
    body: {
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
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="put-v1-contractors-contractor_id-payment_method" method="put" path="/v1/contractors/{contractor_uuid}/payment_method" example="Resource" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.contractorPaymentMethod.update({
    contractorUuid: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { contractorPaymentMethodUpdate } from "openapi/funcs/contractor-payment-method-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await contractorPaymentMethodUpdate(sdk, {
    contractorUuid: "<id>",
    body: {
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
### Example Usage: example-1

<!-- UsageSnippet language="typescript" operationID="put-v1-contractors-contractor_id-payment_method" method="put" path="/v1/contractors/{contractor_uuid}/payment_method" example="example-1" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.contractorPaymentMethod.update({
    contractorUuid: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { contractorPaymentMethodUpdate } from "openapi/funcs/contractor-payment-method-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await contractorPaymentMethodUpdate(sdk, {
    contractorUuid: "<id>",
    body: {
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
### Example Usage: example-3

<!-- UsageSnippet language="typescript" operationID="put-v1-contractors-contractor_id-payment_method" method="put" path="/v1/contractors/{contractor_uuid}/payment_method" example="example-3" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.contractorPaymentMethod.update({
    contractorUuid: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { contractorPaymentMethodUpdate } from "openapi/funcs/contractor-payment-method-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await contractorPaymentMethodUpdate(sdk, {
    contractorUuid: "<id>",
    body: {
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1ContractorsContractorIdPaymentMethodRequest](../../models/operations/put-v1-contractors-contractor-id-payment-method-request.md)                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ContractorPaymentMethod](../../models/contractor-payment-method.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |