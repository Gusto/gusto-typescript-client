# TaxRequirements
(*taxRequirements*)

## Overview

### Available Operations

* [get](#get) - Get State Tax Requirements
* [updateState](#updatestate) - Update State Tax Requirements
* [getAll](#getall) - Get All Tax Requirement States

## get

Get all tax requirements for a given state.

### Metadata Examples

```json select
{
  "type": "select",
  "options": [
    { "label": "Semiweekly",  value: "Semi-weekly" },
    { "label": "Monthly",  value: "Monthly" },
    { "label": "Quarterly",  value: "Quarterly" },
  ]
}
```
```json radio
{
  "type": "radio",
  "options": [
    { "label": "No, we cannot reimburse",  value: false, short_label: "Not Reimbursable" },
    { "label": "Yes, we can reimburse",  value: true, short_label: "Reimbursable" },
  ]
}
```
```json account_number
{
  "type": "account_number",
  "mask": "######-##',
  "prefix": null
}
```
```json tax_rate
{
  "type": "tax_rate",
  "validation": {
    "type": "min_max",
    "min": "0.0004",
    "max": "0.081"
  }
}
```

scope: `company_tax_requirements:read`


### Example Usage

```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.taxRequirements.get({
    companyUuid: "<id>",
    state: "New Mexico",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { taxRequirementsGet } from "@gusto/embedded-api/funcs/taxRequirementsGet.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await taxRequirementsGet(gustoEmbedded, {
    companyUuid: "<id>",
    state: "New Mexico",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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
  useTaxRequirementsGet,
  useTaxRequirementsGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchTaxRequirementsGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateTaxRequirementsGet,
  invalidateAllTaxRequirementsGet,
} from "@gusto/embedded-api/react-query/taxRequirementsGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest](../../models/operations/getv1companiescompanyuuidtaxrequirementsstaterequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TaxRequirementsState](../../models/components/taxrequirementsstate.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateState

Update State Tax Requirements

scope: `company_tax_requirements:write`

### Example Usage

```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  await gustoEmbedded.taxRequirements.updateState({
    companyUuid: "<id>",
    state: "New Jersey",
    requestBody: {
      requirementSets: [
        {
          key: "registrations",
          effectiveFrom: null,
          state: "GA",
          requirements: [
            {
              key: "71653ec0-00b5-4c66-a58b-22ecf21704c5",
              value: "1233214-AB",
            },
            {
              key: "6c0911ab-5860-412e-bdef-6437cd881df5",
              value: "474747-22",
            },
          ],
        },
        {
          key: "taxrates",
          effectiveFrom: "2022-01-01",
          state: "GA",
          requirements: [
            {
              key: "e0ac2284-8d30-4100-ae23-f85f9574868b",
              value: "0.05",
            },
          ],
        },
        {
          key: "depositschedules",
          effectiveFrom: "2022-01-01",
          state: "GA",
          requirements: [
            {
              key: "6ddfcbeb-94d3-4003-bfc2-8c6e1ca9f70c",
              value: "Semi-weekly",
            },
          ],
        },
      ],
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { taxRequirementsUpdateState } from "@gusto/embedded-api/funcs/taxRequirementsUpdateState.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await taxRequirementsUpdateState(gustoEmbedded, {
    companyUuid: "<id>",
    state: "New Jersey",
    requestBody: {
      requirementSets: [
        {
          key: "registrations",
          effectiveFrom: null,
          state: "GA",
          requirements: [
            {
              key: "71653ec0-00b5-4c66-a58b-22ecf21704c5",
              value: "1233214-AB",
            },
            {
              key: "6c0911ab-5860-412e-bdef-6437cd881df5",
              value: "474747-22",
            },
          ],
        },
        {
          key: "taxrates",
          effectiveFrom: "2022-01-01",
          state: "GA",
          requirements: [
            {
              key: "e0ac2284-8d30-4100-ae23-f85f9574868b",
              value: "0.05",
            },
          ],
        },
        {
          key: "depositschedules",
          effectiveFrom: "2022-01-01",
          state: "GA",
          requirements: [
            {
              key: "6ddfcbeb-94d3-4003-bfc2-8c6e1ca9f70c",
              value: "Semi-weekly",
            },
          ],
        },
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
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
  useTaxRequirementsUpdateStateMutation
} from "@gusto/embedded-api/react-query/taxRequirementsUpdateState.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1CompaniesCompanyUuidTaxRequirementsStateRequest](../../models/operations/putv1companiescompanyuuidtaxrequirementsstaterequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## getAll

Returns objects describing the states that have tax requirements for the company

scope: `company_tax_requirements:read`

### Example Usage

```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.taxRequirements.getAll({
    companyUuid: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { taxRequirementsGetAll } from "@gusto/embedded-api/funcs/taxRequirementsGetAll.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await taxRequirementsGetAll(gustoEmbedded, {
    companyUuid: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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
  useTaxRequirementsGetAll,
  useTaxRequirementsGetAllSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchTaxRequirementsGetAll,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateTaxRequirementsGetAll,
  invalidateAllTaxRequirementsGetAll,
} from "@gusto/embedded-api/react-query/taxRequirementsGetAll.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyUuidTaxRequirementsRequest](../../models/operations/getv1companiescompanyuuidtaxrequirementsrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ResponseBody[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |