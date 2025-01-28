# ContractorPaymentGroups
(*contractorPaymentGroups*)

## Overview

### Available Operations

* [create](#create) - Create a contractor payment group
* [list](#list) - Get contractor payment groups for a company
* [preview](#preview) - Preview a contractor payment group
* [get](#get) - Fetch a contractor payment group
* [delete](#delete) - Cancel a contractor payment group
* [fund](#fund) - Fund a contractor payment group [DEMO]

## create

Pay a group of contractors. Information needed depends on the contractor's wage type (hourly vs fixed)

scope: `payrolls:run`

### Example Usage

```typescript
import { SDK } from "openapi";
import { RFCDate } from "openapi/types";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.contractorPaymentGroups.create({
    companyId: "<id>",
    requestBody: {
      checkDate: new RFCDate("2020-01-01"),
      creationToken: "1d532d13-8f61-4a57-ad3c-b5fac1c6e05e",
      contractorPayments: [

      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { contractorPaymentGroupsCreate } from "openapi/funcs/contractorPaymentGroupsCreate.js";
import { RFCDate } from "openapi/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await contractorPaymentGroupsCreate(sdk, {
    companyId: "<id>",
    requestBody: {
      checkDate: new RFCDate("2020-01-01"),
      creationToken: "1d532d13-8f61-4a57-ad3c-b5fac1c6e05e",
      contractorPayments: [
  
      ],
    },
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyIdContractorPaymentGroupsRequest](../../models/operations/postv1companiescompanyidcontractorpaymentgroupsrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ContractorPaymentGroup](../../models/components/contractorpaymentgroup.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## list

Returns a list of minimal contractor payment groups within a given time period, including totals but not associated contractor payments.

scope: `payrolls:read`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.contractorPaymentGroups.list({
    companyId: "<id>",
    startDate: "2020-01-01",
    endDate: "2020-12-31",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { contractorPaymentGroupsList } from "openapi/funcs/contractorPaymentGroupsList.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await contractorPaymentGroupsList(sdk, {
    companyId: "<id>",
    startDate: "2020-01-01",
    endDate: "2020-12-31",
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest](../../models/operations/getv1companiescompanyidcontractorpaymentgroupsrequest.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ContractorPaymentGroupMinimal[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## preview

Preview a group of contractor payments. Request will validate inputs and return preview of the contractor payment group including the expected debit_date.  Uuid will be null in the response.

scope: `payrolls:read`

### Example Usage

```typescript
import { SDK } from "openapi";
import { RFCDate } from "openapi/types";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.contractorPaymentGroups.preview({
    companyId: "<id>",
    requestBody: {
      checkDate: new RFCDate("2020-01-01"),
      creationToken: "1d532d13-8f61-4a57-ad3c-b5fac1c6e05e",
      contractorPayments: [
        {
          paymentMethod: "Direct Deposit",
          wage: 5000,
          hours: 40,
          bonus: 500,
          reimbursement: 20,
        },
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { contractorPaymentGroupsPreview } from "openapi/funcs/contractorPaymentGroupsPreview.js";
import { RFCDate } from "openapi/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await contractorPaymentGroupsPreview(sdk, {
    companyId: "<id>",
    requestBody: {
      checkDate: new RFCDate("2020-01-01"),
      creationToken: "1d532d13-8f61-4a57-ad3c-b5fac1c6e05e",
      contractorPayments: [
        {
          paymentMethod: "Direct Deposit",
          wage: 5000,
          hours: 40,
          bonus: 500,
          reimbursement: 20,
        },
      ],
    },
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest](../../models/operations/postv1companiescompanyidcontractorpaymentgroupspreviewrequest.md)           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ContractorPaymentGroup](../../models/components/contractorpaymentgroup.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## get

Returns a contractor payment group with all associated contractor payments.

scope: `payrolls:read`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.contractorPaymentGroups.get({
    contractorPaymentGroupUuid: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { contractorPaymentGroupsGet } from "openapi/funcs/contractorPaymentGroupsGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await contractorPaymentGroupsGet(sdk, {
    contractorPaymentGroupUuid: "<id>",
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest](../../models/operations/getv1contractorpaymentgroupscontractorpaymentgroupidrequest.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ContractorPaymentGroup](../../models/components/contractorpaymentgroup.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## delete

Cancels a contractor payment group and all associated contractor payments. All contractor payments must be cancellable, unfunded.

scope: `payrolls:run`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await sdk.contractorPaymentGroups.delete({
    contractorPaymentGroupUuid: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { contractorPaymentGroupsDelete } from "openapi/funcs/contractorPaymentGroupsDelete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await contractorPaymentGroupsDelete(sdk, {
    contractorPaymentGroupUuid: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest](../../models/operations/deletev1contractorpaymentgroupscontractorpaymentgroupidrequest.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## fund

> 🚧 Demo action
>
> This action is only available in the Demo environment

Simulate funding a contractor payment group. Funding only occurs automatically in the production environment when bank transactions are generated. Use this action in the demo environment to transition a contractor payment group's `status` from `Unfunded` to `Funded`. A `Funded` status is required for generating a contractor payment receipt.

scope: `payrolls:run`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.contractorPaymentGroups.fund({
    contractorPaymentGroupUuid: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { contractorPaymentGroupsFund } from "openapi/funcs/contractorPaymentGroupsFund.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await contractorPaymentGroupsFund(sdk, {
    contractorPaymentGroupUuid: "<id>",
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest](../../models/operations/putv1contractorpaymentgroupscontractorpaymentgroupidfundrequest.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ContractorPaymentGroup](../../models/components/contractorpaymentgroup.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |