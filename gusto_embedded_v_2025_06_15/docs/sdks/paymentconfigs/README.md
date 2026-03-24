# PaymentConfigs

## Overview

### Available Operations

* [get](#get) - Get a company's payment configs
* [update](#update) - Update a company's payment configs

## get

Get payment speed configurations for the company: payment speed (1-day, 2-day, or 4-day ACH), fast payment limit, partner-owned disbursement setting, and earned fast ACH blockers when applicable. 1-day is only available to partners that opt in.

### Related guides
- [Payroll Processing Speeds](doc:2-day-vs-4-day)

scope: `company_payment_configs:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-company-payment-configs" method="get" path="/v1/companies/{company_uuid}/payment_configs" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-06-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.paymentConfigs.get({
    companyUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-06-15/core.js";
import { paymentConfigsGet } from "@gusto/embedded-api-v2025-06-15/funcs/paymentConfigsGet.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await paymentConfigsGet(gustoEmbedded, {
    companyUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentConfigsGet failed:", res.error);
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
  usePaymentConfigsGet,
  usePaymentConfigsGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchPaymentConfigsGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidatePaymentConfigsGet,
  invalidateAllPaymentConfigsGet,
} from "@gusto/embedded-api-v2025-06-15/react-query/paymentConfigsGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompanyPaymentConfigsRequest](../../models/operations/getv1companypaymentconfigsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CompanyPaymentConfigsResponse](../../models/operations/getv1companypaymentconfigsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## update

Update payment speed, fast payment limit, and/or partner-owned disbursement for a company.

At least one of `payment_speed`, `fast_payment_limit`, or `partner_owned_disbursement` is required.
1-day payment speed is only applicable to partners that opt in. 1-day is not allowed when AutoPilot is enabled.

### Related guides
- [Payroll Processing Speeds](doc:2-day-vs-4-day)

scope: `company_payment_configs:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="put-v1-company-payment-configs" method="put" path="/v1/companies/{company_uuid}/payment_configs" example="Basic" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-06-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.paymentConfigs.update({
    companyUuid: "<id>",
    paymentConfigsUpdateRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-06-15/core.js";
import { paymentConfigsUpdate } from "@gusto/embedded-api-v2025-06-15/funcs/paymentConfigsUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await paymentConfigsUpdate(gustoEmbedded, {
    companyUuid: "<id>",
    paymentConfigsUpdateRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentConfigsUpdate failed:", res.error);
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
  usePaymentConfigsUpdateMutation
} from "@gusto/embedded-api-v2025-06-15/react-query/paymentConfigsUpdate.js";
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="put-v1-company-payment-configs" method="put" path="/v1/companies/{company_uuid}/payment_configs" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-06-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.paymentConfigs.update({
    companyUuid: "<id>",
    paymentConfigsUpdateRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-06-15/core.js";
import { paymentConfigsUpdate } from "@gusto/embedded-api-v2025-06-15/funcs/paymentConfigsUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await paymentConfigsUpdate(gustoEmbedded, {
    companyUuid: "<id>",
    paymentConfigsUpdateRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentConfigsUpdate failed:", res.error);
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
  usePaymentConfigsUpdateMutation
} from "@gusto/embedded-api-v2025-06-15/react-query/paymentConfigsUpdate.js";
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="put-v1-company-payment-configs" method="put" path="/v1/companies/{company_uuid}/payment_configs" example="Nested" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-06-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.paymentConfigs.update({
    companyUuid: "<id>",
    paymentConfigsUpdateRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-06-15/core.js";
import { paymentConfigsUpdate } from "@gusto/embedded-api-v2025-06-15/funcs/paymentConfigsUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await paymentConfigsUpdate(gustoEmbedded, {
    companyUuid: "<id>",
    paymentConfigsUpdateRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentConfigsUpdate failed:", res.error);
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
  usePaymentConfigsUpdateMutation
} from "@gusto/embedded-api-v2025-06-15/react-query/paymentConfigsUpdate.js";
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="put-v1-company-payment-configs" method="put" path="/v1/companies/{company_uuid}/payment_configs" example="Resource" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-06-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.paymentConfigs.update({
    companyUuid: "<id>",
    paymentConfigsUpdateRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-06-15/core.js";
import { paymentConfigsUpdate } from "@gusto/embedded-api-v2025-06-15/funcs/paymentConfigsUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await paymentConfigsUpdate(gustoEmbedded, {
    companyUuid: "<id>",
    paymentConfigsUpdateRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentConfigsUpdate failed:", res.error);
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
  usePaymentConfigsUpdateMutation
} from "@gusto/embedded-api-v2025-06-15/react-query/paymentConfigsUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1CompanyPaymentConfigsRequest](../../models/operations/putv1companypaymentconfigsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1CompanyPaymentConfigsResponse](../../models/operations/putv1companypaymentconfigsresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |