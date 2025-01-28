# I9Verifications
(*i9Verifications*)

## Overview

### Available Operations

* [update](#update) - Create or update an employee's I-9 authorization
* [getDocuments](#getdocuments) - Get an employee's I-9 verification documents
* [deleteDocument](#deletedocument) - Delete an employee's I-9 verification document

## update

An employee's I-9 authorization stores information about an employee's authorization status, as well as signatures and other information required to complete the Form I-9 for employment eligibility verification.

If the version is supplied and the employee I-9 authorization exists, this endpoint acts as an update. Otherwise, it will create an employee I-9 authorization.

Validations on this endpoint are conditional:

  * `document_type` may be required, depending on `authorization_status`.
  * Valid formats for `document_number` vary, depending on `document_type`.
  * `country` is only allowed with `document_type: 'foreign_passport'`.
  * `expiration_date` is only allowed with `authorization_status: 'alien'`.

> ℹ️ Unneeded information is automatically removed during updates.
>
> If an update causes some formerly-required fields to be unneeded, the now-unneeded data will be removed automatically.
>
> **Example:** Updating `authorization_status` from `alien` to `citizen` will cause any data in `document_type`, `document_number`, `country`, and `expiration_date` to be removed, since these fields are unused for `authorization_status:'citizen'`.

Detailed instructions for completing Form I-9 can be found at https://www.uscis.gov/sites/default/files/document/forms/i-9instr.pdf

scope: `i9_authorizations:write`


### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.i9Verifications.update({
    employeeId: "<id>",
    requestBody: {
      authorizationStatus: "citizen",
      version: "52b7c567242cb7452e89ba2bc02cb476",
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
import { i9VerificationsUpdate } from "openapi/funcs/i9VerificationsUpdate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await i9VerificationsUpdate(sdk, {
    employeeId: "<id>",
    requestBody: {
      authorizationStatus: "citizen",
      version: "52b7c567242cb7452e89ba2bc02cb476",
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
| `request`                                                                                                                                                                      | [operations.PutV1EmployeesEmployeeIdI9AuthorizationRequest](../../models/operations/putv1employeesemployeeidi9authorizationrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.I9Authorization](../../models/components/i9authorization.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## getDocuments

An employee's I-9 verification documents are the documents an employee has provided the employer to verify their identity and authorization to work in the United States.

scope: `i9_authorizations:read`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.i9Verifications.getDocuments({
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
import { i9VerificationsGetDocuments } from "openapi/funcs/i9VerificationsGetDocuments.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await i9VerificationsGetDocuments(sdk, {
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
| `request`                                                                                                                                                                      | [operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest](../../models/operations/getv1employeesemployeeidi9authorizationdocumentsrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.I9AuthorizationDocument[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteDocument

An employee's I-9 verification documents are the documents an employee has provided the employer to verify their identity and authorization to work in the United States. This endpoint deletes a specific verification document.

scope: `i9_authorizations:manage`

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await sdk.i9Verifications.deleteDocument({
    employeeId: "<id>",
    documentId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { i9VerificationsDeleteDocument } from "openapi/funcs/i9VerificationsDeleteDocument.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await i9VerificationsDeleteDocument(sdk, {
    employeeId: "<id>",
    documentId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest](../../models/operations/deletev1employeesemployeeidi9authorizationdocumentsdocumentidrequest.md) | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `options`                                                                                                                                                                          | RequestOptions                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                            | :heavy_minus_sign:                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.     |
| `options.retries`                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                   |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |