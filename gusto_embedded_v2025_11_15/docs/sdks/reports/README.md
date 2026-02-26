# Reports

## Overview

### Available Operations

* [createCustom](#createcustom) - Create a custom report
* [postPayrollsPayrollUuidReportsGeneralLedger](#postpayrollspayrolluuidreportsgeneralledger) - Create a general ledger report
* [getReportsRequestUuid](#getreportsrequestuuid) - Get a report
* [getTemplate](#gettemplate) - Get a report template
* [postV1CompaniesCompanyIdReportsEmployeesAnnualFicaWage](#postv1companiescompanyidreportsemployeesannualficawage) - Create an employees annual FICA wage report

## createCustom

Create a custom report for a company. This endpoint initiates creating a custom report with custom columns, groupings, and filters. The `request_uuid` in the response can then be used to poll for the status and report URL upon completion using the [report GET endpoint](https://docs.gusto.com/embedded-payroll/reference/get-reports-request_uuid). This URL is valid for 10 minutes.

scope: `company_reports:write`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="post-companies-company_uuid-reports" method="post" path="/v1/companies/{company_uuid}/reports" example="Basic" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";
import { RFCDate } from "@gusto/embedded-api-v2025-11-15/types/rfcdate.js";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reports.createCustom({
    companyUuid: "<id>",
    requestBody: {
      columns: [
        "total_time_off_earnings",
      ],
      groupings: [],
      fileType: "json",
      startDate: new RFCDate("2024-01-01"),
      endDate: new RFCDate("2024-04-01"),
      dismissedStartDate: new RFCDate("2024-01-01"),
      dismissedEndDate: new RFCDate("2024-04-01"),
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { reportsCreateCustom } from "@gusto/embedded-api-v2025-11-15/funcs/reportsCreateCustom.js";
import { RFCDate } from "@gusto/embedded-api-v2025-11-15/types/rfcdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reportsCreateCustom(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      columns: [
        "total_time_off_earnings",
      ],
      groupings: [],
      fileType: "json",
      startDate: new RFCDate("2024-01-01"),
      endDate: new RFCDate("2024-04-01"),
      dismissedStartDate: new RFCDate("2024-01-01"),
      dismissedEndDate: new RFCDate("2024-04-01"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsCreateCustom failed:", res.error);
  }
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
  useReportsCreateCustomMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/reportsCreateCustom.js";
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="post-companies-company_uuid-reports" method="post" path="/v1/companies/{company_uuid}/reports" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";
import { RFCDate } from "@gusto/embedded-api-v2025-11-15/types/rfcdate.js";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reports.createCustom({
    companyUuid: "<id>",
    requestBody: {
      columns: [
        "total_time_off_earnings",
      ],
      groupings: [],
      fileType: "json",
      startDate: new RFCDate("2024-01-01"),
      endDate: new RFCDate("2024-04-01"),
      dismissedStartDate: new RFCDate("2024-01-01"),
      dismissedEndDate: new RFCDate("2024-04-01"),
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { reportsCreateCustom } from "@gusto/embedded-api-v2025-11-15/funcs/reportsCreateCustom.js";
import { RFCDate } from "@gusto/embedded-api-v2025-11-15/types/rfcdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reportsCreateCustom(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      columns: [
        "total_time_off_earnings",
      ],
      groupings: [],
      fileType: "json",
      startDate: new RFCDate("2024-01-01"),
      endDate: new RFCDate("2024-04-01"),
      dismissedStartDate: new RFCDate("2024-01-01"),
      dismissedEndDate: new RFCDate("2024-04-01"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsCreateCustom failed:", res.error);
  }
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
  useReportsCreateCustomMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/reportsCreateCustom.js";
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="post-companies-company_uuid-reports" method="post" path="/v1/companies/{company_uuid}/reports" example="Nested" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";
import { RFCDate } from "@gusto/embedded-api-v2025-11-15/types/rfcdate.js";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reports.createCustom({
    companyUuid: "<id>",
    requestBody: {
      columns: [
        "total_time_off_earnings",
      ],
      groupings: [],
      fileType: "json",
      startDate: new RFCDate("2024-01-01"),
      endDate: new RFCDate("2024-04-01"),
      dismissedStartDate: new RFCDate("2024-01-01"),
      dismissedEndDate: new RFCDate("2024-04-01"),
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { reportsCreateCustom } from "@gusto/embedded-api-v2025-11-15/funcs/reportsCreateCustom.js";
import { RFCDate } from "@gusto/embedded-api-v2025-11-15/types/rfcdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reportsCreateCustom(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      columns: [
        "total_time_off_earnings",
      ],
      groupings: [],
      fileType: "json",
      startDate: new RFCDate("2024-01-01"),
      endDate: new RFCDate("2024-04-01"),
      dismissedStartDate: new RFCDate("2024-01-01"),
      dismissedEndDate: new RFCDate("2024-04-01"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsCreateCustom failed:", res.error);
  }
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
  useReportsCreateCustomMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/reportsCreateCustom.js";
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="post-companies-company_uuid-reports" method="post" path="/v1/companies/{company_uuid}/reports" example="Resource" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";
import { RFCDate } from "@gusto/embedded-api-v2025-11-15/types/rfcdate.js";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reports.createCustom({
    companyUuid: "<id>",
    requestBody: {
      columns: [
        "total_time_off_earnings",
      ],
      groupings: [],
      fileType: "json",
      startDate: new RFCDate("2024-01-01"),
      endDate: new RFCDate("2024-04-01"),
      dismissedStartDate: new RFCDate("2024-01-01"),
      dismissedEndDate: new RFCDate("2024-04-01"),
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { reportsCreateCustom } from "@gusto/embedded-api-v2025-11-15/funcs/reportsCreateCustom.js";
import { RFCDate } from "@gusto/embedded-api-v2025-11-15/types/rfcdate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reportsCreateCustom(gustoEmbedded, {
    companyUuid: "<id>",
    requestBody: {
      columns: [
        "total_time_off_earnings",
      ],
      groupings: [],
      fileType: "json",
      startDate: new RFCDate("2024-01-01"),
      endDate: new RFCDate("2024-04-01"),
      dismissedStartDate: new RFCDate("2024-01-01"),
      dismissedEndDate: new RFCDate("2024-04-01"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsCreateCustom failed:", res.error);
  }
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
  useReportsCreateCustomMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/reportsCreateCustom.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostCompaniesCompanyUuidReportsRequest](../../models/operations/postcompaniescompanyuuidreportsrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostCompaniesCompanyUuidReportsResponse](../../models/operations/postcompaniescompanyuuidreportsresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## postPayrollsPayrollUuidReportsGeneralLedger

Create a general ledger report for a payroll. The report can be aggregated by different dimensions such as job or department.

Use the `request_uuid` in the response with the [report GET endpoint](../reference/get-reports-request_uuid) to poll for the status and report URL upon completion. The retrieved report will be generated in a JSON format.

scope: `company_reports:write` OR `company_reports:write:general_ledger`

### Example Usage: Basic

<!-- UsageSnippet language="typescript" operationID="post-payrolls-payroll_uuid-reports-general_ledger" method="post" path="/v1/payrolls/{payroll_uuid}/reports/general_ledger" example="Basic" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reports.postPayrollsPayrollUuidReportsGeneralLedger({
    payrollUuid: "<id>",
    requestBody: {
      aggregation: "default",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { reportsPostPayrollsPayrollUuidReportsGeneralLedger } from "@gusto/embedded-api-v2025-11-15/funcs/reportsPostPayrollsPayrollUuidReportsGeneralLedger.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reportsPostPayrollsPayrollUuidReportsGeneralLedger(gustoEmbedded, {
    payrollUuid: "<id>",
    requestBody: {
      aggregation: "default",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsPostPayrollsPayrollUuidReportsGeneralLedger failed:", res.error);
  }
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
  useReportsPostPayrollsPayrollUuidReportsGeneralLedgerMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/reportsPostPayrollsPayrollUuidReportsGeneralLedger.js";
```
### Example Usage: Example

<!-- UsageSnippet language="typescript" operationID="post-payrolls-payroll_uuid-reports-general_ledger" method="post" path="/v1/payrolls/{payroll_uuid}/reports/general_ledger" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reports.postPayrollsPayrollUuidReportsGeneralLedger({
    payrollUuid: "<id>",
    requestBody: {
      aggregation: "default",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { reportsPostPayrollsPayrollUuidReportsGeneralLedger } from "@gusto/embedded-api-v2025-11-15/funcs/reportsPostPayrollsPayrollUuidReportsGeneralLedger.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reportsPostPayrollsPayrollUuidReportsGeneralLedger(gustoEmbedded, {
    payrollUuid: "<id>",
    requestBody: {
      aggregation: "default",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsPostPayrollsPayrollUuidReportsGeneralLedger failed:", res.error);
  }
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
  useReportsPostPayrollsPayrollUuidReportsGeneralLedgerMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/reportsPostPayrollsPayrollUuidReportsGeneralLedger.js";
```
### Example Usage: Nested

<!-- UsageSnippet language="typescript" operationID="post-payrolls-payroll_uuid-reports-general_ledger" method="post" path="/v1/payrolls/{payroll_uuid}/reports/general_ledger" example="Nested" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reports.postPayrollsPayrollUuidReportsGeneralLedger({
    payrollUuid: "<id>",
    requestBody: {
      aggregation: "default",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { reportsPostPayrollsPayrollUuidReportsGeneralLedger } from "@gusto/embedded-api-v2025-11-15/funcs/reportsPostPayrollsPayrollUuidReportsGeneralLedger.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reportsPostPayrollsPayrollUuidReportsGeneralLedger(gustoEmbedded, {
    payrollUuid: "<id>",
    requestBody: {
      aggregation: "default",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsPostPayrollsPayrollUuidReportsGeneralLedger failed:", res.error);
  }
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
  useReportsPostPayrollsPayrollUuidReportsGeneralLedgerMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/reportsPostPayrollsPayrollUuidReportsGeneralLedger.js";
```
### Example Usage: Resource

<!-- UsageSnippet language="typescript" operationID="post-payrolls-payroll_uuid-reports-general_ledger" method="post" path="/v1/payrolls/{payroll_uuid}/reports/general_ledger" example="Resource" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reports.postPayrollsPayrollUuidReportsGeneralLedger({
    payrollUuid: "<id>",
    requestBody: {
      aggregation: "default",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { reportsPostPayrollsPayrollUuidReportsGeneralLedger } from "@gusto/embedded-api-v2025-11-15/funcs/reportsPostPayrollsPayrollUuidReportsGeneralLedger.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reportsPostPayrollsPayrollUuidReportsGeneralLedger(gustoEmbedded, {
    payrollUuid: "<id>",
    requestBody: {
      aggregation: "default",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsPostPayrollsPayrollUuidReportsGeneralLedger failed:", res.error);
  }
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
  useReportsPostPayrollsPayrollUuidReportsGeneralLedgerMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/reportsPostPayrollsPayrollUuidReportsGeneralLedger.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostPayrollsPayrollUuidReportsGeneralLedgerRequest](../../models/operations/postpayrollspayrolluuidreportsgeneralledgerrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostPayrollsPayrollUuidReportsGeneralLedgerResponse](../../models/operations/postpayrollspayrolluuidreportsgeneralledgerresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## getReportsRequestUuid

Get a company's report given the `request_uuid`. The response will include the report request's status and, if complete, the report URL.

Reports containing PHI are inaccessible with `company_reports:read:tier_2_only` data scope

scope: `company_reports:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-reports-request_uuid" method="get" path="/v1/reports/{request_uuid}" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reports.getReportsRequestUuid({
    requestUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { reportsGetReportsRequestUuid } from "@gusto/embedded-api-v2025-11-15/funcs/reportsGetReportsRequestUuid.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reportsGetReportsRequestUuid(gustoEmbedded, {
    requestUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsGetReportsRequestUuid failed:", res.error);
  }
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
  // Query hooks for fetching data.
  useReportsGetReportsRequestUuid,
  useReportsGetReportsRequestUuidSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchReportsGetReportsRequestUuid,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateReportsGetReportsRequestUuid,
  invalidateAllReportsGetReportsRequestUuid,
} from "@gusto/embedded-api-v2025-11-15/react-query/reportsGetReportsRequestUuid.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetReportsRequestUuidRequest](../../models/operations/getreportsrequestuuidrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetReportsRequestUuidResponse](../../models/operations/getreportsrequestuuidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getTemplate

Get a company's report template. The only supported report type is `payroll_journal`. The resulting columns and groupings from this endpoint can be used as a guidance to create the report using the POST create report endpoint.

scope: `company_reports:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-companies-company_uuid-report-templates-report_type" method="get" path="/v1/companies/{company_uuid}/report_templates/{report_type}" example="Example" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reports.getTemplate({
    companyUuid: "<id>",
    reportType: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { reportsGetTemplate } from "@gusto/embedded-api-v2025-11-15/funcs/reportsGetTemplate.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reportsGetTemplate(gustoEmbedded, {
    companyUuid: "<id>",
    reportType: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsGetTemplate failed:", res.error);
  }
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
  // Query hooks for fetching data.
  useReportsGetTemplate,
  useReportsGetTemplateSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchReportsGetTemplate,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateReportsGetTemplate,
  invalidateAllReportsGetTemplate,
} from "@gusto/embedded-api-v2025-11-15/react-query/reportsGetTemplate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCompaniesCompanyUuidReportTemplatesReportTypeRequest](../../models/operations/getcompaniescompanyuuidreporttemplatesreporttyperequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCompaniesCompanyUuidReportTemplatesReportTypeResponse](../../models/operations/getcompaniescompanyuuidreporttemplatesreporttyperesponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postV1CompaniesCompanyIdReportsEmployeesAnnualFicaWage

Generates a report containing annual FICA (Federal Insurance Contributions Act) wage data for all employees in a company over a specified year range.

This report provides detailed wage information subject to Social Security and Medicare taxes, useful for benefits integrations that need to verify employee earnings for compliance and benefit calculations.

The report is generated asynchronously. After making this request, you will receive a `request_uuid` which can be used to poll the [Get a report](ref:get-v1-reports-request_uuid) endpoint to check the status and retrieve the report when complete.

scope: `company_reports:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-companies-company_id-reports-employees_annual_fica_wage" method="post" path="/v1/companies/{company_id}/reports/employees_annual_fica_wage" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.reports.postV1CompaniesCompanyIdReportsEmployeesAnnualFicaWage({
    companyId: "<id>",
    requestBody: {
      startYear: 2023,
      endYear: 2024,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { reportsPostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWage } from "@gusto/embedded-api-v2025-11-15/funcs/reportsPostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWage.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await reportsPostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWage(gustoEmbedded, {
    companyId: "<id>",
    requestBody: {
      startYear: 2023,
      endYear: 2024,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsPostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWage failed:", res.error);
  }
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
  useReportsPostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageMutation
} from "@gusto/embedded-api-v2025-11-15/react-query/reportsPostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWage.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequest](../../models/operations/postv1companiescompanyidreportsemployeesannualficawagerequest.md)           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponse](../../models/operations/postv1companiescompanyidreportsemployeesannualficawageresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NotFoundErrorObject            | 404                                   | application/json                      |
| errors.UnprocessableEntityErrorObject | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |