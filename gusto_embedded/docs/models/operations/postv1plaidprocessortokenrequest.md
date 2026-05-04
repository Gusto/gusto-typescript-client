# PostV1PlaidProcessorTokenRequest

## Example Usage

```typescript
import { PostV1PlaidProcessorTokenRequest } from "@gusto/embedded-api/models/operations/postv1plaidprocessortoken.js";

let value: PostV1PlaidProcessorTokenRequest = {
  plaidProcessorTokenRequest: {
    ownerType: "Company",
    ownerId: "<id>",
    processorToken: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1PlaidProcessorTokenHeaderXGustoAPIVersion](../../models/operations/postv1plaidprocessortokenheaderxgustoapiversion.md)                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `plaidProcessorTokenRequest`                                                                                                                                                                                                 | [components.PlaidProcessorTokenRequest](../../models/components/plaidprocessortokenrequest.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |