# EmployeePaymentMethods
(*employeePaymentMethods*)

## Overview

### Available Operations

* [delete](#delete) - Delete an employee bank account
* [update](#update) - Update an employee's payment method

## delete

Deletes an employee bank account. To update an employee's bank
account details, delete the bank account first and create a new one.

scope: `employee_payment_methods:write`

### Example Usage

```typescript
import { GustoEmbedded } from "gusto_embedded";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await gustoEmbedded.employeePaymentMethods.delete({
    employeeId: "<id>",
    bankAccountUuid: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "gusto_embedded/core.js";
import { employeePaymentMethodsDelete } from "gusto_embedded/funcs/employeePaymentMethodsDelete.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodsDelete(gustoEmbedded, {
    employeeId: "<id>",
    bankAccountUuid: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest](../../models/operations/deletev1employeesemployeeidbankaccountsbankaccountidrequest.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Updates an employee's payment method. Note that creating an employee
bank account will also update the employee's payment method.

scope: `employee_payment_methods:write`

### Example Usage

```typescript
import { GustoEmbedded } from "gusto_embedded";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await gustoEmbedded.employeePaymentMethods.update({
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
import { GustoEmbeddedCore } from "gusto_embedded/core.js";
import { employeePaymentMethodsUpdate } from "gusto_embedded/funcs/employeePaymentMethodsUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodsUpdate(gustoEmbedded, {
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