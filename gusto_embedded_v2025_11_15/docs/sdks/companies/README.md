# Companies

## Overview

### Available Operations

* [createPartnerManaged](#createpartnermanaged) - Create a partner managed company
* [get](#get) - Get a company
* [update](#update) - Update a company
* [migrate](#migrate) - Migrate company to embedded payroll
* [getV1PartnerManagedCompaniesCompanyUuidMigrationReadiness](#getv1partnermanagedcompaniescompanyuuidmigrationreadiness) - Check company migration readiness
* [acceptTermsOfService](#accepttermsofservice) - Accept terms of service for a company user
* [retrieveTermsOfService](#retrievetermsofservice) - Retrieve terms of service status for a company user
* [createAdmin](#createadmin) - Create an admin for the company
* [listAdmins](#listadmins) - Get all the admins at a company
* [getOnboardingStatus](#getonboardingstatus) - Get company onboarding status
* [finishOnboarding](#finishonboarding) - Finish company onboarding
* [getCustomFields](#getcustomfields) - Get the custom fields of a company

## createPartnerManaged

Create a partner managed company. When you successfully call the API, it does the following:
* Creates a new company in Gusto
* Creates a new user using the provided email if the user does not already exist.
* Makes the user the primary payroll administrator of the new company.

In response, you will receive oauth access tokens for the created company.

IMPORTANT: the returned access and refresh tokens are reserved for this company only. They cannot be used to access other companies AND previously granted tokens cannot be used to access this company.

> 📘 System Access Authentication
>
> this endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access)

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="post-v1-partner-managed-companies" method="post" path="/v1/partner_managed_companies" example="Basic" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.companies.createPartnerManaged({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    body: {
      user: {
        firstName: "Randi",
        lastName: "Schaden",
        email: "Geovanni_Mertz12@yahoo.com",
      },
      company: {
        name: "<value>",
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
import { companiesCreatePartnerManaged } from "openapi/funcs/companies-create-partner-managed.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await companiesCreatePartnerManaged(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    body: {
      user: {
        firstName: "Randi",
        lastName: "Schaden",
        email: "Geovanni_Mertz12@yahoo.com",
      },
      company: {
        name: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesCreatePartnerManaged failed:", res.error);
  }
}

run();
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="post-v1-partner-managed-companies" method="post" path="/v1/partner_managed_companies" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.companies.createPartnerManaged({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    body: {
      user: {
        firstName: "Frank",
        lastName: "Ocean",
        email: "frank@example.com",
        phone: "2345558899",
      },
      company: {
        name: "Frank's Ocean, LLC",
        tradeName: "Frank’s Ocean",
        ein: "123456789",
        contractorOnly: false,
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
import { companiesCreatePartnerManaged } from "openapi/funcs/companies-create-partner-managed.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await companiesCreatePartnerManaged(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    body: {
      user: {
        firstName: "Frank",
        lastName: "Ocean",
        email: "frank@example.com",
        phone: "2345558899",
      },
      company: {
        name: "Frank's Ocean, LLC",
        tradeName: "Frank’s Ocean",
        ein: "123456789",
        contractorOnly: false,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesCreatePartnerManaged failed:", res.error);
  }
}

run();
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="post-v1-partner-managed-companies" method="post" path="/v1/partner_managed_companies" example="Nested" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.companies.createPartnerManaged({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    body: {
      user: {
        firstName: "Randi",
        lastName: "Schaden",
        email: "Geovanni_Mertz12@yahoo.com",
      },
      company: {
        name: "<value>",
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
import { companiesCreatePartnerManaged } from "openapi/funcs/companies-create-partner-managed.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await companiesCreatePartnerManaged(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    body: {
      user: {
        firstName: "Randi",
        lastName: "Schaden",
        email: "Geovanni_Mertz12@yahoo.com",
      },
      company: {
        name: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesCreatePartnerManaged failed:", res.error);
  }
}

run();
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="post-v1-partner-managed-companies" method="post" path="/v1/partner_managed_companies" example="Resource" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.companies.createPartnerManaged({
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    body: {
      user: {
        firstName: "Randi",
        lastName: "Schaden",
        email: "Geovanni_Mertz12@yahoo.com",
      },
      company: {
        name: "<value>",
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
import { companiesCreatePartnerManaged } from "openapi/funcs/companies-create-partner-managed.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await companiesCreatePartnerManaged(sdk, {
    systemAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    body: {
      user: {
        firstName: "Randi",
        lastName: "Schaden",
        email: "Geovanni_Mertz12@yahoo.com",
      },
      company: {
        name: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesCreatePartnerManaged failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1PartnerManagedCompaniesRequest](../../models/operations/post-v1-partner-managed-companies-request.md)                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PostV1PartnerManagedCompaniesSecurity](../../models/operations/post-v1-partner-managed-companies-security.md)                                                      | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1PartnerManagedCompaniesResponse](../../models/operations/post-v1-partner-managed-companies-response.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## get

Get a company.

The employees:read scope is required to return home_address and non-work locations.
The company_admin:read scope is required to return primary_payroll_admin.
The signatories:read scope is required to return primary_signatory.

scope: `companies:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies" method="get" path="/v1/companies/{company_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.get({
    companyId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { companiesGet } from "openapi/funcs/companies-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesGet(sdk, {
    companyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesRequest](../../models/operations/get-v1-companies-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Company](../../models/company.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## update

Update a company.

scope: `companies:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-companies" method="put" path="/v1/companies/{company_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.update({
    companyId: "<id>",
    body: {
      contractorOnly: true,
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
import { companiesUpdate } from "openapi/funcs/companies-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesUpdate(sdk, {
    companyId: "<id>",
    body: {
      contractorOnly: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1CompaniesRequest](../../models/operations/put-v1-companies-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Company](../../models/company.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## migrate

Migrate an existing Gusto customer to your embedded payroll product.

To use this endpoint, the customer will need to connect their Gusto account to your application using [OAuth2](https://docs.gusto.com/embedded-payroll/docs/oauth2) then view and [accept the Embedded Payroll Terms of Service](https://docs.gusto.com/embedded-payroll/reference/post-partner-managed-companies-company_uuid-accept_terms_of_service).

scope: `partner_managed_companies:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-partner-managed-companies-company-uuid-migrate" method="put" path="/v1/partner_managed_companies/{company_uuid}/migrate" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.migrate({
    companyUuid: "<id>",
    body: {
      email: "Janice18@gmail.com",
      ipAddress: "75.249.55.210",
      externalUserId: "<id>",
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
import { companiesMigrate } from "openapi/funcs/companies-migrate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesMigrate(sdk, {
    companyUuid: "<id>",
    body: {
      email: "Janice18@gmail.com",
      ipAddress: "75.249.55.210",
      externalUserId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesMigrate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest](../../models/operations/put-v1-partner-managed-companies-company-uuid-migrate-request.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse](../../models/operations/put-v1-partner-managed-companies-company-uuid-migrate-response.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.MigrationBlockerError          | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## getV1PartnerManagedCompaniesCompanyUuidMigrationReadiness

Check if an existing Gusto customer is ready to be migrated to embedded payroll. This endpoint returns blockers and warnings associated with migrating the company and is recommended to be called before attempting to migrate a company.

scope: `partner_managed_companies:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-partner-managed-companies-company-uuid-migration_readiness" method="get" path="/v1/partner_managed_companies/{company_uuid}/migration_readiness" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.getV1PartnerManagedCompaniesCompanyUuidMigrationReadiness({
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
import { companiesGetV1PartnerManagedCompaniesCompanyUuidMigrationReadiness } from "openapi/funcs/companies-get-v1-partner-managed-companies-company-uuid-migration-readiness.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesGetV1PartnerManagedCompaniesCompanyUuidMigrationReadiness(sdk, {
    companyUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesGetV1PartnerManagedCompaniesCompanyUuidMigrationReadiness failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                           | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                           | [operations.GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessRequest](../../models/operations/get-v1-partner-managed-companies-company-uuid-migration-readiness-request.md) | :heavy_check_mark:                                                                                                                                                                  | The request object to use for the request.                                                                                                                                          |
| `options`                                                                                                                                                                           | RequestOptions                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                             | :heavy_minus_sign:                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.      |
| `options.retries`                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                    |

### Response

**Promise\<[operations.GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponse](../../models/operations/get-v1-partner-managed-companies-company-uuid-migration-readiness-response.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## acceptTermsOfService

Accept the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).
The user must have a role in the company in order to accept the Terms of Service.

scope: `terms_of_services:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="post-partner-managed-companies-company_uuid-accept_terms_of_service" method="post" path="/v1/partner_managed_companies/{company_uuid}/accept_terms_of_service" example="Basic" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.acceptTermsOfService({
    companyUuid: "<id>",
    body: {
      email: "Mary_Welch@hotmail.com",
      ipAddress: "ad95:edec:dbf8:daea:be73:caca:2bf2:c269",
      externalUserId: "<id>",
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
import { companiesAcceptTermsOfService } from "openapi/funcs/companies-accept-terms-of-service.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesAcceptTermsOfService(sdk, {
    companyUuid: "<id>",
    body: {
      email: "Mary_Welch@hotmail.com",
      ipAddress: "ad95:edec:dbf8:daea:be73:caca:2bf2:c269",
      externalUserId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesAcceptTermsOfService failed:", res.error);
  }
}

run();
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="post-partner-managed-companies-company_uuid-accept_terms_of_service" method="post" path="/v1/partner_managed_companies/{company_uuid}/accept_terms_of_service" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.acceptTermsOfService({
    companyUuid: "<id>",
    body: {
      email: "jsmith99@gmail.com",
      ipAddress: "192.168.1.2",
      externalUserId: "2005648946132",
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
import { companiesAcceptTermsOfService } from "openapi/funcs/companies-accept-terms-of-service.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesAcceptTermsOfService(sdk, {
    companyUuid: "<id>",
    body: {
      email: "jsmith99@gmail.com",
      ipAddress: "192.168.1.2",
      externalUserId: "2005648946132",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesAcceptTermsOfService failed:", res.error);
  }
}

run();
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="post-partner-managed-companies-company_uuid-accept_terms_of_service" method="post" path="/v1/partner_managed_companies/{company_uuid}/accept_terms_of_service" example="Nested" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.acceptTermsOfService({
    companyUuid: "<id>",
    body: {
      email: "Mary_Welch@hotmail.com",
      ipAddress: "ad95:edec:dbf8:daea:be73:caca:2bf2:c269",
      externalUserId: "<id>",
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
import { companiesAcceptTermsOfService } from "openapi/funcs/companies-accept-terms-of-service.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesAcceptTermsOfService(sdk, {
    companyUuid: "<id>",
    body: {
      email: "Mary_Welch@hotmail.com",
      ipAddress: "ad95:edec:dbf8:daea:be73:caca:2bf2:c269",
      externalUserId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesAcceptTermsOfService failed:", res.error);
  }
}

run();
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="post-partner-managed-companies-company_uuid-accept_terms_of_service" method="post" path="/v1/partner_managed_companies/{company_uuid}/accept_terms_of_service" example="Resource" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.acceptTermsOfService({
    companyUuid: "<id>",
    body: {
      email: "Mary_Welch@hotmail.com",
      ipAddress: "ad95:edec:dbf8:daea:be73:caca:2bf2:c269",
      externalUserId: "<id>",
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
import { companiesAcceptTermsOfService } from "openapi/funcs/companies-accept-terms-of-service.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesAcceptTermsOfService(sdk, {
    companyUuid: "<id>",
    body: {
      email: "Mary_Welch@hotmail.com",
      ipAddress: "ad95:edec:dbf8:daea:be73:caca:2bf2:c269",
      externalUserId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesAcceptTermsOfService failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest](../../models/operations/post-partner-managed-companies-company-uuid-accept-terms-of-service-request.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse](../../models/operations/post-partner-managed-companies-company-uuid-accept-terms-of-service-response.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## retrieveTermsOfService

Retrieve the user acceptance status of the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).

scope: `terms_of_services:read`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="post-partner-managed-companies-company_uuid-retrieve_terms_of_service" method="post" path="/v1/partner_managed_companies/{company_uuid}/retrieve_terms_of_service" example="Basic" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.retrieveTermsOfService({
    companyUuid: "<id>",
    body: {
      email: "Valentin_Ziemann@yahoo.com",
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
import { companiesRetrieveTermsOfService } from "openapi/funcs/companies-retrieve-terms-of-service.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesRetrieveTermsOfService(sdk, {
    companyUuid: "<id>",
    body: {
      email: "Valentin_Ziemann@yahoo.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesRetrieveTermsOfService failed:", res.error);
  }
}

run();
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="post-partner-managed-companies-company_uuid-retrieve_terms_of_service" method="post" path="/v1/partner_managed_companies/{company_uuid}/retrieve_terms_of_service" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.retrieveTermsOfService({
    companyUuid: "<id>",
    body: {
      email: "jsmith99@gmail.com",
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
import { companiesRetrieveTermsOfService } from "openapi/funcs/companies-retrieve-terms-of-service.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesRetrieveTermsOfService(sdk, {
    companyUuid: "<id>",
    body: {
      email: "jsmith99@gmail.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesRetrieveTermsOfService failed:", res.error);
  }
}

run();
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="post-partner-managed-companies-company_uuid-retrieve_terms_of_service" method="post" path="/v1/partner_managed_companies/{company_uuid}/retrieve_terms_of_service" example="Nested" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.retrieveTermsOfService({
    companyUuid: "<id>",
    body: {
      email: "Valentin_Ziemann@yahoo.com",
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
import { companiesRetrieveTermsOfService } from "openapi/funcs/companies-retrieve-terms-of-service.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesRetrieveTermsOfService(sdk, {
    companyUuid: "<id>",
    body: {
      email: "Valentin_Ziemann@yahoo.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesRetrieveTermsOfService failed:", res.error);
  }
}

run();
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="post-partner-managed-companies-company_uuid-retrieve_terms_of_service" method="post" path="/v1/partner_managed_companies/{company_uuid}/retrieve_terms_of_service" example="Resource" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.retrieveTermsOfService({
    companyUuid: "<id>",
    body: {
      email: "Valentin_Ziemann@yahoo.com",
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
import { companiesRetrieveTermsOfService } from "openapi/funcs/companies-retrieve-terms-of-service.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesRetrieveTermsOfService(sdk, {
    companyUuid: "<id>",
    body: {
      email: "Valentin_Ziemann@yahoo.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesRetrieveTermsOfService failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest](../../models/operations/post-partner-managed-companies-company-uuid-retrieve-terms-of-service-request.md) | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse](../../models/operations/post-partner-managed-companies-company-uuid-retrieve-terms-of-service-response.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## createAdmin

Creates a new admin for a company.
If the email matches an existing user, this will create an admin account for the current user. Otherwise, this will create a new user.

scope: `company_admin:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_id-admins" method="post" path="/v1/companies/{company_id}/admins" example="Basic" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.createAdmin({
    companyId: "<id>",
    body: {
      firstName: "Hilbert",
      lastName: "Hilll",
      email: "Dejah.Pagac14@gmail.com",
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
import { companiesCreateAdmin } from "openapi/funcs/companies-create-admin.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesCreateAdmin(sdk, {
    companyId: "<id>",
    body: {
      firstName: "Hilbert",
      lastName: "Hilll",
      email: "Dejah.Pagac14@gmail.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesCreateAdmin failed:", res.error);
  }
}

run();
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_id-admins" method="post" path="/v1/companies/{company_id}/admins" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.createAdmin({
    companyId: "<id>",
    body: {
      firstName: "John",
      lastName: "Smith",
      email: "jsmith99@gmail.com",
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
import { companiesCreateAdmin } from "openapi/funcs/companies-create-admin.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesCreateAdmin(sdk, {
    companyId: "<id>",
    body: {
      firstName: "John",
      lastName: "Smith",
      email: "jsmith99@gmail.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesCreateAdmin failed:", res.error);
  }
}

run();
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_id-admins" method="post" path="/v1/companies/{company_id}/admins" example="Nested" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.createAdmin({
    companyId: "<id>",
    body: {
      firstName: "Hilbert",
      lastName: "Hilll",
      email: "Dejah.Pagac14@gmail.com",
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
import { companiesCreateAdmin } from "openapi/funcs/companies-create-admin.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesCreateAdmin(sdk, {
    companyId: "<id>",
    body: {
      firstName: "Hilbert",
      lastName: "Hilll",
      email: "Dejah.Pagac14@gmail.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesCreateAdmin failed:", res.error);
  }
}

run();
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_id-admins" method="post" path="/v1/companies/{company_id}/admins" example="Resource" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.createAdmin({
    companyId: "<id>",
    body: {
      firstName: "Hilbert",
      lastName: "Hilll",
      email: "Dejah.Pagac14@gmail.com",
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
import { companiesCreateAdmin } from "openapi/funcs/companies-create-admin.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesCreateAdmin(sdk, {
    companyId: "<id>",
    body: {
      firstName: "Hilbert",
      lastName: "Hilll",
      email: "Dejah.Pagac14@gmail.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesCreateAdmin failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyIdAdminsRequest](../../models/operations/post-v1-companies-company-id-admins-request.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Admin](../../models/admin.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## listAdmins

Returns a list of all the admins at a company

scope: `company_admin:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_id-admins" method="get" path="/v1/companies/{company_id}/admins" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.listAdmins({
    companyId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { companiesListAdmins } from "openapi/funcs/companies-list-admins.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesListAdmins(sdk, {
    companyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesListAdmins failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyIdAdminsRequest](../../models/operations/get-v1-companies-company-id-admins-request.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Admin[]](../../models/.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## getOnboardingStatus

Retrieves a company's onboarding status, including whether onboarding is complete and the list of
required onboarding steps with their respective completion state.

scope: `company_onboarding_status:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-company-onboarding-status" method="get" path="/v1/companies/{company_uuid}/onboarding_status" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.getOnboardingStatus({
    companyUuid: "7b1d0df1-6403-4a06-8768-c1dd7d24d27a",
    additionalSteps: "external_payroll",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { companiesGetOnboardingStatus } from "openapi/funcs/companies-get-onboarding-status.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesGetOnboardingStatus(sdk, {
    companyUuid: "7b1d0df1-6403-4a06-8768-c1dd7d24d27a",
    additionalSteps: "external_payroll",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesGetOnboardingStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompanyOnboardingStatusRequest](../../models/operations/get-v1-company-onboarding-status-request.md)                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CompanyOnboardingStatus](../../models/company-onboarding-status.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## finishOnboarding

Finalize a company's onboarding process.

### Approve a company in demo

After a company is finished onboarding, Gusto requires an additional step to review and approve that company.
The company onboarding status is "onboarding_completed": false, until the API call is made to finish company
onboarding. In production environments, this step is required for risk-analysis purposes.

We provide the endpoint `PUT '/v1/companies/{company_uuid}/approve'` to facilitate company approvals in the demo environment.

```shell
PUT '/v1/companies/89771af8-b964-472e-8064-554dfbcb56d9/approve'

# Response: Company object, with company_status: 'Approved'
```

scope: `companies:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-company-finish-onboarding" method="put" path="/v1/companies/{company_uuid}/finish_onboarding" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.finishOnboarding({
    companyUuid: "7b1d0df1-6403-4a06-8768-c1dd7d24d27a",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { companiesFinishOnboarding } from "openapi/funcs/companies-finish-onboarding.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesFinishOnboarding(sdk, {
    companyUuid: "7b1d0df1-6403-4a06-8768-c1dd7d24d27a",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesFinishOnboarding failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompanyFinishOnboardingRequest](../../models/operations/get-v1-company-finish-onboarding-request.md)                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CompanyOnboardingStatus](../../models/company-onboarding-status.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.SDKDefaultError                | 4XX, 5XX                              | \*/\*                                 |

## getCustomFields

Returns a list of the custom fields of the company. Useful when you need to know the schema of custom fields for an entire company

scope: `companies:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_id-custom_fields" method="get" path="/v1/companies/{company_id}/custom_fields" example="Example" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.companies.getCustomFields({
    companyId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { companiesGetCustomFields } from "openapi/funcs/companies-get-custom-fields.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companiesGetCustomFields(sdk, {
    companyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesGetCustomFields failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyIdCustomFieldsRequest](../../models/operations/get-v1-companies-company-id-custom-fields-request.md)                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CompanyCustomFieldList](../../models/company-custom-field-list.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |