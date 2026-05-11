# TaxRequirements

## Overview

### Available Operations

* [get](#get) - Get tax requirements for a state
* [updateState](#updatestate) - Update tax requirements for a state
* [getAll](#getall) - Get all tax requirements for a company

## get

Retrieves the detailed tax requirements for a specific state. The response includes requirement sets grouped by
category (e.g., registrations, tax rates, deposit schedules), each containing individual requirements with their
current values, labels, and metadata describing the expected input format.

Use this to build dynamic UIs for tax setup or to read the current tax configuration for a state.

scope: `company_tax_requirements:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_uuid-tax_requirements-state" method="get" path="/v1/companies/{company_uuid}/tax_requirements/{state}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.taxRequirements.get({
    companyUuid: "<id>",
    state: "CA",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { taxRequirementsGet } from "openapi/funcs/tax-requirements-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await taxRequirementsGet(sdk, {
    companyUuid: "<id>",
    state: "CA",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRequirementsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest](../../models/operations/get-v1-companies-company-uuid-tax-requirements-state-request.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TaxRequirementsState](../../models/tax-requirements-state.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## updateState

Updates the tax requirement answers for a specific state. Submit answers to the requirement questions returned
by [GET /v1/companies/{company_uuid}/tax_requirements/{state}](ref:get-v1-companies-company_uuid-tax_requirements-state).

### Prerequisites

1. Retrieve current requirements via [GET /v1/companies/{company_uuid}/tax_requirements/{state}](ref:get-v1-companies-company_uuid-tax_requirements-state)
2. Ensure that each requirement set that you're updating includes the correct `key`, `state`, and `effective_from` values from the GET response

scope: `company_tax_requirements:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-companies-company_uuid-tax_requirements-state" method="put" path="/v1/companies/{company_uuid}/tax_requirements/{state}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await sdk.taxRequirements.updateState({
    companyUuid: "<id>",
    state: "CA",
    body: {
      requirementSets: [
        {
          key: "registrations",
          state: "GA",
          effectiveFrom: "2022-01-01",
          requirements: [
            {
              key: "71653ec0-00b5-4c66-a58b-22ecf21704c5",
              value: "1233214-AB",
            },
          ],
        },
      ],
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { taxRequirementsUpdateState } from "openapi/funcs/tax-requirements-update-state.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await taxRequirementsUpdateState(sdk, {
    companyUuid: "<id>",
    state: "CA",
    body: {
      requirementSets: [
        {
          key: "registrations",
          state: "GA",
          effectiveFrom: "2022-01-01",
          requirements: [
            {
              key: "71653ec0-00b5-4c66-a58b-22ecf21704c5",
              value: "1233214-AB",
            },
          ],
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("taxRequirementsUpdateState failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1CompaniesCompanyUuidTaxRequirementsStateRequest](../../models/operations/put-v1-companies-company-uuid-tax-requirements-state-request.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.SDKDefaultError          | 4XX, 5XX                        | \*/\*                           |

## getAll

Retrieves all states for which a company has tax requirements, along with a boolean indicating whether tax setup
is complete for each state. Use this to determine which states still need tax setup during company onboarding.

scope: `company_tax_requirements:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_uuid-tax_requirements" method="get" path="/v1/companies/{company_uuid}/tax_requirements" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.taxRequirements.getAll({
    companyUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { taxRequirementsGetAll } from "openapi/funcs/tax-requirements-get-all.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await taxRequirementsGetAll(sdk, {
    companyUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRequirementsGetAll failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyUuidTaxRequirementsRequest](../../models/operations/get-v1-companies-company-uuid-tax-requirements-request.md)                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TaxRequirementStatesList[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |