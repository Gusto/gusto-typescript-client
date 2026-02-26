# EmployeeBenefits

## Overview

### Available Operations

* [create](#create) - Create an employee benefit
* [get](#get) - Get all benefits for an employee
* [retrieve](#retrieve) - Get an employee benefit
* [update](#update) - Update an employee benefit
* [delete](#delete) - Delete an employee benefit
* [getYtdBenefitAmountsFromDifferentCompany](#getytdbenefitamountsfromdifferentcompany) - Get year-to-date benefit amounts from a different company
* [createYtdBenefitAmountsFromDifferentCompany](#createytdbenefitamountsfromdifferentcompany) - Create year-to-date benefit amounts from a different company
* [getV1EmployeesEmployeeUuidSection603HighEarnerStatuses](#getv1employeesemployeeuuidsection603highearnerstatuses) - Get all Section 603 high earner statuses for an employee
* [postV1EmployeesEmployeeUuidSection603HighEarnerStatuses](#postv1employeesemployeeuuidsection603highearnerstatuses) - Create a Section 603 high earner status
* [getV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear](#getv1employeesemployeeuuidsection603highearnerstatuseseffectiveyear) - Get a Section 603 high earner status for a specific year
* [patchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear](#patchv1employeesemployeeuuidsection603highearnerstatuseseffectiveyear) - Update a Section 603 high earner status

## create

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee's enrollment.

When the application has the `employee_benefits:write:benefit_type_limited` data scope, the application can only create employee benefits for benefit types that are permitted for the application.

scope: `employee_benefits:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="post-v1-employees-employee_id-employee_benefits" method="post" path="/v1/employees/{employee_id}/employee_benefits" example="Basic" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.create({
    employeeId: "<id>",
    body: {
      companyBenefitUuid: "<id>",
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
import { employeeBenefitsCreate } from "openapi/funcs/employee-benefits-create.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsCreate(sdk, {
    employeeId: "<id>",
    body: {
      companyBenefitUuid: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="post-v1-employees-employee_id-employee_benefits" method="post" path="/v1/employees/{employee_id}/employee_benefits" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.create({
    employeeId: "<id>",
    body: {
      companyBenefitUuid: "f68abb42-431e-4392-bc3f-2795627e00f3",
      employeeDeduction: "100.00",
      contribution: {
        type: "amount",
        value: "100.00",
      },
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
import { employeeBenefitsCreate } from "openapi/funcs/employee-benefits-create.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsCreate(sdk, {
    employeeId: "<id>",
    body: {
      companyBenefitUuid: "f68abb42-431e-4392-bc3f-2795627e00f3",
      employeeDeduction: "100.00",
      contribution: {
        type: "amount",
        value: "100.00",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="post-v1-employees-employee_id-employee_benefits" method="post" path="/v1/employees/{employee_id}/employee_benefits" example="Nested" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.create({
    employeeId: "<id>",
    body: {
      companyBenefitUuid: "<id>",
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
import { employeeBenefitsCreate } from "openapi/funcs/employee-benefits-create.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsCreate(sdk, {
    employeeId: "<id>",
    body: {
      companyBenefitUuid: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="post-v1-employees-employee_id-employee_benefits" method="post" path="/v1/employees/{employee_id}/employee_benefits" example="Resource" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.create({
    employeeId: "<id>",
    body: {
      companyBenefitUuid: "<id>",
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
import { employeeBenefitsCreate } from "openapi/funcs/employee-benefits-create.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsCreate(sdk, {
    employeeId: "<id>",
    body: {
      companyBenefitUuid: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: Tiered example

<!-- UsageSnippet language="typescript" operationID="post-v1-employees-employee_id-employee_benefits" method="post" path="/v1/employees/{employee_id}/employee_benefits" example="Tiered example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.create({
    employeeId: "<id>",
    body: {
      companyBenefitUuid: "<id>",
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
import { employeeBenefitsCreate } from "openapi/funcs/employee-benefits-create.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsCreate(sdk, {
    employeeId: "<id>",
    body: {
      companyBenefitUuid: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1EmployeesEmployeeIdEmployeeBenefitsRequest](../../models/operations/post-v1-employees-employee-id-employee-benefits-request.md)                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmployeeBenefit](../../models/employee-benefit.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## get

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

Returns an array of all employee benefits for this employee

Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.

scope: `employee_benefits:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-employees-employee_id-employee_benefits" method="get" path="/v1/employees/{employee_id}/employee_benefits" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.get({
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
import { employeeBenefitsGet } from "openapi/funcs/employee-benefits-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsGet(sdk, {
    employeeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1EmployeesEmployeeIdEmployeeBenefitsRequest](../../models/operations/get-v1-employees-employee-id-employee-benefits-request.md)                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmployeeBenefit[]](../../models/.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## retrieve

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.

scope: `employee_benefits:read`

### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="get-v1-employee_benefits-employee_benefit_id" method="get" path="/v1/employee_benefits/{employee_benefit_id}" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.retrieve({
    employeeBenefitId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeeBenefitsRetrieve } from "openapi/funcs/employee-benefits-retrieve.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsRetrieve(sdk, {
    employeeBenefitId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsRetrieve failed:", res.error);
  }
}

run();
```
### Example Usage: Tiered example

<!-- UsageSnippet language="typescript" operationID="get-v1-employee_benefits-employee_benefit_id" method="get" path="/v1/employee_benefits/{employee_benefit_id}" example="Tiered example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.retrieve({
    employeeBenefitId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeeBenefitsRetrieve } from "openapi/funcs/employee-benefits-retrieve.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsRetrieve(sdk, {
    employeeBenefitId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsRetrieve failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1EmployeeBenefitsEmployeeBenefitIdRequest](../../models/operations/get-v1-employee-benefits-employee-benefit-id-request.md)                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmployeeBenefit](../../models/employee-benefit.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## update

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee's enrollment.

When the application has the `employee_benefits:write:benefit_type_limited` data scope, the application can only update employee benefits for benefit types that are permitted for the application.

scope: `employee_benefits:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="put-v1-employee_benefits-employee_benefit_id" method="put" path="/v1/employee_benefits/{employee_benefit_id}" example="Basic" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.update({
    employeeBenefitId: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { employeeBenefitsUpdate } from "openapi/funcs/employee-benefits-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsUpdate(sdk, {
    employeeBenefitId: "<id>",
    body: {
      version: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="put-v1-employee_benefits-employee_benefit_id" method="put" path="/v1/employee_benefits/{employee_benefit_id}" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.update({
    employeeBenefitId: "<id>",
    body: {
      version: "09j3d29jqdpj92109j9j2d90dq",
      employeeDeduction: "250.00",
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
import { employeeBenefitsUpdate } from "openapi/funcs/employee-benefits-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsUpdate(sdk, {
    employeeBenefitId: "<id>",
    body: {
      version: "09j3d29jqdpj92109j9j2d90dq",
      employeeDeduction: "250.00",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="put-v1-employee_benefits-employee_benefit_id" method="put" path="/v1/employee_benefits/{employee_benefit_id}" example="Nested" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.update({
    employeeBenefitId: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { employeeBenefitsUpdate } from "openapi/funcs/employee-benefits-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsUpdate(sdk, {
    employeeBenefitId: "<id>",
    body: {
      version: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="put-v1-employee_benefits-employee_benefit_id" method="put" path="/v1/employee_benefits/{employee_benefit_id}" example="Resource" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.update({
    employeeBenefitId: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { employeeBenefitsUpdate } from "openapi/funcs/employee-benefits-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsUpdate(sdk, {
    employeeBenefitId: "<id>",
    body: {
      version: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: Tiered example

<!-- UsageSnippet language="typescript" operationID="put-v1-employee_benefits-employee_benefit_id" method="put" path="/v1/employee_benefits/{employee_benefit_id}" example="Tiered example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.update({
    employeeBenefitId: "<id>",
    body: {
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
import { SDKCore } from "openapi/core.js";
import { employeeBenefitsUpdate } from "openapi/funcs/employee-benefits-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsUpdate(sdk, {
    employeeBenefitId: "<id>",
    body: {
      version: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1EmployeeBenefitsEmployeeBenefitIdRequest](../../models/operations/put-v1-employee-benefits-employee-benefit-id-request.md)                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmployeeBenefit](../../models/employee-benefit.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## delete

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee's enrollment.

When the application has the `employee_benefits:write:benefit_type_limited` data scope, the application can only delete employee benefits for benefit types that are permitted for the application.

scope: `employee_benefits:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-v1-employee_benefits-employee_benefit_id" method="delete" path="/v1/employee_benefits/{employee_benefit_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await sdk.employeeBenefits.delete({
    employeeBenefitId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeeBenefitsDelete } from "openapi/funcs/employee-benefits-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsDelete(sdk, {
    employeeBenefitId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("employeeBenefitsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest](../../models/operations/delete-v1-employee-benefits-employee-benefit-id-request.md)                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## getYtdBenefitAmountsFromDifferentCompany

Retrieves year-to-date benefit amounts that were contributed at a different company for the specified employee.
Returns benefit amounts for the requested tax year (defaults to current year if not specified).

This endpoint only supports retrieving outside contributions for 401(k) benefits.

scope: `employee_benefits:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-employee-ytd-benefit-amounts-from-different-company" method="get" path="/v1/employees/{employee_id}/ytd_benefit_amounts_from_different_company" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.getYtdBenefitAmountsFromDifferentCompany({
    employeeId: "<id>",
    taxYear: 2024,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeeBenefitsGetYtdBenefitAmountsFromDifferentCompany } from "openapi/funcs/employee-benefits-get-ytd-benefit-amounts-from-different-company.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsGetYtdBenefitAmountsFromDifferentCompany(sdk, {
    employeeId: "<id>",
    taxYear: 2024,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsGetYtdBenefitAmountsFromDifferentCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest](../../models/operations/get-employee-ytd-benefit-amounts-from-different-company-request.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.YtdBenefitAmountsFromDifferentCompany[]](../../models/.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## createYtdBenefitAmountsFromDifferentCompany

Year-to-date benefit amounts from a different company represents the amount of money added to an employee's plan during a current year, made outside of the current contribution when they were employed at a different company.

This endpoint only supports passing outside contributions for 401(k) benefits.

scope: `employee_benefits:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="post-employee-ytd-benefit-amounts-from-different-company" method="post" path="/v1/employees/{employee_id}/ytd_benefit_amounts_from_different_company" example="Basic" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await sdk.employeeBenefits.createYtdBenefitAmountsFromDifferentCompany({
    employeeId: "<id>",
    body: {
      taxYear: 1828.56,
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany } from "openapi/funcs/employee-benefits-create-ytd-benefit-amounts-from-different-company.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany(sdk, {
    employeeId: "<id>",
    body: {
      taxYear: 1828.56,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany failed:", res.error);
  }
}

run();
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="post-employee-ytd-benefit-amounts-from-different-company" method="post" path="/v1/employees/{employee_id}/ytd_benefit_amounts_from_different_company" example="Nested" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await sdk.employeeBenefits.createYtdBenefitAmountsFromDifferentCompany({
    employeeId: "<id>",
    body: {
      taxYear: 1828.56,
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany } from "openapi/funcs/employee-benefits-create-ytd-benefit-amounts-from-different-company.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany(sdk, {
    employeeId: "<id>",
    body: {
      taxYear: 1828.56,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany failed:", res.error);
  }
}

run();
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="post-employee-ytd-benefit-amounts-from-different-company" method="post" path="/v1/employees/{employee_id}/ytd_benefit_amounts_from_different_company" example="Resource" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await sdk.employeeBenefits.createYtdBenefitAmountsFromDifferentCompany({
    employeeId: "<id>",
    body: {
      taxYear: 1828.56,
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany } from "openapi/funcs/employee-benefits-create-ytd-benefit-amounts-from-different-company.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany(sdk, {
    employeeId: "<id>",
    body: {
      taxYear: 1828.56,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest](../../models/operations/post-employee-ytd-benefit-amounts-from-different-company-request.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## getV1EmployeesEmployeeUuidSection603HighEarnerStatuses

Get all Section 603 high earner statuses for an employee across all years.

Section 603 of the SECURE 2.0 Act applies to employees aged 50 or older whose prior-year FICA wages exceed the IRS threshold.
These employees are classified as high earners, and their catch-up contributions to pre-tax retirement benefits must be designated as post-tax contributions.

scope: `employee_benefits:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-employees-employee_uuid-section603_high_earner_statuses" method="get" path="/v1/employees/{employee_uuid}/section603_high_earner_statuses" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.getV1EmployeesEmployeeUuidSection603HighEarnerStatuses({
    employeeUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { employeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatuses } from "openapi/funcs/employee-benefits-get-v1-employees-employee-uuid-section603-high-earner-statuses.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatuses(sdk, {
    employeeUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatuses failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesRequest](../../models/operations/get-v1-employees-employee-uuid-section603-high-earner-statuses-request.md)  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmployeeSection603HighEarnerStatus[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## postV1EmployeesEmployeeUuidSection603HighEarnerStatuses

Create a Section 603 high earner status for an employee for a specific year.

Section 603 of the SECURE 2.0 Act applies to employees aged 50 or older whose prior-year FICA wages exceed the IRS threshold.
These employees are classified as high earners, and their catch-up contributions to pre-tax retirement benefits must be designated as post-tax contributions.

scope: `employee_benefits:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-employees-employee_uuid-section603_high_earner_statuses" method="post" path="/v1/employees/{employee_uuid}/section603_high_earner_statuses" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.postV1EmployeesEmployeeUuidSection603HighEarnerStatuses({
    employeeUuid: "<id>",
    body: {
      effectiveYear: 2026,
      isHighEarner: true,
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
import { employeeBenefitsPostV1EmployeesEmployeeUuidSection603HighEarnerStatuses } from "openapi/funcs/employee-benefits-post-v1-employees-employee-uuid-section603-high-earner-statuses.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsPostV1EmployeesEmployeeUuidSection603HighEarnerStatuses(sdk, {
    employeeUuid: "<id>",
    body: {
      effectiveYear: 2026,
      isHighEarner: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsPostV1EmployeesEmployeeUuidSection603HighEarnerStatuses failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                       | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                       | [operations.PostV1EmployeesEmployeeUuidSection603HighEarnerStatusesRequest](../../models/operations/post-v1-employees-employee-uuid-section603-high-earner-statuses-request.md) | :heavy_check_mark:                                                                                                                                                              | The request object to use for the request.                                                                                                                                      |
| `options`                                                                                                                                                                       | RequestOptions                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                         | :heavy_minus_sign:                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.  |
| `options.retries`                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                |

### Response

**Promise\<[models.EmployeeSection603HighEarnerStatus](../../models/employee-section603-high-earner-status.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 409, 422                              | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## getV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear

Get a Section 603 high earner status for an employee for a specific year.

Section 603 of the SECURE 2.0 Act applies to employees aged 50 or older whose prior-year FICA wages exceed the IRS threshold.
These employees are classified as high earners, and their catch-up contributions to pre-tax retirement benefits must be designated as post-tax contributions.

scope: `employee_benefits:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-employees-employee_uuid-section603_high_earner_statuses-effective_year" method="get" path="/v1/employees/{employee_uuid}/section603_high_earner_statuses/{effective_year}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.getV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear({
    employeeUuid: "<id>",
    effectiveYear: 857230,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import {
  employeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear,
} from "openapi/funcs/employee-benefits-get-v1-employees-employee-uuid-section603-high-earner-statuses-effective-year.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear(sdk, {
    employeeUuid: "<id>",
    effectiveYear: 857230,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsGetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                 | Type                                                                                                                                                                                                      | Required                                                                                                                                                                                                  | Description                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                 | [operations.GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearRequest](../../models/operations/get-v1-employees-employee-uuid-section603-high-earner-statuses-effective-year-request.md) | :heavy_check_mark:                                                                                                                                                                                        | The request object to use for the request.                                                                                                                                                                |
| `options`                                                                                                                                                                                                 | RequestOptions                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                        | Used to set various options for making HTTP requests.                                                                                                                                                     |
| `options.fetchOptions`                                                                                                                                                                                    | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                        | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                            |
| `options.retries`                                                                                                                                                                                         | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                        | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                          |

### Response

**Promise\<[models.EmployeeSection603HighEarnerStatus](../../models/employee-section603-high-earner-status.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## patchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear

Update a Section 603 high earner status for an employee for a specific year.

Section 603 of the SECURE 2.0 Act applies to employees aged 50 or older whose prior-year FICA wages exceed the IRS threshold.
These employees are classified as high earners, and their catch-up contributions to pre-tax retirement benefits must be designated as post-tax contributions.

scope: `employee_benefits:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch-v1-employees-employee_uuid-section603_high_earner_statuses-effective_year" method="patch" path="/v1/employees/{employee_uuid}/section603_high_earner_statuses/{effective_year}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.employeeBenefits.patchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear({
    employeeUuid: "<id>",
    effectiveYear: 152322,
    body: {
      isHighEarner: true,
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
import {
  employeeBenefitsPatchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear,
} from "openapi/funcs/employee-benefits-patch-v1-employees-employee-uuid-section603-high-earner-statuses-effective-year.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await employeeBenefitsPatchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear(sdk, {
    employeeUuid: "<id>",
    effectiveYear: 152322,
    body: {
      isHighEarner: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("employeeBenefitsPatchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYear failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                     | Type                                                                                                                                                                                                          | Required                                                                                                                                                                                                      | Description                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                     | [operations.PatchV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearRequest](../../models/operations/patch-v1-employees-employee-uuid-section603-high-earner-statuses-effective-year-request.md) | :heavy_check_mark:                                                                                                                                                                                            | The request object to use for the request.                                                                                                                                                                    |
| `options`                                                                                                                                                                                                     | RequestOptions                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                            | Used to set various options for making HTTP requests.                                                                                                                                                         |
| `options.fetchOptions`                                                                                                                                                                                        | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                            | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                |
| `options.retries`                                                                                                                                                                                             | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                            | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                              |

### Response

**Promise\<[models.EmployeeSection603HighEarnerStatus](../../models/employee-section603-high-earner-status.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |