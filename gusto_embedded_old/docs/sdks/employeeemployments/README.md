# EmployeeEmployments
(*employeeEmployments*)

## Overview

### Available Operations

* [createTermination](#createtermination) - Create an employee termination
* [getTerminations](#getterminations) - Get terminations for an employee
* [deleteTermination](#deletetermination) - Delete an employee termination
* [updateTermination](#updatetermination) - Update an employee termination
* [rehire](#rehire) - Create an employee rehire
* [updateRehire](#updaterehire) - Update an employee rehire
* [getRehire](#getrehire) - Get an employee rehire
* [deleteRehire](#deleterehire) - Delete an employee rehire
* [getHistory](#gethistory) - Get employment history for an employee

## createTermination

Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.

Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.

scope: `employments:write`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeEmployments.createTermination({
    employeeId: "<id>",
    requestBody: {
      effectiveDate: "2020-06-30",
      runTerminationPayroll: true,
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
import { employeeEmploymentsCreateTermination } from "openapi/funcs/employeeEmploymentsCreateTermination.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeEmploymentsCreateTermination(sdk, {
    employeeId: "<id>",
    requestBody: {
      effectiveDate: "2020-06-30",
      runTerminationPayroll: true,
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
| `request`                                                                                                                                                                      | [operations.PostV1EmployeesEmployeeIdTerminationsRequest](../../models/operations/postv1employeesemployeeidterminationsrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Termination](../../models/components/termination.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## getTerminations

Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.

Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.

scope: `employments:read`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeEmployments.getTerminations({
    employeeId: "<id>",
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
import { employeeEmploymentsGetTerminations } from "openapi/funcs/employeeEmploymentsGetTerminations.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeEmploymentsGetTerminations(sdk, {
    employeeId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetV1EmployeesEmployeeIdTerminationsRequest](../../models/operations/getv1employeesemployeeidterminationsrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Termination[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteTermination

Delete an employee termination.

scope: `employments:write`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await sdk.employeeEmployments.deleteTermination({
    employeeId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeeEmploymentsDeleteTermination } from "openapi/funcs/employeeEmploymentsDeleteTermination.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeEmploymentsDeleteTermination(sdk, {
    employeeId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteV1EmployeesEmployeeIdTerminationsRequest](../../models/operations/deletev1employeesemployeeidterminationsrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 404                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## updateTermination

Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.

Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.

scope: `employments:write`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeEmployments.updateTermination({
    employeeId: "<id>",
    requestBody: {
      version: "1928d0c378e519e9c03fb959bc959a6b",
      effectiveDate: "2020-06-30",
      runTerminationPayroll: true,
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
import { employeeEmploymentsUpdateTermination } from "openapi/funcs/employeeEmploymentsUpdateTermination.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeEmploymentsUpdateTermination(sdk, {
    employeeId: "<id>",
    requestBody: {
      version: "1928d0c378e519e9c03fb959bc959a6b",
      effectiveDate: "2020-06-30",
      runTerminationPayroll: true,
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
| `request`                                                                                                                                                                      | [operations.PutV1TerminationsEmployeeIdRequest](../../models/operations/putv1terminationsemployeeidrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Termination](../../models/components/termination.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 404, 422                              | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## rehire

Rehire is created whenever an employee is scheduled to return to the company.

scope: `employments:write`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeEmployments.rehire({
    employeeId: "<id>",
    rehireBody: {
      effectiveDate: "2023-06-30",
      fileNewHireReport: true,
      workLocationUuid: "b6ae9d93-d4b8-4119-8c96-dba595dd8c30",
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
import { employeeEmploymentsRehire } from "openapi/funcs/employeeEmploymentsRehire.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeEmploymentsRehire(sdk, {
    employeeId: "<id>",
    rehireBody: {
      effectiveDate: "2023-06-30",
      fileNewHireReport: true,
      workLocationUuid: "b6ae9d93-d4b8-4119-8c96-dba595dd8c30",
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
| `request`                                                                                                                                                                      | [operations.PostV1EmployeesEmployeeIdRehireRequest](../../models/operations/postv1employeesemployeeidrehirerequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Rehire](../../models/components/rehire.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## updateRehire

Update an employee's rehire.

scope: `employments:write`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeEmployments.updateRehire({
    employeeId: "<id>",
    requestBody: {
      version: "1928d0c378e519e9c03fb959bc959a6b",
      effectiveDate: "2023-06-30",
      fileNewHireReport: true,
      workLocationUuid: "b6ae9d93-d4b8-4119-8c96-dba595dd8c30",
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
import { employeeEmploymentsUpdateRehire } from "openapi/funcs/employeeEmploymentsUpdateRehire.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeEmploymentsUpdateRehire(sdk, {
    employeeId: "<id>",
    requestBody: {
      version: "1928d0c378e519e9c03fb959bc959a6b",
      effectiveDate: "2023-06-30",
      fileNewHireReport: true,
      workLocationUuid: "b6ae9d93-d4b8-4119-8c96-dba595dd8c30",
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
| `request`                                                                                                                                                                      | [operations.PutV1EmployeesEmployeeIdRehireRequest](../../models/operations/putv1employeesemployeeidrehirerequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Rehire](../../models/components/rehire.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 404, 422                              | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## getRehire

Retrieve an employee's rehire, which contains information on when the employee returns to work.

scope: `employments:read`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeEmployments.getRehire({
    employeeId: "<id>",
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
import { employeeEmploymentsGetRehire } from "openapi/funcs/employeeEmploymentsGetRehire.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeEmploymentsGetRehire(sdk, {
    employeeId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetV1EmployeesEmployeeIdRehireRequest](../../models/operations/getv1employeesemployeeidrehirerequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Rehire](../../models/components/rehire.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 404                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## deleteRehire

Delete an employee rehire. An employee rehire cannot be deleted if it's active (past effective date).

scope: `employments:write`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await sdk.employeeEmployments.deleteRehire({
    employeeId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeeEmploymentsDeleteRehire } from "openapi/funcs/employeeEmploymentsDeleteRehire.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeEmploymentsDeleteRehire(sdk, {
    employeeId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteV1EmployeesEmployeeIdRehireRequest](../../models/operations/deletev1employeesemployeeidrehirerequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 404                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## getHistory

Retrieve the employment history for a given employee, which includes termination and rehire.

scope: `employments:read`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeEmployments.getHistory({
    employeeId: "<id>",
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
import { employeeEmploymentsGetHistory } from "openapi/funcs/employeeEmploymentsGetHistory.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeEmploymentsGetHistory(sdk, {
    employeeId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetV1EmployeesEmployeeIdEmploymentHistoryRequest](../../models/operations/getv1employeesemployeeidemploymenthistoryrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EmploymentHistoryList[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |