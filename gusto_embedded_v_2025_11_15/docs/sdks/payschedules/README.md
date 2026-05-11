# PaySchedules

## Overview

### Available Operations

* [create](#create) - Create a new pay schedule
* [getAll](#getall) - Get the pay schedules for a company
* [getPreview](#getpreview) - Preview pay schedule dates
* [get](#get) - Get a pay schedule
* [update](#update) - Update a pay schedule
* [getPayPeriods](#getpayperiods) - Get pay periods for a company
* [getUnprocessedTerminationPeriods](#getunprocessedterminationperiods) - Get termination pay periods for a company
* [getAssignments](#getassignments) - Get pay schedule assignments for a company
* [previewAssignment](#previewassignment) - Preview pay schedule assignments for a company
* [assign](#assign) - Assign pay schedules for a company

## create

If a company does not have any pay schedules, this endpoint will create a single pay schedule and assign it to all employees. This is a common use case during company onboarding.

If a company has an existing active pay schedule and want to support multiple pay schedules, this endpoint will create a pay schedule that is not assigned to any employee.

Be sure to **[check state laws](https://www.dol.gov/agencies/whd/state/payday)** to know what schedule is right for your customers.

> If an onboarded company misses their first pay date, Gusto will automatically adjust the pay schedule to the next available pay date.

### Webhooks
- `pay_schedule.created`: Fires when a pay schedule is successfully created.

### Related guides
- [Create a pay schedule](doc:create-a-pay-schedule)
- [Pay Schedules](doc:pay-schedule-info)
- [Manage Pay Schedules via API](doc:manage-pay-schedules-api)

scope: `pay_schedules:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_id-pay_schedules" method="post" path="/v1/companies/{company_id}/pay_schedules" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.paySchedules.create({
    companyId: "<id>",
    body: {
      frequency: "Twice per month",
      anchorPayDate: new Date("2020-05-15"),
      anchorEndOfPayPeriod: new Date("2020-05-08"),
      day1: 15,
      day2: 31,
      customName: "demo pay schedule",
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
import { paySchedulesCreate } from "openapi/funcs/pay-schedules-create.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await paySchedulesCreate(sdk, {
    companyId: "<id>",
    body: {
      frequency: "Twice per month",
      anchorPayDate: new Date("2020-05-15"),
      anchorEndOfPayPeriod: new Date("2020-05-08"),
      day1: 15,
      day2: 31,
      customName: "demo pay schedule",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paySchedulesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyIdPaySchedulesRequest](../../models/operations/post-v1-companies-company-id-pay-schedules-request.md)                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PayScheduleShow](../../models/pay-schedule-show.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.SDKDefaultError          | 4XX, 5XX                        | \*/\*                           |

## getAll

Returns all pay schedules for a company. The pay schedule object captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.

scope: `pay_schedules:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_id-pay_schedules" method="get" path="/v1/companies/{company_id}/pay_schedules" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.paySchedules.getAll({
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
import { paySchedulesGetAll } from "openapi/funcs/pay-schedules-get-all.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await paySchedulesGetAll(sdk, {
    companyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paySchedulesGetAll failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyIdPaySchedulesRequest](../../models/operations/get-v1-companies-company-id-pay-schedules-request.md)                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PayScheduleShow[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getPreview

Provides a preview of a pay schedule with the specified parameters for the next 18 months. Use this before creating or updating a pay schedule to show expected check dates, pay period boundaries, and payroll deadlines.

### Related guides
- [Create a pay schedule](doc:create-a-pay-schedule)
- [Manage Pay Schedules via API](doc:manage-pay-schedules-api)

scope: `pay_schedules:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_id-pay_schedules-preview" method="get" path="/v1/companies/{company_id}/pay_schedules/preview" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.paySchedules.getPreview({
    companyId: "<id>",
    frequency: "Twice per month",
    anchorPayDate: new Date("2020-05-15"),
    anchorEndOfPayPeriod: new Date("2020-05-08"),
    day1: 15,
    day2: 31,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { paySchedulesGetPreview } from "openapi/funcs/pay-schedules-get-preview.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await paySchedulesGetPreview(sdk, {
    companyId: "<id>",
    frequency: "Twice per month",
    anchorPayDate: new Date("2020-05-15"),
    anchorEndOfPayPeriod: new Date("2020-05-08"),
    day1: 15,
    day2: 31,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paySchedulesGetPreview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyIdPaySchedulesPreviewRequest](../../models/operations/get-v1-companies-company-id-pay-schedules-preview-request.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PaySchedulePreview](../../models/pay-schedule-preview.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.SDKDefaultError          | 4XX, 5XX                        | \*/\*                           |

## get

Returns a single pay schedule by UUID. The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.

scope: `pay_schedules:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_id-pay_schedules-pay_schedule_id" method="get" path="/v1/companies/{company_id}/pay_schedules/{pay_schedule_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.paySchedules.get({
    companyId: "<id>",
    payScheduleId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { paySchedulesGet } from "openapi/funcs/pay-schedules-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await paySchedulesGet(sdk, {
    companyId: "<id>",
    payScheduleId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paySchedulesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest](../../models/operations/get-v1-companies-company-id-pay-schedules-pay-schedule-id-request.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PayScheduleShow](../../models/pay-schedule-show.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## update

Updates a pay schedule. The `version` parameter from the GET response is required for [optimistic concurrency](doc:api-fundamentals); a mismatch returns 409 Conflict.

### Effect on payrolls
Updating a pay schedule will delete any unprocessed regular payrolls whose pay period end date is today or in the future. Already-processed payrolls are not affected.

### Pay schedules may be automatically adjusted
If an onboarded company misses their first pay date, Gusto will automatically adjust the pay schedule to the next available pay date.

### Webhooks
- `pay_schedule.updated`: Fires when a pay schedule is successfully updated.

### Related guides
- [Create a pay schedule](doc:create-a-pay-schedule)
- [Manage Pay Schedules via API](doc:manage-pay-schedules-api)

scope: `pay_schedules:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put-v1-companies-company_id-pay_schedules-pay_schedule_id" method="put" path="/v1/companies/{company_id}/pay_schedules/{pay_schedule_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.paySchedules.update({
    companyId: "<id>",
    payScheduleId: "<id>",
    body: {
      version: "68934a3e9455fa72420237eb05902327",
      autoPayroll: true,
      frequency: "Twice per month",
      anchorPayDate: new Date("2021-10-15"),
      anchorEndOfPayPeriod: new Date("2021-10-15"),
      day1: 15,
      day2: 31,
      customName: "demo pay schedule",
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
import { paySchedulesUpdate } from "openapi/funcs/pay-schedules-update.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await paySchedulesUpdate(sdk, {
    companyId: "<id>",
    payScheduleId: "<id>",
    body: {
      version: "68934a3e9455fa72420237eb05902327",
      autoPayroll: true,
      frequency: "Twice per month",
      anchorPayDate: new Date("2021-10-15"),
      anchorEndOfPayPeriod: new Date("2021-10-15"),
      day1: 15,
      day2: 31,
      customName: "demo pay schedule",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paySchedulesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest](../../models/operations/put-v1-companies-company-id-pay-schedules-pay-schedule-id-request.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PayScheduleShow](../../models/pay-schedule-show.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 409, 422                        | application/json                |
| errors.SDKDefaultError          | 4XX, 5XX                        | \*/\*                           |

## getPayPeriods

Pay periods are the foundation of payroll. Compensation, time & attendance, taxes, and expense reports all rely on when they happened.

To begin submitting information for a given payroll, we need to agree on the time period.

By default, this endpoint returns pay periods starting from 6 months ago to the date today. Use the `start_date` and `end_date` parameters to change the scope of the response. End dates can be up to 3 months in the future and there is no limit on start dates.

Starting in version 2023-04-01, the `eligible_employees` attribute was removed from the response. The eligible employees for a payroll are determined by the employee_compensations returned from the [PUT /v1/companies/{company_id}/payrolls/{payroll_id}/prepare](ref:put-v1-companies-company_id-payrolls-payroll_id-prepare) endpoint.

scope: `payrolls:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_id-pay_periods" method="get" path="/v1/companies/{company_id}/pay_periods" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.paySchedules.getPayPeriods({
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
import { paySchedulesGetPayPeriods } from "openapi/funcs/pay-schedules-get-pay-periods.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await paySchedulesGetPayPeriods(sdk, {
    companyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paySchedulesGetPayPeriods failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyIdPayPeriodsRequest](../../models/operations/get-v1-companies-company-id-pay-periods-request.md)                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PayPeriod[]](../../models/.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.SDKDefaultError          | 4XX, 5XX                        | \*/\*                           |

## getUnprocessedTerminationPeriods

When a payroll admin terminates an employee and selects "Dismissal Payroll" as the employee's final payroll, their last pay period will appear on the list.

This endpoint returns the unprocessed pay periods for past and future terminated employees in a given company.

scope: `payrolls:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_id-unprocessed_termination_pay_periods" method="get" path="/v1/companies/{company_id}/pay_periods/unprocessed_termination_pay_periods" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.paySchedules.getUnprocessedTerminationPeriods({
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
import { paySchedulesGetUnprocessedTerminationPeriods } from "openapi/funcs/pay-schedules-get-unprocessed-termination-periods.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await paySchedulesGetUnprocessedTerminationPeriods(sdk, {
    companyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paySchedulesGetUnprocessedTerminationPeriods failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                       | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                       | [operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest](../../models/operations/get-v1-companies-company-id-unprocessed-termination-pay-periods-request.md) | :heavy_check_mark:                                                                                                                                                              | The request object to use for the request.                                                                                                                                      |
| `options`                                                                                                                                                                       | RequestOptions                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                         | :heavy_minus_sign:                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.  |
| `options.retries`                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                |

### Response

**Promise\<[models.UnprocessedTerminationPayPeriod[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getAssignments

This endpoint returns the current pay schedule assignment for a company, with pay schedule and employee/department mappings depending on the pay schedule type.

scope: `pay_schedules:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-company_id-pay_schedules-assignments" method="get" path="/v1/companies/{company_id}/pay_schedules/assignments" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.paySchedules.getAssignments({
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
import { paySchedulesGetAssignments } from "openapi/funcs/pay-schedules-get-assignments.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await paySchedulesGetAssignments(sdk, {
    companyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paySchedulesGetAssignments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest](../../models/operations/get-v1-companies-company-id-pay-schedules-assignments-request.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PayScheduleAssignment](../../models/pay-schedule-assignment.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## previewAssignment

This endpoint returns the employee changes, including pay period and transition pay periods, for changing the pay schedule.

scope: `pay_schedules:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_id-pay_schedules-assignment_preview" method="post" path="/v1/companies/{company_id}/pay_schedules/assignment_preview" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await sdk.paySchedules.previewAssignment({
    companyId: "<id>",
    body: {
      type: "by_employee",
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
import { paySchedulesPreviewAssignment } from "openapi/funcs/pay-schedules-preview-assignment.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await paySchedulesPreviewAssignment(sdk, {
    companyId: "<id>",
    body: {
      type: "by_employee",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paySchedulesPreviewAssignment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest](../../models/operations/post-v1-companies-company-id-pay-schedules-assignment-preview-request.md)    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PayScheduleAssignmentPreview](../../models/pay-schedule-assignment-preview.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.SDKDefaultError          | 4XX, 5XX                        | \*/\*                           |

## assign

This endpoint assigns employees to pay schedules based on the schedule type.
For `by_employee` and `by_department` schedules, use the `partial_assignment` parameter to control the assignment scope. Set it to `true` for partial assignments (only some employees or departments at a time) and `false` for full assignments (all employees or departments at once).

scope: `pay_schedules:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_id-pay_schedules-assign" method="post" path="/v1/companies/{company_id}/pay_schedules/assign" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await sdk.paySchedules.assign({
    companyId: "<id>",
    body: {
      type: "by_employee",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { paySchedulesAssign } from "openapi/funcs/pay-schedules-assign.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  companyAccessAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await paySchedulesAssign(sdk, {
    companyId: "<id>",
    body: {
      type: "by_employee",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("paySchedulesAssign failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyIdPaySchedulesAssignRequest](../../models/operations/post-v1-companies-company-id-pay-schedules-assign-request.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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