# WorkAddresses
(*employeeAddresses.workAddresses*)

## Overview

### Available Operations

* [create](#create) - Create an employee work address

## create

The work address of an employee describes when an employee began working at an associated company location.

scope: `employees:manage`

### Example Usage

```typescript
import { GustoEmbedded } from "@gusto/embedded-api";
import { RFCDate } from "@gusto/embedded-api/types";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.employeeAddresses.workAddresses.create({
    employeeId: "<id>",
    requestBody: {
      locationUuid: "6a119be7-b4b0-4e27-aaa0-89d5f2524635",
      effectiveDate: new RFCDate("2023-05-15"),
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
import { GustoEmbeddedCore } from "@gusto/embedded-api/core.js";
import { employeeAddressesWorkAddressesCreate } from "@gusto/embedded-api/funcs/employeeAddressesWorkAddressesCreate.js";
import { RFCDate } from "@gusto/embedded-api/types";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await employeeAddressesWorkAddressesCreate(gustoEmbedded, {
    employeeId: "<id>",
    requestBody: {
      locationUuid: "6a119be7-b4b0-4e27-aaa0-89d5f2524635",
      effectiveDate: new RFCDate("2023-05-15"),
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

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useEmployeeAddressesWorkAddressesCreateMutation
} from "@gusto/embedded-api/react-query/employeeAddressesWorkAddressesCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1EmployeesEmployeeIdWorkAddressesRequest](../../models/operations/postv1employeesemployeeidworkaddressesrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EmployeeWorkAddress](../../models/components/employeeworkaddress.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |