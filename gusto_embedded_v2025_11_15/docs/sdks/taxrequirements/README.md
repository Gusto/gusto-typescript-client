# TaxRequirements

## Overview

### Available Operations

* [get](#get) - Get State Tax Requirements
* [updateState](#updatestate) - Update State Tax Requirements
* [getAll](#getall) - Get All Tax Requirement States

## get

Get all tax requirements for a given state.

### Metadata Examples

```json select
{
  "type": "select",
  "options": [
    { "label": "Semiweekly",  value: "Semi-weekly" },
    { "label": "Monthly",  value: "Monthly" },
    { "label": "Quarterly",  value: "Quarterly" },
  ]
}
```
```json radio
{
  "type": "radio",
  "options": [
    { "label": "No, we cannot reimburse",  value: false, short_label: "Not Reimbursable" },
    { "label": "Yes, we can reimburse",  value: true, short_label: "Reimbursable" },
  ]
}
```
```json account_number
{
  "type": "account_number",
  "mask": "######-##',
  "prefix": null
}
```
```json tax_rate
{
  "type": "tax_rate",
  "validation": {
    "type": "min_max",
    "min": "0.0004",
    "max": "0.081"
  }
}
```

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
    state: "South Dakota",
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
    state: "South Dakota",
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

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## updateState

Update State Tax Requirements

scope: `company_tax_requirements:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="put-v1-companies-company_uuid-tax_requirements-state" method="put" path="/v1/companies/{company_uuid}/tax_requirements/{state}" example="Basic" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await sdk.taxRequirements.updateState({
    companyUuid: "<id>",
    state: "West Virginia",
    body: {},
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
    state: "West Virginia",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("taxRequirementsUpdateState failed:", res.error);
  }
}

run();
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="put-v1-companies-company_uuid-tax_requirements-state" method="put" path="/v1/companies/{company_uuid}/tax_requirements/{state}" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await sdk.taxRequirements.updateState({
    companyUuid: "<id>",
    state: "Tennessee",
    body: {
      requirementSets: [
        {
          key: "registrations",
          effectiveFrom: null,
          state: "GA",
          requirements: [
            {
              key: "71653ec0-00b5-4c66-a58b-22ecf21704c5",
              value: "1233214-AB",
            },
            {
              key: "6c0911ab-5860-412e-bdef-6437cd881df5",
              value: "474747-22",
            },
          ],
        },
        {
          key: "taxrates",
          effectiveFrom: "2022-01-01",
          state: "GA",
          requirements: [
            {
              key: "e0ac2284-8d30-4100-ae23-f85f9574868b",
              value: "0.05",
            },
          ],
        },
        {
          key: "depositschedules",
          effectiveFrom: "2022-01-01",
          state: "GA",
          requirements: [
            {
              key: "6ddfcbeb-94d3-4003-bfc2-8c6e1ca9f70c",
              value: "Semi-weekly",
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
    state: "Tennessee",
    body: {
      requirementSets: [
        {
          key: "registrations",
          effectiveFrom: null,
          state: "GA",
          requirements: [
            {
              key: "71653ec0-00b5-4c66-a58b-22ecf21704c5",
              value: "1233214-AB",
            },
            {
              key: "6c0911ab-5860-412e-bdef-6437cd881df5",
              value: "474747-22",
            },
          ],
        },
        {
          key: "taxrates",
          effectiveFrom: "2022-01-01",
          state: "GA",
          requirements: [
            {
              key: "e0ac2284-8d30-4100-ae23-f85f9574868b",
              value: "0.05",
            },
          ],
        },
        {
          key: "depositschedules",
          effectiveFrom: "2022-01-01",
          state: "GA",
          requirements: [
            {
              key: "6ddfcbeb-94d3-4003-bfc2-8c6e1ca9f70c",
              value: "Semi-weekly",
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
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="put-v1-companies-company_uuid-tax_requirements-state" method="put" path="/v1/companies/{company_uuid}/tax_requirements/{state}" example="Nested" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await sdk.taxRequirements.updateState({
    companyUuid: "<id>",
    state: "Maryland",
    body: {},
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
    state: "Maryland",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("taxRequirementsUpdateState failed:", res.error);
  }
}

run();
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="put-v1-companies-company_uuid-tax_requirements-state" method="put" path="/v1/companies/{company_uuid}/tax_requirements/{state}" example="Resource" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await sdk.taxRequirements.updateState({
    companyUuid: "<id>",
    state: "Vermont",
    body: {},
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
    state: "Vermont",
    body: {},
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

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## getAll

Returns objects describing the states that have tax requirements for the company

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

**Promise\<[operations.GetV1CompaniesCompanyUuidTaxRequirementsResponse[]](../../models/.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |