# MemberPortalInvitations

## Overview

### Available Operations

* [postV1EmployeesEmployeeIdMemberPortalInvitations](#postv1employeesemployeeidmemberportalinvitations) - Create an employee member portal invitation
* [getV1EmployeesEmployeeIdMemberPortalInvitations](#getv1employeesemployeeidmemberportalinvitations) - Get an employee member portal invitation
* [deleteV1EmployeesEmployeeIdMemberPortalInvitations](#deletev1employeesemployeeidmemberportalinvitations) - Cancel an employee member portal invitation
* [postV1ContractorsContractorUuidMemberPortalInvitations](#postv1contractorscontractoruuidmemberportalinvitations) - Create a contractor member portal invitation
* [getV1ContractorsContractorUuidMemberPortalInvitations](#getv1contractorscontractoruuidmemberportalinvitations) - Get a contractor member portal invitation
* [deleteV1ContractorsContractorUuidMemberPortalInvitations](#deletev1contractorscontractoruuidmemberportalinvitations) - Cancel a contractor member portal invitation

## postV1EmployeesEmployeeIdMemberPortalInvitations

Generates a member portal invitation for the specified employee. If the employee already has an invitation and its token has expired, calling this endpoint regenerates the invitation and overrides the prior token.

scope: `member_portal_invitation:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-employees-employee_id-member_portal_invitations" method="post" path="/v1/employees/{employee_id}/member_portal_invitations" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v-2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.memberPortalInvitations.postV1EmployeesEmployeeIdMemberPortalInvitations({
    employeeId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v-2025-11-15/core.js";
import { memberPortalInvitationsPostV1EmployeesEmployeeIdMemberPortalInvitations } from "@gusto/embedded-api-v-2025-11-15/funcs/memberPortalInvitationsPostV1EmployeesEmployeeIdMemberPortalInvitations.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await memberPortalInvitationsPostV1EmployeesEmployeeIdMemberPortalInvitations(gustoEmbedded, {
    employeeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memberPortalInvitationsPostV1EmployeesEmployeeIdMemberPortalInvitations failed:", res.error);
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
  useMemberPortalInvitationsPostV1EmployeesEmployeeIdMemberPortalInvitationsMutation
} from "@gusto/embedded-api-v-2025-11-15/react-query/memberPortalInvitationsPostV1EmployeesEmployeeIdMemberPortalInvitations.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1EmployeesEmployeeIdMemberPortalInvitationsRequest](../../models/operations/postv1employeesemployeeidmemberportalinvitationsrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1EmployeesEmployeeIdMemberPortalInvitationsResponse](../../models/operations/postv1employeesemployeeidmemberportalinvitationsresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## getV1EmployeesEmployeeIdMemberPortalInvitations

Returns the current status of an employee's member portal invitation (`pending`, `sent`, `verified`, `complete`, or `cancelled`) along with an `expired` flag indicating whether the invitation can still be acted on by the employee.

scope: `member_portal_invitation:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-employees-employee_id-member_portal_invitations" method="get" path="/v1/employees/{employee_id}/member_portal_invitations" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v-2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.memberPortalInvitations.getV1EmployeesEmployeeIdMemberPortalInvitations({
    employeeId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v-2025-11-15/core.js";
import { memberPortalInvitationsGetV1EmployeesEmployeeIdMemberPortalInvitations } from "@gusto/embedded-api-v-2025-11-15/funcs/memberPortalInvitationsGetV1EmployeesEmployeeIdMemberPortalInvitations.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await memberPortalInvitationsGetV1EmployeesEmployeeIdMemberPortalInvitations(gustoEmbedded, {
    employeeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memberPortalInvitationsGetV1EmployeesEmployeeIdMemberPortalInvitations failed:", res.error);
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
  useMemberPortalInvitationsGetV1EmployeesEmployeeIdMemberPortalInvitations,
  useMemberPortalInvitationsGetV1EmployeesEmployeeIdMemberPortalInvitationsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchMemberPortalInvitationsGetV1EmployeesEmployeeIdMemberPortalInvitations,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateMemberPortalInvitationsGetV1EmployeesEmployeeIdMemberPortalInvitations,
  invalidateAllMemberPortalInvitationsGetV1EmployeesEmployeeIdMemberPortalInvitations,
} from "@gusto/embedded-api-v-2025-11-15/react-query/memberPortalInvitationsGetV1EmployeesEmployeeIdMemberPortalInvitations.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1EmployeesEmployeeIdMemberPortalInvitationsRequest](../../models/operations/getv1employeesemployeeidmemberportalinvitationsrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1EmployeesEmployeeIdMemberPortalInvitationsResponse](../../models/operations/getv1employeesemployeeidmemberportalinvitationsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## deleteV1EmployeesEmployeeIdMemberPortalInvitations

Cancels the member portal invitation for the specified employee.

Note: this endpoint does not cancel the employee's self-onboarding flow. If you want the company admin to take full control of onboarding the employee, cancel the self-onboarding request instead.

scope: `member_portal_invitation:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-v1-employees-employee_id-member_portal_invitations" method="delete" path="/v1/employees/{employee_id}/member_portal_invitations" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v-2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.memberPortalInvitations.deleteV1EmployeesEmployeeIdMemberPortalInvitations({
    employeeId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v-2025-11-15/core.js";
import { memberPortalInvitationsDeleteV1EmployeesEmployeeIdMemberPortalInvitations } from "@gusto/embedded-api-v-2025-11-15/funcs/memberPortalInvitationsDeleteV1EmployeesEmployeeIdMemberPortalInvitations.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await memberPortalInvitationsDeleteV1EmployeesEmployeeIdMemberPortalInvitations(gustoEmbedded, {
    employeeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memberPortalInvitationsDeleteV1EmployeesEmployeeIdMemberPortalInvitations failed:", res.error);
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
  useMemberPortalInvitationsDeleteV1EmployeesEmployeeIdMemberPortalInvitationsMutation
} from "@gusto/embedded-api-v-2025-11-15/react-query/memberPortalInvitationsDeleteV1EmployeesEmployeeIdMemberPortalInvitations.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1EmployeesEmployeeIdMemberPortalInvitationsRequest](../../models/operations/deletev1employeesemployeeidmemberportalinvitationsrequest.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1EmployeesEmployeeIdMemberPortalInvitationsResponse](../../models/operations/deletev1employeesemployeeidmemberportalinvitationsresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## postV1ContractorsContractorUuidMemberPortalInvitations

Generates a member portal invitation for the specified contractor. If the contractor already has an invitation and its token has expired, calling this endpoint regenerates the invitation and overrides the prior token.

scope: `member_portal_invitation:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post-v1-contractors-contractor_uuid-member_portal_invitations" method="post" path="/v1/contractors/{contractor_uuid}/member_portal_invitations" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v-2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.memberPortalInvitations.postV1ContractorsContractorUuidMemberPortalInvitations({
    contractorUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v-2025-11-15/core.js";
import { memberPortalInvitationsPostV1ContractorsContractorUuidMemberPortalInvitations } from "@gusto/embedded-api-v-2025-11-15/funcs/memberPortalInvitationsPostV1ContractorsContractorUuidMemberPortalInvitations.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await memberPortalInvitationsPostV1ContractorsContractorUuidMemberPortalInvitations(gustoEmbedded, {
    contractorUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memberPortalInvitationsPostV1ContractorsContractorUuidMemberPortalInvitations failed:", res.error);
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
  useMemberPortalInvitationsPostV1ContractorsContractorUuidMemberPortalInvitationsMutation
} from "@gusto/embedded-api-v-2025-11-15/react-query/memberPortalInvitationsPostV1ContractorsContractorUuidMemberPortalInvitations.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1ContractorsContractorUuidMemberPortalInvitationsRequest](../../models/operations/postv1contractorscontractoruuidmemberportalinvitationsrequest.md)           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1ContractorsContractorUuidMemberPortalInvitationsResponse](../../models/operations/postv1contractorscontractoruuidmemberportalinvitationsresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## getV1ContractorsContractorUuidMemberPortalInvitations

Returns the current status of a contractor's member portal invitation (`pending`, `sent`, `verified`, `complete`, or `cancelled`) along with an `expired` flag indicating whether the invitation can still be acted on by the contractor.

scope: `member_portal_invitation:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-contractors-contractor_uuid-member_portal_invitations" method="get" path="/v1/contractors/{contractor_uuid}/member_portal_invitations" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v-2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.memberPortalInvitations.getV1ContractorsContractorUuidMemberPortalInvitations({
    contractorUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v-2025-11-15/core.js";
import { memberPortalInvitationsGetV1ContractorsContractorUuidMemberPortalInvitations } from "@gusto/embedded-api-v-2025-11-15/funcs/memberPortalInvitationsGetV1ContractorsContractorUuidMemberPortalInvitations.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await memberPortalInvitationsGetV1ContractorsContractorUuidMemberPortalInvitations(gustoEmbedded, {
    contractorUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memberPortalInvitationsGetV1ContractorsContractorUuidMemberPortalInvitations failed:", res.error);
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
  useMemberPortalInvitationsGetV1ContractorsContractorUuidMemberPortalInvitations,
  useMemberPortalInvitationsGetV1ContractorsContractorUuidMemberPortalInvitationsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchMemberPortalInvitationsGetV1ContractorsContractorUuidMemberPortalInvitations,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateMemberPortalInvitationsGetV1ContractorsContractorUuidMemberPortalInvitations,
  invalidateAllMemberPortalInvitationsGetV1ContractorsContractorUuidMemberPortalInvitations,
} from "@gusto/embedded-api-v-2025-11-15/react-query/memberPortalInvitationsGetV1ContractorsContractorUuidMemberPortalInvitations.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1ContractorsContractorUuidMemberPortalInvitationsRequest](../../models/operations/getv1contractorscontractoruuidmemberportalinvitationsrequest.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1ContractorsContractorUuidMemberPortalInvitationsResponse](../../models/operations/getv1contractorscontractoruuidmemberportalinvitationsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NotFoundErrorObject | 404                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## deleteV1ContractorsContractorUuidMemberPortalInvitations

Cancels the member portal invitation for the specified contractor.

Note: this endpoint does not cancel the contractor's self-onboarding flow. If you want the company admin to take full control of onboarding the contractor, cancel the self-onboarding request instead.

scope: `member_portal_invitation:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-v1-contractors-contractor_uuid-member_portal_invitations" method="delete" path="/v1/contractors/{contractor_uuid}/member_portal_invitations" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v-2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.memberPortalInvitations.deleteV1ContractorsContractorUuidMemberPortalInvitations({
    contractorUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v-2025-11-15/core.js";
import { memberPortalInvitationsDeleteV1ContractorsContractorUuidMemberPortalInvitations } from "@gusto/embedded-api-v-2025-11-15/funcs/memberPortalInvitationsDeleteV1ContractorsContractorUuidMemberPortalInvitations.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await memberPortalInvitationsDeleteV1ContractorsContractorUuidMemberPortalInvitations(gustoEmbedded, {
    contractorUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memberPortalInvitationsDeleteV1ContractorsContractorUuidMemberPortalInvitations failed:", res.error);
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
  useMemberPortalInvitationsDeleteV1ContractorsContractorUuidMemberPortalInvitationsMutation
} from "@gusto/embedded-api-v-2025-11-15/react-query/memberPortalInvitationsDeleteV1ContractorsContractorUuidMemberPortalInvitations.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1ContractorsContractorUuidMemberPortalInvitationsRequest](../../models/operations/deletev1contractorscontractoruuidmemberportalinvitationsrequest.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1ContractorsContractorUuidMemberPortalInvitationsResponse](../../models/operations/deletev1contractorscontractoruuidmemberportalinvitationsresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.NotFoundErrorObject      | 404                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |