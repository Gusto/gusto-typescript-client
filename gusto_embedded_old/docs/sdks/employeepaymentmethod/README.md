# EmployeePaymentMethod
(*employeePaymentMethod*)

## Overview

### Available Operations

* [createAccount](#createaccount) - Create an employee bank account
* [updateBankAccount](#updatebankaccount) - Update an employee bank account
* [update](#update) - Update an employee's payment method

## createAccount

Creates an employee bank account. An employee can have multiple
bank accounts. Note that creating an employee bank account will also update
the employee's payment method.

scope: `employee_payment_methods:write`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.createAccount({
    employeeId: "<id>",
    requestBody: {
      name: "BoA Checking Account",
      routingNumber: "266905059",
      accountNumber: "5809431207",
      accountType: "Checking",
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
import { employeePaymentMethodCreateAccount } from "openapi/funcs/employeePaymentMethodCreateAccount.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodCreateAccount(sdk, {
    employeeId: "<id>",
    requestBody: {
      name: "BoA Checking Account",
      routingNumber: "266905059",
      accountNumber: "5809431207",
      accountType: "Checking",
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
| `request`                                                                                                                                                                      | [operations.PostV1EmployeesEmployeeIdBankAccountsRequest](../../models/operations/postv1employeesemployeeidbankaccountsrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EmployeeBankAccount](../../models/components/employeebankaccount.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## updateBankAccount

Updates an employee bank account.

scope: `employee_payment_methods:write`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.updateBankAccount({
    employeeId: "<id>",
    bankAccountUuid: "<id>",
    requestBody: {
      name: "BoA Checking Account",
      routingNumber: "266905059",
      accountNumber: "5809431207",
      accountType: "Checking",
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
import { employeePaymentMethodUpdateBankAccount } from "openapi/funcs/employeePaymentMethodUpdateBankAccount.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodUpdateBankAccount(sdk, {
    employeeId: "<id>",
    bankAccountUuid: "<id>",
    requestBody: {
      name: "BoA Checking Account",
      routingNumber: "266905059",
      accountNumber: "5809431207",
      accountType: "Checking",
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
| `request`                                                                                                                                                                      | [operations.PutV1EmployeesEmployeeIdBankAccountsRequest](../../models/operations/putv1employeesemployeeidbankaccountsrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EmployeeBankAccount](../../models/components/employeebankaccount.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## update

Updates an employee's payment method. Note that creating an employee
bank account will also update the employee's payment method.

scope: `employee_payment_methods:write`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.update({
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
          splitAmount: 500,
        },
        {
          uuid: "0d2b7f73-05d6-4184-911d-269edeecc30a",
          name: "Chase Checking Account",
          priority: 2,
          splitAmount: 1000,
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

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodUpdate } from "openapi/funcs/employeePaymentMethodUpdate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodUpdate(sdk, {
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
          splitAmount: 500,
        },
        {
          uuid: "0d2b7f73-05d6-4184-911d-269edeecc30a",
          name: "Chase Checking Account",
          priority: 2,
          splitAmount: 1000,
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
| `request`                                                                                                                                                                      | [operations.PutV1EmployeesEmployeeIdPaymentMethodRequest](../../models/operations/putv1employeesemployeeidpaymentmethodrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EmployeePaymentMethod](../../models/components/employeepaymentmethod.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |