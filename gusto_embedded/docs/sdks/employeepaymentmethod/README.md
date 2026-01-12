# EmployeePaymentMethod

## Overview

### Available Operations

* [create](#create) - Create an employee bank account
* [deleteBankAccount](#deletebankaccount) - Delete an employee bank account
* [updateBankAccount](#updatebankaccount) - Update an employee bank account
* [get](#get) - Get an employee's payment method
* [update](#update) - Update an employee's payment method

## create

Creates an employee bank account. An employee can have multiple
bank accounts. Note that creating an employee bank account will also update
the employee's payment method.

scope: `employee_payment_methods:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-employees-employee_id-bank_accounts" method="post" path="/v1/employees/{employee_id}/bank_accounts" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeePaymentMethod.create({
    employeeId: "<id>",
    requestBody: {
      name: "BoA Checking Account",
      routingNumber: "266905059",
      accountNumber: "5809431207",
      accountType: "Checking",
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
import { employeePaymentMethodCreate } from "@gusto/embedded-api/funcs/employeePaymentMethodCreate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeePaymentMethodCreate(gustoEmbedded, {
    employeeId: "<id>",
    requestBody: {
      name: "BoA Checking Account",
      routingNumber: "266905059",
      accountNumber: "5809431207",
      accountType: "Checking",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeePaymentMethodCreate failed:", res.error);
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
  useEmployeePaymentMethodCreateMutation
} from "@gusto/embedded-api/react-query/employeePaymentMethodCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1EmployeesEmployeeIdBankAccountsRequest](../../models/operations/postv1employeesemployeeidbankaccountsrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1EmployeesEmployeeIdBankAccountsResponse](../../models/operations/postv1employeesemployeeidbankaccountsresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## deleteBankAccount

Deletes an employee bank account. To update an employee's bank
account details, delete the bank account first and create a new one.

scope: `employee_payment_methods:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-v1-employees-employee_id-bank_accounts-bank_account_id" method="delete" path="/v1/employees/{employee_id}/bank_accounts/{bank_account_uuid}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeePaymentMethod.deleteBankAccount({
    employeeId: "<id>",
    bankAccountUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeePaymentMethodDeleteBankAccount } from "@gusto/embedded-api/funcs/employeePaymentMethodDeleteBankAccount.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeePaymentMethodDeleteBankAccount(gustoEmbedded, {
    employeeId: "<id>",
    bankAccountUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeePaymentMethodDeleteBankAccount failed:", res.error);
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
  useEmployeePaymentMethodDeleteBankAccountMutation
} from "@gusto/embedded-api/react-query/employeePaymentMethodDeleteBankAccount.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest](../../models/operations/deletev1employeesemployeeidbankaccountsbankaccountidrequest.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse](../../models/operations/deletev1employeesemployeeidbankaccountsbankaccountidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateBankAccount

Updates an employee bank account.

scope: `employee_payment_methods:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-employees-employee_id-bank_accounts" method="put" path="/v1/employees/{employee_id}/bank_accounts/{bank_account_uuid}" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeePaymentMethod.updateBankAccount({
    employeeId: "<id>",
    bankAccountUuid: "<id>",
    requestBody: {
      name: "BoA Checking Account",
      routingNumber: "266905059",
      accountNumber: "5809431207",
      accountType: "Checking",
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
import { employeePaymentMethodUpdateBankAccount } from "@gusto/embedded-api/funcs/employeePaymentMethodUpdateBankAccount.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeePaymentMethodUpdateBankAccount(gustoEmbedded, {
    employeeId: "<id>",
    bankAccountUuid: "<id>",
    requestBody: {
      name: "BoA Checking Account",
      routingNumber: "266905059",
      accountNumber: "5809431207",
      accountType: "Checking",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeePaymentMethodUpdateBankAccount failed:", res.error);
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
  useEmployeePaymentMethodUpdateBankAccountMutation
} from "@gusto/embedded-api/react-query/employeePaymentMethodUpdateBankAccount.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1EmployeesEmployeeIdBankAccountsRequest](../../models/operations/putv1employeesemployeeidbankaccountsrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1EmployeesEmployeeIdBankAccountsResponse](../../models/operations/putv1employeesemployeeidbankaccountsresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## get

Fetches an employee's payment method. An employee payment method
describes how the payment should be split across the employee's associated
bank accounts.

scope: `employee_payment_methods:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-employees-employee_id-payment_method" method="get" path="/v1/employees/{employee_id}/payment_method" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeePaymentMethod.get({
    employeeId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeePaymentMethodGet } from "@gusto/embedded-api/funcs/employeePaymentMethodGet.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeePaymentMethodGet(gustoEmbedded, {
    employeeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeePaymentMethodGet failed:", res.error);
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
  useEmployeePaymentMethodGet,
  useEmployeePaymentMethodGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchEmployeePaymentMethodGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateEmployeePaymentMethodGet,
  invalidateAllEmployeePaymentMethodGet,
} from "@gusto/embedded-api/react-query/employeePaymentMethodGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1EmployeesEmployeeIdPaymentMethodRequest](../../models/operations/getv1employeesemployeeidpaymentmethodrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1EmployeesEmployeeIdPaymentMethodResponse](../../models/operations/getv1employeesemployeeidpaymentmethodresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Updates an employee's payment method. Note that creating an employee
bank account will also update the employee's payment method.

scope: `employee_payment_methods:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-employees-employee_id-payment_method" method="put" path="/v1/employees/{employee_id}/payment_method" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeePaymentMethod.update({
    employeeId: "<id>",
    requestBody: {
      version: "63859768485e218ccf8a449bb60f14ed",
      type: "Direct Deposit",
      splitBy: "Amount",
      splits: [
        {
          uuid: "e88f9436-b74e-49a8-87e9-777b9bfe715e",
          name: "BoA Checking Account",
          priority: 1,
          splitAmount: 50000,
        },
        {
          uuid: "0d2b7f73-05d6-4184-911d-269edeecc30a",
          name: "Chase Checking Account",
          priority: 2,
          splitAmount: 100000,
        },
        {
          uuid: "1531e824-8d9e-4bd8-9f90-0d04608125d7",
          name: "US Bank Checking Account",
          priority: 3,
          splitAmount: null,
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
import { employeePaymentMethodUpdate } from "@gusto/embedded-api/funcs/employeePaymentMethodUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeePaymentMethodUpdate(gustoEmbedded, {
    employeeId: "<id>",
    requestBody: {
      version: "63859768485e218ccf8a449bb60f14ed",
      type: "Direct Deposit",
      splitBy: "Amount",
      splits: [
        {
          uuid: "e88f9436-b74e-49a8-87e9-777b9bfe715e",
          name: "BoA Checking Account",
          priority: 1,
          splitAmount: 50000,
        },
        {
          uuid: "0d2b7f73-05d6-4184-911d-269edeecc30a",
          name: "Chase Checking Account",
          priority: 2,
          splitAmount: 100000,
        },
        {
          uuid: "1531e824-8d9e-4bd8-9f90-0d04608125d7",
          name: "US Bank Checking Account",
          priority: 3,
          splitAmount: null,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeePaymentMethodUpdate failed:", res.error);
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
  useEmployeePaymentMethodUpdateMutation
} from "@gusto/embedded-api/react-query/employeePaymentMethodUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1EmployeesEmployeeIdPaymentMethodRequest](../../models/operations/putv1employeesemployeeidpaymentmethodrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1EmployeesEmployeeIdPaymentMethodResponse](../../models/operations/putv1employeesemployeeidpaymentmethodresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |