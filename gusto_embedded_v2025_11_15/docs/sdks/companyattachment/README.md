# CompanyAttachment

## Overview

### Available Operations

* [getDownloadUrl](#getdownloadurl) - Get a temporary url to download the Company Attachment file

## getDownloadUrl

Retrieve a temporary url to download a attachment file uploaded
by the company.

scope: `company_attachments:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-v1-companies-attachment-url" method="get" path="/v1/companies/{company_id}/attachments/{company_attachment_uuid}/download_url" -->
```typescript
import { GustoEmbedded } from "@gusto/embedded-api-v2025-11-15";

const gustoEmbedded = new GustoEmbedded({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const result = await gustoEmbedded.companyAttachment.getDownloadUrl({
    companyId: "<id>",
    companyAttachmentUuid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GustoEmbeddedCore } from "@gusto/embedded-api-v2025-11-15/core.js";
import { companyAttachmentGetDownloadUrl } from "@gusto/embedded-api-v2025-11-15/funcs/companyAttachmentGetDownloadUrl.js";

// Use `GustoEmbeddedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gustoEmbedded = new GustoEmbeddedCore({
  companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
});

async function run() {
  const res = await companyAttachmentGetDownloadUrl(gustoEmbedded, {
    companyId: "<id>",
    companyAttachmentUuid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyAttachmentGetDownloadUrl failed:", res.error);
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
  useCompanyAttachmentGetDownloadUrl,
  useCompanyAttachmentGetDownloadUrlSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchCompanyAttachmentGetDownloadUrl,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateCompanyAttachmentGetDownloadUrl,
  invalidateAllCompanyAttachmentGetDownloadUrl,
} from "@gusto/embedded-api-v2025-11-15/react-query/companyAttachmentGetDownloadUrl.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompaniesAttachmentUrlRequest](../../models/operations/getv1companiesattachmenturlrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CompaniesAttachmentUrlResponse](../../models/operations/getv1companiesattachmenturlresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |