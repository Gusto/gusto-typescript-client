# ContractorPaymentGroups

## Overview

### Available Operations

* [getList](#getlist) - Get contractor payment groups for a company
* [create](#create) - Create a contractor payment group
* [preview](#preview) - Preview a contractor payment group
* [get](#get) - Get a contractor payment group
* [delete](#delete) - Cancel a contractor payment group
* [fund](#fund) - Fund a contractor payment group [DEMO]
* [getV1ContractorPaymentGroupsIdPartnerDisbursements](#getv1contractorpaymentgroupsidpartnerdisbursements) - Get partner disbursements for a contractor payment group
* [patchV1ContractorPaymentGroupsIdPartnerDisbursements](#patchv1contractorpaymentgroupsidpartnerdisbursements) - Update partner disbursements for a contractor payment group

## getList

Returns a list of minimal contractor payment groups within a given time period, including totals but not associated contractor payments.

 scope: `payrolls:read`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_id-contractor_payment_groups" method="get" path="/v1/companies/{company_id}/contractor_payment_groups" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.contractorPaymentGroups.getList({
    companyId: "<id>",
    startDate: "2020-01-01",
    endDate: "2020-12-31",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { contractorPaymentGroupsGetList } from "@gusto/embedded-api/funcs/contractorPaymentGroupsGetList.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await contractorPaymentGroupsGetList(gustoEmbedded, {
    companyId: "<id>",
    startDate: "2020-01-01",
    endDate: "2020-12-31",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contractorPaymentGroupsGetList failed:", res.error);
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
  useContractorPaymentGroupsGetList,
  useContractorPaymentGroupsGetListSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchContractorPaymentGroupsGetList,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateContractorPaymentGroupsGetList,
  invalidateAllContractorPaymentGroupsGetList,
} from "@gusto/embedded-api/react-query/contractorPaymentGroupsGetList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest](../../models/operations/getv1companiescompanyidcontractorpaymentgroupsrequest.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CompaniesCompanyIdContractorPaymentGroupsResponse](../../models/operations/getv1companiescompanyidcontractorpaymentgroupsresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 404                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## create

Pay a group of contractors. Information needed depends on the contractor's wage type (hourly vs fixed)

scope: `payrolls:run`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_id-contractor_payment_groups" method="post" path="/v1/companies/{company_id}/contractor_payment_groups" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.contractorPaymentGroups.create({
    companyId: "<id>",
    requestBody: {
      checkDate: new RFCDate("2020-01-01"),
      creationToken: "1d532d13-8f61-4a57-ad3c-b5fac1c6e05e",
      contractorPayments: [
        {
          wage: 5000,
          hours: 40,
          bonus: 500,
          reimbursement: 20,
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
import { contractorPaymentGroupsCreate } from "@gusto/embedded-api/funcs/contractorPaymentGroupsCreate.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await contractorPaymentGroupsCreate(gustoEmbedded, {
    companyId: "<id>",
    requestBody: {
      checkDate: new RFCDate("2020-01-01"),
      creationToken: "1d532d13-8f61-4a57-ad3c-b5fac1c6e05e",
      contractorPayments: [
        {
          wage: 5000,
          hours: 40,
          bonus: 500,
          reimbursement: 20,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contractorPaymentGroupsCreate failed:", res.error);
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
  useContractorPaymentGroupsCreateMutation
} from "@gusto/embedded-api/react-query/contractorPaymentGroupsCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyIdContractorPaymentGroupsRequest](../../models/operations/postv1companiescompanyidcontractorpaymentgroupsrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1CompaniesCompanyIdContractorPaymentGroupsResponse](../../models/operations/postv1companiescompanyidcontractorpaymentgroupsresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 404, 422                              | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## preview

Preview a group of contractor payments. Request will validate inputs and return preview of the contractor payment group including the expected debit_date.  Uuid will be null in the response.
The returned creation_token is a required parameter in order to create the contractor payment group.

scope: `payrolls:read`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_id-contractor_payment_groups-preview" method="post" path="/v1/companies/{company_id}/contractor_payment_groups/preview" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.contractorPaymentGroups.preview({
    companyId: "<id>",
    requestBody: {
      contractorPayments: [
        {
          wage: 5000,
          hours: 40,
          bonus: 500,
          reimbursement: 20,
        },
      ],
      checkDate: new RFCDate("2020-01-01"),
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
import { contractorPaymentGroupsPreview } from "@gusto/embedded-api/funcs/contractorPaymentGroupsPreview.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await contractorPaymentGroupsPreview(gustoEmbedded, {
    companyId: "<id>",
    requestBody: {
      contractorPayments: [
        {
          wage: 5000,
          hours: 40,
          bonus: 500,
          reimbursement: 20,
        },
      ],
      checkDate: new RFCDate("2020-01-01"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contractorPaymentGroupsPreview failed:", res.error);
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
  useContractorPaymentGroupsPreviewMutation
} from "@gusto/embedded-api/react-query/contractorPaymentGroupsPreview.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest](../../models/operations/postv1companiescompanyidcontractorpaymentgroupspreviewrequest.md)           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse](../../models/operations/postv1companiescompanyidcontractorpaymentgroupspreviewresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## get

Returns a contractor payment group with all associated contractor payments.

scope: `payrolls:read`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-contractor_payment_groups-contractor_payment_group_id" method="get" path="/v1/contractor_payment_groups/{contractor_payment_group_uuid}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.contractorPaymentGroups.get({
    contractorPaymentGroupUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { contractorPaymentGroupsGet } from "@gusto/embedded-api/funcs/contractorPaymentGroupsGet.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await contractorPaymentGroupsGet(gustoEmbedded, {
    contractorPaymentGroupUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contractorPaymentGroupsGet failed:", res.error);
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
  useContractorPaymentGroupsGet,
  useContractorPaymentGroupsGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchContractorPaymentGroupsGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateContractorPaymentGroupsGet,
  invalidateAllContractorPaymentGroupsGet,
} from "@gusto/embedded-api/react-query/contractorPaymentGroupsGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest](../../models/operations/getv1contractorpaymentgroupscontractorpaymentgroupidrequest.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse](../../models/operations/getv1contractorpaymentgroupscontractorpaymentgroupidresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## delete

Cancels a contractor payment group and all associated contractor payments. All contractor payments must be cancellable, unfunded.

scope: `payrolls:run`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-v1-contractor_payment_groups-contractor_payment_group_id" method="delete" path="/v1/contractor_payment_groups/{contractor_payment_group_uuid}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.contractorPaymentGroups.delete({
    contractorPaymentGroupUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { contractorPaymentGroupsDelete } from "@gusto/embedded-api/funcs/contractorPaymentGroupsDelete.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await contractorPaymentGroupsDelete(gustoEmbedded, {
    contractorPaymentGroupUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contractorPaymentGroupsDelete failed:", res.error);
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
  useContractorPaymentGroupsDeleteMutation
} from "@gusto/embedded-api/react-query/contractorPaymentGroupsDelete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest](../../models/operations/deletev1contractorpaymentgroupscontractorpaymentgroupidrequest.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse](../../models/operations/deletev1contractorpaymentgroupscontractorpaymentgroupidresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 404, 422                              | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## fund

> 🚧 Demo action
> This action is only available in the Demo environment

Simulate funding a contractor payment group. Funding only occurs automatically in the production environment when bank transactions are generated. Use this action in the demo environment to transition a contractor payment group's `status` from `Unfunded` to `Funded`. A `Funded` status is required for generating a contractor payment receipt.

scope: `payrolls:run`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-contractor_payment_groups-contractor_payment_group_id-fund" method="put" path="/v1/contractor_payment_groups/{contractor_payment_group_uuid}/fund" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.contractorPaymentGroups.fund({
    contractorPaymentGroupUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { contractorPaymentGroupsFund } from "@gusto/embedded-api/funcs/contractorPaymentGroupsFund.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await contractorPaymentGroupsFund(gustoEmbedded, {
    contractorPaymentGroupUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contractorPaymentGroupsFund failed:", res.error);
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
  useContractorPaymentGroupsFundMutation
} from "@gusto/embedded-api/react-query/contractorPaymentGroupsFund.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest](../../models/operations/putv1contractorpaymentgroupscontractorpaymentgroupidfundrequest.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse](../../models/operations/putv1contractorpaymentgroupscontractorpaymentgroupidfundresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## getV1ContractorPaymentGroupsIdPartnerDisbursements

Get partner disbursements for a specific contractor payment group.

scope: `partner_disbursements:read`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-contractor_payment_groups-id-partner_disbursements" method="get" path="/v1/contractor_payment_groups/{id}/partner_disbursements" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.contractorPaymentGroups.getV1ContractorPaymentGroupsIdPartnerDisbursements({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { contractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements } from "@gusto/embedded-api/funcs/contractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await contractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements(gustoEmbedded, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements failed:", res.error);
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
  useContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements,
  useContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements,
  invalidateAllContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements,
} from "@gusto/embedded-api/react-query/contractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1ContractorPaymentGroupsIdPartnerDisbursementsRequest](../../models/operations/getv1contractorpaymentgroupsidpartnerdisbursementsrequest.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1ContractorPaymentGroupsIdPartnerDisbursementsResponse](../../models/operations/getv1contractorpaymentgroupsidpartnerdisbursementsresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 404                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## patchV1ContractorPaymentGroupsIdPartnerDisbursements

Update partner disbursements for a specific contractor payment group.

scope: `partner_disbursements:write`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch-v1-contractor_payment_groups-id-partner_disbursements" method="patch" path="/v1/contractor_payment_groups/{id}/partner_disbursements" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.contractorPaymentGroups.patchV1ContractorPaymentGroupsIdPartnerDisbursements({
    id: "<id>",
    requestBody: {
      disbursements: [
        {
          contractorPaymentUuid: "9f8e7d6c-5b4a-3928-1c2d-3e4f5a6b7c8d",
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
import { contractorPaymentGroupsPatchV1ContractorPaymentGroupsIdPartnerDisbursements } from "@gusto/embedded-api/funcs/contractorPaymentGroupsPatchV1ContractorPaymentGroupsIdPartnerDisbursements.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await contractorPaymentGroupsPatchV1ContractorPaymentGroupsIdPartnerDisbursements(gustoEmbedded, {
    id: "<id>",
    requestBody: {
      disbursements: [
        {
          contractorPaymentUuid: "9f8e7d6c-5b4a-3928-1c2d-3e4f5a6b7c8d",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contractorPaymentGroupsPatchV1ContractorPaymentGroupsIdPartnerDisbursements failed:", res.error);
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
  useContractorPaymentGroupsPatchV1ContractorPaymentGroupsIdPartnerDisbursementsMutation
} from "@gusto/embedded-api/react-query/contractorPaymentGroupsPatchV1ContractorPaymentGroupsIdPartnerDisbursements.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV1ContractorPaymentGroupsIdPartnerDisbursementsRequest](../../models/operations/patchv1contractorpaymentgroupsidpartnerdisbursementsrequest.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV1ContractorPaymentGroupsIdPartnerDisbursementsResponse](../../models/operations/patchv1contractorpaymentgroupsidpartnerdisbursementsresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |