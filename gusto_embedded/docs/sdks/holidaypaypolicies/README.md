# HolidayPayPolicies
(*holidayPayPolicies*)

## Overview

### Available Operations

* [get](#get) - Get a company's holiday pay policy
* [create](#create) - Create a holiday pay policy for a company
* [update](#update) - Update a company's holiday pay policy
* [delete](#delete) - Delete a company's holiday pay policy
* [addEmployees](#addemployees) - Add employees to a company's holiday pay policy
* [removeEmployees](#removeemployees) - Remove employees from a company's holiday pay policy

## get

Get a company's holiday pay policy

scope: `holiday_pay_policies:read`

### Example Usage

```typescript
import { GustoEmbedded } from "gusto-embedded";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.holidayPayPolicies.get({
    companyUuid: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "gusto-embedded/core.js";
import { holidayPayPoliciesGet } from "gusto-embedded/funcs/holidayPayPoliciesGet.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await holidayPayPoliciesGet(gustoEmbedded, {
    companyUuid: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetCompaniesCompanyUuidHolidayPayPolicyRequest](../../models/operations/getcompaniescompanyuuidholidaypaypolicyrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.HolidayPayPolicy](../../models/components/holidaypaypolicy.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## create

Create a holiday pay policy for a company

scope: `holiday_pay_policies:write`

### Example Usage

```typescript
import { GustoEmbedded } from "gusto-embedded";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.holidayPayPolicies.create({
    companyUuid: "<id>",
    requestBody: {
      federalHolidays: {
        mlkDay: {
          selected: true,
        },
        memorialDay: {
          selected: true,
        },
        independenceDay: {
          selected: true,
        },
        veteransDay: {
          selected: true,
        },
        thanksgiving: {
          selected: true,
        },
        christmasDay: {
          selected: true,
        },
      },
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
import { GustoEmbeddedCore } from "gusto-embedded/core.js";
import { holidayPayPoliciesCreate } from "gusto-embedded/funcs/holidayPayPoliciesCreate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await holidayPayPoliciesCreate(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      federalHolidays: {
        mlkDay: {
          selected: true,
        },
        memorialDay: {
          selected: true,
        },
        independenceDay: {
          selected: true,
        },
        veteransDay: {
          selected: true,
        },
        thanksgiving: {
          selected: true,
        },
        christmasDay: {
          selected: true,
        },
      },
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
| `request`                                                                                                                                                                      | [operations.PostCompaniesCompanyUuidHolidayPayPolicyRequest](../../models/operations/postcompaniescompanyuuidholidaypaypolicyrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.HolidayPayPolicy](../../models/components/holidaypaypolicy.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## update

Update a company's holiday pay policy

scope: `holiday_pay_policies:write`

### Example Usage

```typescript
import { GustoEmbedded } from "gusto-embedded";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.holidayPayPolicies.update({
    companyUuid: "<id>",
    requestBody: {
      version: "1b37938b017c7fd7116bada007072290",
      federalHolidays: {
        mlkDay: {
          selected: true,
        },
        memorialDay: {
          selected: true,
        },
        independenceDay: {
          selected: true,
        },
        veteransDay: {
          selected: true,
        },
        thanksgiving: {
          selected: true,
        },
        christmasDay: {
          selected: true,
        },
      },
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
import { GustoEmbeddedCore } from "gusto-embedded/core.js";
import { holidayPayPoliciesUpdate } from "gusto-embedded/funcs/holidayPayPoliciesUpdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await holidayPayPoliciesUpdate(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      version: "1b37938b017c7fd7116bada007072290",
      federalHolidays: {
        mlkDay: {
          selected: true,
        },
        memorialDay: {
          selected: true,
        },
        independenceDay: {
          selected: true,
        },
        veteransDay: {
          selected: true,
        },
        thanksgiving: {
          selected: true,
        },
        christmasDay: {
          selected: true,
        },
      },
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
| `request`                                                                                                                                                                      | [operations.PutCompaniesCompanyUuidHolidayPayPolicyRequest](../../models/operations/putcompaniescompanyuuidholidaypaypolicyrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.HolidayPayPolicy](../../models/components/holidaypaypolicy.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## delete

Delete a company's holiday pay policy

scope: `holiday_pay_policies:write`

### Example Usage

```typescript
import { GustoEmbedded } from "gusto-embedded";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  await gustoEmbedded.holidayPayPolicies.delete({
    companyUuid: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "gusto-embedded/core.js";
import { holidayPayPoliciesDelete } from "gusto-embedded/funcs/holidayPayPoliciesDelete.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await holidayPayPoliciesDelete(gustoEmbedded, {
    companyUuid: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteCompaniesCompanyUuidHolidayPayPolicyRequest](../../models/operations/deletecompaniescompanyuuidholidaypaypolicyrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## addEmployees

Add employees to a company's holiday pay policy

scope: `holiday_pay_policies:write`

### Example Usage

```typescript
import { GustoEmbedded } from "gusto-embedded";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.holidayPayPolicies.addEmployees({
    companyUuid: "<id>",
    requestBody: {
      version: "1b37938b017c7fd7116bada007072290",
      employees: [
        {
          uuid: "1ca3cd25-3eda-48c6-ac88-f0e7fb91a15a",
        },
        {
          uuid: "fe977550-6621-4cfc-b4af-60b6af58c8ef",
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
import { GustoEmbeddedCore } from "gusto-embedded/core.js";
import { holidayPayPoliciesAddEmployees } from "gusto-embedded/funcs/holidayPayPoliciesAddEmployees.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await holidayPayPoliciesAddEmployees(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      version: "1b37938b017c7fd7116bada007072290",
      employees: [
        {
          uuid: "1ca3cd25-3eda-48c6-ac88-f0e7fb91a15a",
        },
        {
          uuid: "fe977550-6621-4cfc-b4af-60b6af58c8ef",
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
| `request`                                                                                                                                                                      | [operations.PutCompaniesCompanyUuidHolidayPayPolicyAddRequest](../../models/operations/putcompaniescompanyuuidholidaypaypolicyaddrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.HolidayPayPolicy](../../models/components/holidaypaypolicy.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## removeEmployees

Remove employees from a company's holiday pay policy

scope: `holiday_pay_policies:write`

### Example Usage

```typescript
import { GustoEmbedded } from "gusto-embedded";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.holidayPayPolicies.removeEmployees({
    companyUuid: "<id>",
    requestBody: {
      version: "1b37938b017c7fd7116bada007072290",
      employees: [
        {
          uuid: "1ca3cd25-3eda-48c6-ac88-f0e7fb91a15a",
        },
        {
          uuid: "fe977550-6621-4cfc-b4af-60b6af58c8ef",
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
import { GustoEmbeddedCore } from "gusto-embedded/core.js";
import { holidayPayPoliciesRemoveEmployees } from "gusto-embedded/funcs/holidayPayPoliciesRemoveEmployees.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await holidayPayPoliciesRemoveEmployees(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      version: "1b37938b017c7fd7116bada007072290",
      employees: [
        {
          uuid: "1ca3cd25-3eda-48c6-ac88-f0e7fb91a15a",
        },
        {
          uuid: "fe977550-6621-4cfc-b4af-60b6af58c8ef",
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
| `request`                                                                                                                                                                      | [operations.PutCompaniesCompanyUuidHolidayPayPolicyRemoveRequest](../../models/operations/putcompaniescompanyuuidholidaypaypolicyremoverequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.HolidayPayPolicy](../../models/components/holidaypaypolicy.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |