# PostV1PlaidProcessorTokenRequest

## Example Usage

```typescript
import { PostV1PlaidProcessorTokenRequest } from "openapi/models/operations";

let value: PostV1PlaidProcessorTokenRequest = {
  body: {
    ownerType: "Company",
    ownerId: "<id>",
    processorToken: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [models.VersionHeader](../../models/version-header.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `body`                                                                                                                                                                                                                       | [operations.PostV1PlaidProcessorTokenRequestBody](../../models/operations/post-v1-plaid-processor-token-request-body.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |