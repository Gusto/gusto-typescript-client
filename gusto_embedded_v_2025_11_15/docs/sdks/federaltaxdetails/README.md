# FederalTaxDetails

## Overview

### Available Operations

* [get](#get) - Get a company's federal tax details
* [update](#update) - Update a company's federal tax details

## get

Retrieves a company's federal tax details including EIN verification status, tax payer type, filing form, and other federal tax configuration.

scope: `company_federal_taxes:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_id-federal_tax_details" method="get" path="/v1/companies/{company_id}/federal_tax_details" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.federalTaxDetails.get({
    companyId: "7b1d0df1-6403-4a06-8768-c1dd7d24d27a",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { federalTaxDetailsGet } from "openapi/funcs/federal-tax-details-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await federalTaxDetailsGet(sdk, {
    companyId: "7b1d0df1-6403-4a06-8768-c1dd7d24d27a",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("federalTaxDetailsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyIdFederalTaxDetailsRequest](../../models/operations/get-v1-companies-company-id-federal-tax-details-request.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FederalTaxDetails](../../models/federal-tax-details.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## update

Updates a company's federal tax details including EIN, legal name, tax payer type, filing form, and S-Corp
taxation status. This information is required to onboard a company for use with Gusto Embedded Payroll.

### Prerequisites
Before calling this endpoint, retrieve the current federal tax details and `version` via [GET /v1/companies/{company_id}/federal_tax_details](ref:get-v1-companies-company_id-federal_tax_details)

### Webhooks
- `company.updated`: Fires when federal tax details for a company are successfully updated

**Setup:** [POST /v1/webhook_subscriptions](ref:post-v1-webhook-subscription) with `subscription_types`: `["Company"]`

scope: `company_federal_taxes:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-companies-company_id-federal_tax_details" method="put" path="/v1/companies/{company_id}/federal_tax_details" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.federalTaxDetails.update({
    companyId: "7b1d0df1-6403-4a06-8768-c1dd7d24d27a",
    body: {
      version: "6cb95e00540706ca48d4577b3c839fbe",
      legalName: "Acme Corp.",
      ein: "123456789",
      taxPayerType: "LLP",
      filingForm: "944",
      taxableAsScorp: false,
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
import { federalTaxDetailsUpdate } from "openapi/funcs/federal-tax-details-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await federalTaxDetailsUpdate(sdk, {
    companyId: "7b1d0df1-6403-4a06-8768-c1dd7d24d27a",
    body: {
      version: "6cb95e00540706ca48d4577b3c839fbe",
      legalName: "Acme Corp.",
      ein: "123456789",
      taxPayerType: "LLP",
      filingForm: "944",
      taxableAsScorp: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("federalTaxDetailsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1CompaniesCompanyIdFederalTaxDetailsRequest](../../models/operations/put-v1-companies-company-id-federal-tax-details-request.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FederalTaxDetails](../../models/federal-tax-details.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 409, 422                        | application/json                |
| errors.SDKDefaultError          | 4XX, 5XX                        | \*/\*                           |