# TaxPayments

## Overview

### Available Operations

* [getTaxPayments](#gettaxpayments) - Get all tax payments for a company
* [getTaxPayment](#gettaxpayment) - Get a tax payment for a company

## getTaxPayments

Fetches all tax payments Gusto has made (or scheduled) to tax agencies on behalf of a company.

scope: `tax_payments:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-tax-payments" method="get" path="/v1/companies/{company_uuid}/tax_payments" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v-2026-02-01";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.taxPayments.getTaxPayments({
    companyUuid: "<id>",
    sortBy: "amount:asc",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v-2026-02-01/core.js";
import { taxPaymentsGetTaxPayments } from "@gusto/embedded-api-v-2026-02-01/funcs/taxPaymentsGetTaxPayments.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await taxPaymentsGetTaxPayments(gustoEmbedded, {
    companyUuid: "<id>",
    sortBy: "amount:asc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxPaymentsGetTaxPayments failed:", res.error);
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
  useTaxPaymentsGetTaxPayments,
  useTaxPaymentsGetTaxPaymentsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchTaxPaymentsGetTaxPayments,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateTaxPaymentsGetTaxPayments,
  invalidateAllTaxPaymentsGetTaxPayments,
} from "@gusto/embedded-api-v-2026-02-01/react-query/taxPaymentsGetTaxPayments.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTaxPaymentsRequest](../../models/operations/gettaxpaymentsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTaxPaymentsResponse](../../models/operations/gettaxpaymentsresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## getTaxPayment

Fetches a single tax payment by UUID, including the payroll tax liabilities that make up the payment.

scope: `tax_payments:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-tax-payment" method="get" path="/v1/companies/{company_uuid}/tax_payments/{uuid}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v-2026-02-01";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.taxPayments.getTaxPayment({
    companyUuid: "<id>",
    uuid: "7cdc7492-54c4-4684-9729-2c5da517245b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v-2026-02-01/core.js";
import { taxPaymentsGetTaxPayment } from "@gusto/embedded-api-v-2026-02-01/funcs/taxPaymentsGetTaxPayment.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await taxPaymentsGetTaxPayment(gustoEmbedded, {
    companyUuid: "<id>",
    uuid: "7cdc7492-54c4-4684-9729-2c5da517245b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxPaymentsGetTaxPayment failed:", res.error);
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
  useTaxPaymentsGetTaxPayment,
  useTaxPaymentsGetTaxPaymentSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchTaxPaymentsGetTaxPayment,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateTaxPaymentsGetTaxPayment,
  invalidateAllTaxPaymentsGetTaxPayment,
} from "@gusto/embedded-api-v-2026-02-01/react-query/taxPaymentsGetTaxPayment.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTaxPaymentRequest](../../models/operations/gettaxpaymentrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTaxPaymentResponse](../../models/operations/gettaxpaymentresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |