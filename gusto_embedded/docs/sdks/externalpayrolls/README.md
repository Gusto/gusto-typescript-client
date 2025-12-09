# ExternalPayrolls

## Overview

### Available Operations

* [create](#create) - Create a new external payroll for a company
* [get](#get) - Get external payrolls for a company
* [retrieve](#retrieve) - Get an external payroll
* [delete](#delete) - Delete an external payroll
* [update](#update) - Update an external payroll
* [calculateTaxes](#calculatetaxes) - Get tax suggestions for an external payroll
* [listTaxLiabilities](#listtaxliabilities) - Get tax liabilities
* [updateTaxLiabilities](#updatetaxliabilities) - Update tax liabilities
* [finalizeTaxLiabilities](#finalizetaxliabilities) - Finalize tax liabilities options and convert into processed payrolls

## create

Creates a new external payroll for the company.

scope: `external_payrolls:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-external-payroll" method="post" path="/v1/companies/{company_uuid}/external_payrolls" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.externalPayrolls.create({
    companyUuid: "<id>",
    requestBody: {
      checkDate: "2022-06-01",
      paymentPeriodStartDate: "2022-05-15",
      paymentPeriodEndDate: "2022-05-30",
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
import { externalPayrollsCreate } from "@gusto/embedded-api/funcs/externalPayrollsCreate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await externalPayrollsCreate(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      checkDate: "2022-06-01",
      paymentPeriodStartDate: "2022-05-15",
      paymentPeriodEndDate: "2022-05-30",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("externalPayrollsCreate failed:", res.error);
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
  useExternalPayrollsCreateMutation
} from "@gusto/embedded-api/react-query/externalPayrollsCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1ExternalPayrollRequest](../../models/operations/postv1externalpayrollrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1ExternalPayrollResponse](../../models/operations/postv1externalpayrollresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## get

Get an external payroll for a given company.

scope: `external_payrolls:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-company-external-payrolls" method="get" path="/v1/companies/{company_uuid}/external_payrolls" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.externalPayrolls.get({
    companyUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { externalPayrollsGet } from "@gusto/embedded-api/funcs/externalPayrollsGet.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await externalPayrollsGet(gustoEmbedded, {
    companyUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("externalPayrollsGet failed:", res.error);
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
  useExternalPayrollsGet,
  useExternalPayrollsGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchExternalPayrollsGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateExternalPayrollsGet,
  invalidateAllExternalPayrollsGet,
} from "@gusto/embedded-api/react-query/externalPayrollsGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompanyExternalPayrollsRequest](../../models/operations/getv1companyexternalpayrollsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CompanyExternalPayrollsResponse](../../models/operations/getv1companyexternalpayrollsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## retrieve

Get an external payroll for a given company.

scope: `external_payrolls:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-external-payroll" method="get" path="/v1/companies/{company_uuid}/external_payrolls/{external_payroll_id}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.externalPayrolls.retrieve({
    companyUuid: "<id>",
    externalPayrollId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { externalPayrollsRetrieve } from "@gusto/embedded-api/funcs/externalPayrollsRetrieve.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await externalPayrollsRetrieve(gustoEmbedded, {
    companyUuid: "<id>",
    externalPayrollId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("externalPayrollsRetrieve failed:", res.error);
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
  useExternalPayrollsRetrieve,
  useExternalPayrollsRetrieveSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchExternalPayrollsRetrieve,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateExternalPayrollsRetrieve,
  invalidateAllExternalPayrollsRetrieve,
} from "@gusto/embedded-api/react-query/externalPayrollsRetrieve.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1ExternalPayrollRequest](../../models/operations/getv1externalpayrollrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1ExternalPayrollResponse](../../models/operations/getv1externalpayrollresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## delete

Delete an external payroll.

scope: `external_payrolls:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-v1-external-payroll" method="delete" path="/v1/companies/{company_uuid}/external_payrolls/{external_payroll_id}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.externalPayrolls.delete({
    companyUuid: "<id>",
    externalPayrollId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { externalPayrollsDelete } from "@gusto/embedded-api/funcs/externalPayrollsDelete.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await externalPayrollsDelete(gustoEmbedded, {
    companyUuid: "<id>",
    externalPayrollId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("externalPayrollsDelete failed:", res.error);
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
  useExternalPayrollsDeleteMutation
} from "@gusto/embedded-api/react-query/externalPayrollsDelete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1ExternalPayrollRequest](../../models/operations/deletev1externalpayrollrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1ExternalPayrollResponse](../../models/operations/deletev1externalpayrollresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Update an external payroll with a list of external payroll items

scope: `external_payrolls:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-external-payroll" method="put" path="/v1/companies/{company_uuid}/external_payrolls/{external_payroll_id}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.externalPayrolls.update({
    companyUuid: "<id>",
    externalPayrollId: "<id>",
    requestBody: {
      replaceFields: true,
      externalPayrollItems: [
        {
          employeeUuid: "403c6ee3-5f58-40ef-a117-ff7175cd9ee3",
          earnings: [
            {
              hours: "0.0",
              amount: "200.00",
              earningId: 1,
              earningType: "CompanyPayType",
            },
            {
              hours: "0.0",
              amount: "5000.00",
              earningId: 2,
              earningType: "CompanyEarningType",
            },
          ],
          benefits: [
            {
              companyContributionAmount: "300.0",
              employeeDeductionAmount: "300.0",
              benefitId: 10,
            },
            {
              companyContributionAmount: "50.0",
              employeeDeductionAmount: "100.0",
              benefitId: 21,
            },
          ],
          taxes: [
            {
              amount: "20.0",
              taxId: 1,
            },
            {
              amount: "100.0",
              taxId: 2,
            },
          ],
        },
      ],
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
import { externalPayrollsUpdate } from "@gusto/embedded-api/funcs/externalPayrollsUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await externalPayrollsUpdate(gustoEmbedded, {
    companyUuid: "<id>",
    externalPayrollId: "<id>",
    requestBody: {
      replaceFields: true,
      externalPayrollItems: [
        {
          employeeUuid: "403c6ee3-5f58-40ef-a117-ff7175cd9ee3",
          earnings: [
            {
              hours: "0.0",
              amount: "200.00",
              earningId: 1,
              earningType: "CompanyPayType",
            },
            {
              hours: "0.0",
              amount: "5000.00",
              earningId: 2,
              earningType: "CompanyEarningType",
            },
          ],
          benefits: [
            {
              companyContributionAmount: "300.0",
              employeeDeductionAmount: "300.0",
              benefitId: 10,
            },
            {
              companyContributionAmount: "50.0",
              employeeDeductionAmount: "100.0",
              benefitId: 21,
            },
          ],
          taxes: [
            {
              amount: "20.0",
              taxId: 1,
            },
            {
              amount: "100.0",
              taxId: 2,
            },
          ],
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("externalPayrollsUpdate failed:", res.error);
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
  useExternalPayrollsUpdateMutation
} from "@gusto/embedded-api/react-query/externalPayrollsUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1ExternalPayrollRequest](../../models/operations/putv1externalpayrollrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1ExternalPayrollResponse](../../models/operations/putv1externalpayrollresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## calculateTaxes

Get tax suggestions for an external payroll. Earnings and/or benefits
data must be saved prior to the calculation in order to retrieve accurate
tax calculation.

scope: `external_payrolls:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-external-payroll-calculate-taxes" method="get" path="/v1/companies/{company_uuid}/external_payrolls/{external_payroll_id}/calculate_taxes" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.externalPayrolls.calculateTaxes({
    companyUuid: "<id>",
    externalPayrollId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { externalPayrollsCalculateTaxes } from "@gusto/embedded-api/funcs/externalPayrollsCalculateTaxes.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await externalPayrollsCalculateTaxes(gustoEmbedded, {
    companyUuid: "<id>",
    externalPayrollId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("externalPayrollsCalculateTaxes failed:", res.error);
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
  useExternalPayrollsCalculateTaxes,
  useExternalPayrollsCalculateTaxesSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchExternalPayrollsCalculateTaxes,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateExternalPayrollsCalculateTaxes,
  invalidateAllExternalPayrollsCalculateTaxes,
} from "@gusto/embedded-api/react-query/externalPayrollsCalculateTaxes.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1ExternalPayrollCalculateTaxesRequest](../../models/operations/getv1externalpayrollcalculatetaxesrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1ExternalPayrollCalculateTaxesResponse](../../models/operations/getv1externalpayrollcalculatetaxesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listTaxLiabilities

Get tax liabilities from aggregate external payrolls for a company.

scope: `external_payrolls:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-tax-liabilities" method="get" path="/v1/companies/{company_uuid}/external_payrolls/tax_liabilities" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.externalPayrolls.listTaxLiabilities({
    companyUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { externalPayrollsListTaxLiabilities } from "@gusto/embedded-api/funcs/externalPayrollsListTaxLiabilities.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await externalPayrollsListTaxLiabilities(gustoEmbedded, {
    companyUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("externalPayrollsListTaxLiabilities failed:", res.error);
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
  useExternalPayrollsListTaxLiabilities,
  useExternalPayrollsListTaxLiabilitiesSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchExternalPayrollsListTaxLiabilities,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateExternalPayrollsListTaxLiabilities,
  invalidateAllExternalPayrollsListTaxLiabilities,
} from "@gusto/embedded-api/react-query/externalPayrollsListTaxLiabilities.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1TaxLiabilitiesRequest](../../models/operations/getv1taxliabilitiesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1TaxLiabilitiesResponse](../../models/operations/getv1taxliabilitiesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateTaxLiabilities

Update tax liabilities for a company.

scope: `external_payrolls:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-tax-liabilities" method="put" path="/v1/companies/{company_uuid}/external_payrolls/tax_liabilities" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.externalPayrolls.updateTaxLiabilities({
    companyUuid: "<id>",
    requestBody: {
      liabilitySelections: [
        {
          taxId: 1,
          lastUnpaidExternalPayrollUuid: "7985032c-ee3a-4e98-af27-d56551eb5f1c",
          unpaidLiabilityAmount: 50,
        },
        {
          taxId: 2,
          lastUnpaidExternalPayrollUuid: "5ed14dbb-958f-47c8-b16e-c4fed82dc486",
          unpaidLiabilityAmount: 400,
        },
        {
          taxId: 8,
          lastUnpaidExternalPayrollUuid: null,
          unpaidLiabilityAmount: 0,
        },
      ],
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
import { externalPayrollsUpdateTaxLiabilities } from "@gusto/embedded-api/funcs/externalPayrollsUpdateTaxLiabilities.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await externalPayrollsUpdateTaxLiabilities(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      liabilitySelections: [
        {
          taxId: 1,
          lastUnpaidExternalPayrollUuid: "7985032c-ee3a-4e98-af27-d56551eb5f1c",
          unpaidLiabilityAmount: 50,
        },
        {
          taxId: 2,
          lastUnpaidExternalPayrollUuid: "5ed14dbb-958f-47c8-b16e-c4fed82dc486",
          unpaidLiabilityAmount: 400,
        },
        {
          taxId: 8,
          lastUnpaidExternalPayrollUuid: null,
          unpaidLiabilityAmount: 0,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("externalPayrollsUpdateTaxLiabilities failed:", res.error);
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
  useExternalPayrollsUpdateTaxLiabilitiesMutation
} from "@gusto/embedded-api/react-query/externalPayrollsUpdateTaxLiabilities.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1TaxLiabilitiesRequest](../../models/operations/putv1taxliabilitiesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1TaxLiabilitiesResponse](../../models/operations/putv1taxliabilitiesresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## finalizeTaxLiabilities

Finalizes tax liabilities for a company. All external payrolls edit action will be disabled.

scope: `external_payrolls:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-tax-liabilities-finish" method="put" path="/v1/companies/{company_uuid}/external_payrolls/tax_liabilities/finish" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.externalPayrolls.finalizeTaxLiabilities({
    companyUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { externalPayrollsFinalizeTaxLiabilities } from "@gusto/embedded-api/funcs/externalPayrollsFinalizeTaxLiabilities.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await externalPayrollsFinalizeTaxLiabilities(gustoEmbedded, {
    companyUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("externalPayrollsFinalizeTaxLiabilities failed:", res.error);
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
  useExternalPayrollsFinalizeTaxLiabilitiesMutation
} from "@gusto/embedded-api/react-query/externalPayrollsFinalizeTaxLiabilities.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1TaxLiabilitiesFinishRequest](../../models/operations/putv1taxliabilitiesfinishrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1TaxLiabilitiesFinishResponse](../../models/operations/putv1taxliabilitiesfinishresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |