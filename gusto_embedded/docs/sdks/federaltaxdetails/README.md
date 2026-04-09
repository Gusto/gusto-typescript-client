# FederalTaxDetails

## Overview

### Available Operations

* [get](#get) - Get a company's federal tax details
* [update](#update) - Update a company's federal tax details

## get

Retrieves a company's federal tax details including EIN verification status, tax payer type, filing form, and other federal tax configuration.

scope: `company_federal_taxes:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_id-federal_tax_details" method="get" path="/v1/companies/{company_id}/federal_tax_details" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.federalTaxDetails.get({
    companyId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { federalTaxDetailsGet } from "@gusto/embedded-api/funcs/federalTaxDetailsGet.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await federalTaxDetailsGet(gustoEmbedded, {
    companyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("federalTaxDetailsGet failed:", res.error);
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
  useFederalTaxDetailsGet,
  useFederalTaxDetailsGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFederalTaxDetailsGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFederalTaxDetailsGet,
  invalidateAllFederalTaxDetailsGet,
} from "@gusto/embedded-api/react-query/federalTaxDetailsGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyIdFederalTaxDetailsRequest](../../models/operations/getv1companiescompanyidfederaltaxdetailsrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CompaniesCompanyIdFederalTaxDetailsResponse](../../models/operations/getv1companiescompanyidfederaltaxdetailsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## update

Updates a company's federal tax details including EIN, legal name, tax payer type, filing form, and S-Corp
taxation status. This information is required to onboard a company for use with Gusto Embedded Payroll.

### Prerequisites
Before calling this endpoint, retrieve the current federal tax details and `version` via [GET /v1/companies/{company_id}/federal_tax_details](ref:get-v1-companies-company_id-federal_tax_details)

### Webhooks
- `company.updated`: Fires when federal tax details for a company are successfully updated

**Setup:** [POST /v1/webhook_subscriptions](ref:post-v1-webhook-subscription) with `subscription_types`: `["Company"]`

scope: `company_federal_taxes:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="put-v1-companies-company_id-federal_tax_details" method="put" path="/v1/companies/{company_id}/federal_tax_details" example="Basic" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.federalTaxDetails.update({
    companyId: "<id>",
    federalTaxDetailsUpdate: {
      version: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { federalTaxDetailsUpdate } from "@gusto/embedded-api/funcs/federalTaxDetailsUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await federalTaxDetailsUpdate(gustoEmbedded, {
    companyId: "<id>",
    federalTaxDetailsUpdate: {
      version: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("federalTaxDetailsUpdate failed:", res.error);
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
  useFederalTaxDetailsUpdateMutation
} from "@gusto/embedded-api/react-query/federalTaxDetailsUpdate.js";
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="put-v1-companies-company_id-federal_tax_details" method="put" path="/v1/companies/{company_id}/federal_tax_details" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.federalTaxDetails.update({
    companyId: "<id>",
    federalTaxDetailsUpdate: {
      version: "6cb95e00540706ca48d4577b3c839fbe",
      legalName: "Acme Corp.",
      taxPayerType: "LLP",
      filingForm: "944",
      taxableAsScorp: false,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { federalTaxDetailsUpdate } from "@gusto/embedded-api/funcs/federalTaxDetailsUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await federalTaxDetailsUpdate(gustoEmbedded, {
    companyId: "<id>",
    federalTaxDetailsUpdate: {
      version: "6cb95e00540706ca48d4577b3c839fbe",
      legalName: "Acme Corp.",
      taxPayerType: "LLP",
      filingForm: "944",
      taxableAsScorp: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("federalTaxDetailsUpdate failed:", res.error);
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
  useFederalTaxDetailsUpdateMutation
} from "@gusto/embedded-api/react-query/federalTaxDetailsUpdate.js";
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="put-v1-companies-company_id-federal_tax_details" method="put" path="/v1/companies/{company_id}/federal_tax_details" example="Nested" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.federalTaxDetails.update({
    companyId: "<id>",
    federalTaxDetailsUpdate: {
      version: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { federalTaxDetailsUpdate } from "@gusto/embedded-api/funcs/federalTaxDetailsUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await federalTaxDetailsUpdate(gustoEmbedded, {
    companyId: "<id>",
    federalTaxDetailsUpdate: {
      version: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("federalTaxDetailsUpdate failed:", res.error);
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
  useFederalTaxDetailsUpdateMutation
} from "@gusto/embedded-api/react-query/federalTaxDetailsUpdate.js";
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="put-v1-companies-company_id-federal_tax_details" method="put" path="/v1/companies/{company_id}/federal_tax_details" example="Resource" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.federalTaxDetails.update({
    companyId: "<id>",
    federalTaxDetailsUpdate: {
      version: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { federalTaxDetailsUpdate } from "@gusto/embedded-api/funcs/federalTaxDetailsUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await federalTaxDetailsUpdate(gustoEmbedded, {
    companyId: "<id>",
    federalTaxDetailsUpdate: {
      version: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("federalTaxDetailsUpdate failed:", res.error);
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
  useFederalTaxDetailsUpdateMutation
} from "@gusto/embedded-api/react-query/federalTaxDetailsUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1CompaniesCompanyIdFederalTaxDetailsRequest](../../models/operations/putv1companiescompanyidfederaltaxdetailsrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1CompaniesCompanyIdFederalTaxDetailsResponse](../../models/operations/putv1companiescompanyidfederaltaxdetailsresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 409, 422                              | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |