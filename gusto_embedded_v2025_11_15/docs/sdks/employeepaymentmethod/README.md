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

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="post-v1-employees-employee_id-bank_accounts" method="post" path="/v1/employees/{employee_id}/bank_accounts" example="Basic" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.create({
    employeeId: "<id>",
    body: {
      name: "<value>",
      routingNumber: "<value>",
      accountNumber: "<value>",
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
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodCreate } from "openapi/funcs/employee-payment-method-create.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodCreate(sdk, {
    employeeId: "<id>",
    body: {
      name: "<value>",
      routingNumber: "<value>",
      accountNumber: "<value>",
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
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="post-v1-employees-employee_id-bank_accounts" method="post" path="/v1/employees/{employee_id}/bank_accounts" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.create({
    employeeId: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodCreate } from "openapi/funcs/employee-payment-method-create.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodCreate(sdk, {
    employeeId: "<id>",
    body: {
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
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="post-v1-employees-employee_id-bank_accounts" method="post" path="/v1/employees/{employee_id}/bank_accounts" example="Nested" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.create({
    employeeId: "<id>",
    body: {
      name: "<value>",
      routingNumber: "<value>",
      accountNumber: "<value>",
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
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodCreate } from "openapi/funcs/employee-payment-method-create.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodCreate(sdk, {
    employeeId: "<id>",
    body: {
      name: "<value>",
      routingNumber: "<value>",
      accountNumber: "<value>",
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
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="post-v1-employees-employee_id-bank_accounts" method="post" path="/v1/employees/{employee_id}/bank_accounts" example="Resource" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.create({
    employeeId: "<id>",
    body: {
      name: "<value>",
      routingNumber: "<value>",
      accountNumber: "<value>",
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
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodCreate } from "openapi/funcs/employee-payment-method-create.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodCreate(sdk, {
    employeeId: "<id>",
    body: {
      name: "<value>",
      routingNumber: "<value>",
      accountNumber: "<value>",
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1EmployeesEmployeeIdBankAccountsRequest](../../models/operations/post-v1-employees-employee-id-bank-accounts-request.md)                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmployeeBankAccount](../../models/employee-bank-account.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## deleteBankAccount

Deletes an employee bank account. To update an employee's bank
account details, delete the bank account first and create a new one.

scope: `employee_payment_methods:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-v1-employees-employee_id-bank_accounts-bank_account_id" method="delete" path="/v1/employees/{employee_id}/bank_accounts/{bank_account_uuid}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await sdk.employeePaymentMethod.deleteBankAccount({
    employeeId: "<id>",
    bankAccountUuid: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodDeleteBankAccount } from "openapi/funcs/employee-payment-method-delete-bank-account.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodDeleteBankAccount(sdk, {
    employeeId: "<id>",
    bankAccountUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("employeePaymentMethodDeleteBankAccount failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest](../../models/operations/delete-v1-employees-employee-id-bank-accounts-bank-account-id-request.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## updateBankAccount

Updates an employee bank account.

scope: `employee_payment_methods:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="put-v1-employees-employee_id-bank_accounts" method="put" path="/v1/employees/{employee_id}/bank_accounts/{bank_account_uuid}" example="Basic" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.updateBankAccount({
    employeeId: "<id>",
    bankAccountUuid: "<id>",
    body: {
      name: "<value>",
      routingNumber: "<value>",
      accountNumber: "<value>",
      accountType: "Savings",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodUpdateBankAccount } from "openapi/funcs/employee-payment-method-update-bank-account.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodUpdateBankAccount(sdk, {
    employeeId: "<id>",
    bankAccountUuid: "<id>",
    body: {
      name: "<value>",
      routingNumber: "<value>",
      accountNumber: "<value>",
      accountType: "Savings",
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
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="put-v1-employees-employee_id-bank_accounts" method="put" path="/v1/employees/{employee_id}/bank_accounts/{bank_account_uuid}" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.updateBankAccount({
    employeeId: "<id>",
    bankAccountUuid: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodUpdateBankAccount } from "openapi/funcs/employee-payment-method-update-bank-account.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodUpdateBankAccount(sdk, {
    employeeId: "<id>",
    bankAccountUuid: "<id>",
    body: {
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
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="put-v1-employees-employee_id-bank_accounts" method="put" path="/v1/employees/{employee_id}/bank_accounts/{bank_account_uuid}" example="Nested" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.updateBankAccount({
    employeeId: "<id>",
    bankAccountUuid: "<id>",
    body: {
      name: "<value>",
      routingNumber: "<value>",
      accountNumber: "<value>",
      accountType: "Savings",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodUpdateBankAccount } from "openapi/funcs/employee-payment-method-update-bank-account.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodUpdateBankAccount(sdk, {
    employeeId: "<id>",
    bankAccountUuid: "<id>",
    body: {
      name: "<value>",
      routingNumber: "<value>",
      accountNumber: "<value>",
      accountType: "Savings",
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
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="put-v1-employees-employee_id-bank_accounts" method="put" path="/v1/employees/{employee_id}/bank_accounts/{bank_account_uuid}" example="Resource" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.updateBankAccount({
    employeeId: "<id>",
    bankAccountUuid: "<id>",
    body: {
      name: "<value>",
      routingNumber: "<value>",
      accountNumber: "<value>",
      accountType: "Savings",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodUpdateBankAccount } from "openapi/funcs/employee-payment-method-update-bank-account.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodUpdateBankAccount(sdk, {
    employeeId: "<id>",
    bankAccountUuid: "<id>",
    body: {
      name: "<value>",
      routingNumber: "<value>",
      accountNumber: "<value>",
      accountType: "Savings",
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1EmployeesEmployeeIdBankAccountsRequest](../../models/operations/put-v1-employees-employee-id-bank-accounts-request.md)                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmployeeBankAccount](../../models/employee-bank-account.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## get

Fetches an employee's payment method. An employee payment method
describes how the payment should be split across the employee's associated
bank accounts.

scope: `employee_payment_methods:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-employees-employee_id-payment_method" method="get" path="/v1/employees/{employee_id}/payment_method" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.get({
    employeeId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodGet } from "openapi/funcs/employee-payment-method-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodGet(sdk, {
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1EmployeesEmployeeIdPaymentMethodRequest](../../models/operations/get-v1-employees-employee-id-payment-method-request.md)                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmployeePaymentMethod](../../models/employee-payment-method.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## update

Updates an employee's payment method. Note that creating an employee
bank account will also update the employee's payment method.

scope: `employee_payment_methods:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="put-v1-employees-employee_id-payment_method" method="put" path="/v1/employees/{employee_id}/payment_method" example="Basic" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.update({
    employeeId: "<id>",
    body: {
      version: "<value>",
      type: "Direct Deposit",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodUpdate } from "openapi/funcs/employee-payment-method-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodUpdate(sdk, {
    employeeId: "<id>",
    body: {
      version: "<value>",
      type: "Direct Deposit",
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
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="put-v1-employees-employee_id-payment_method" method="put" path="/v1/employees/{employee_id}/payment_method" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.update({
    employeeId: "<id>",
    body: {
      version: "<value>",
      type: "Direct Deposit",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodUpdate } from "openapi/funcs/employee-payment-method-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodUpdate(sdk, {
    employeeId: "<id>",
    body: {
      version: "<value>",
      type: "Direct Deposit",
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
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="put-v1-employees-employee_id-payment_method" method="put" path="/v1/employees/{employee_id}/payment_method" example="Nested" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.update({
    employeeId: "<id>",
    body: {
      version: "<value>",
      type: "Direct Deposit",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodUpdate } from "openapi/funcs/employee-payment-method-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodUpdate(sdk, {
    employeeId: "<id>",
    body: {
      version: "<value>",
      type: "Direct Deposit",
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
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="put-v1-employees-employee_id-payment_method" method="put" path="/v1/employees/{employee_id}/payment_method" example="Resource" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.update({
    employeeId: "<id>",
    body: {
      version: "<value>",
      type: "Direct Deposit",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodUpdate } from "openapi/funcs/employee-payment-method-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodUpdate(sdk, {
    employeeId: "<id>",
    body: {
      version: "<value>",
      type: "Direct Deposit",
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
### Example Usage: example-1

<!-- UsageSnippet language="typescript" operationID="put-v1-employees-employee_id-payment_method" method="put" path="/v1/employees/{employee_id}/payment_method" example="example-1" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.update({
    employeeId: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodUpdate } from "openapi/funcs/employee-payment-method-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodUpdate(sdk, {
    employeeId: "<id>",
    body: {
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
### Example Usage: example-2

<!-- UsageSnippet language="typescript" operationID="put-v1-employees-employee_id-payment_method" method="put" path="/v1/employees/{employee_id}/payment_method" example="example-2" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.update({
    employeeId: "<id>",
    body: {
      version: "63859768485e218ccf8a449bb60f14ed",
      type: "Direct Deposit",
      splitBy: "Percentage",
      splits: [
        {
          uuid: "e88f9436-b74e-49a8-87e9-777b9bfe715e",
          name: "BoA Checking Account",
          priority: 1,
          splitAmount: 60,
        },
        {
          uuid: "0d2b7f73-05d6-4184-911d-269edeecc30a",
          name: "Chase Checking Account",
          priority: 2,
          splitAmount: 40,
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
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodUpdate } from "openapi/funcs/employee-payment-method-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodUpdate(sdk, {
    employeeId: "<id>",
    body: {
      version: "63859768485e218ccf8a449bb60f14ed",
      type: "Direct Deposit",
      splitBy: "Percentage",
      splits: [
        {
          uuid: "e88f9436-b74e-49a8-87e9-777b9bfe715e",
          name: "BoA Checking Account",
          priority: 1,
          splitAmount: 60,
        },
        {
          uuid: "0d2b7f73-05d6-4184-911d-269edeecc30a",
          name: "Chase Checking Account",
          priority: 2,
          splitAmount: 40,
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
### Example Usage: example-3

<!-- UsageSnippet language="typescript" operationID="put-v1-employees-employee_id-payment_method" method="put" path="/v1/employees/{employee_id}/payment_method" example="example-3" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeePaymentMethod.update({
    employeeId: "<id>",
    body: {
      version: "63859768485e218ccf8a449bb60f14ed",
      type: "Check",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeePaymentMethodUpdate } from "openapi/funcs/employee-payment-method-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeePaymentMethodUpdate(sdk, {
    employeeId: "<id>",
    body: {
      version: "63859768485e218ccf8a449bb60f14ed",
      type: "Check",
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1EmployeesEmployeeIdPaymentMethodRequest](../../models/operations/put-v1-employees-employee-id-payment-method-request.md)                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmployeePaymentMethod](../../models/employee-payment-method.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |