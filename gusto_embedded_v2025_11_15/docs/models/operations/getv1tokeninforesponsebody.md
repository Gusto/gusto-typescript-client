# GetV1TokenInfoResponseBody

Example response

## Example Usage

```typescript
import { GetV1TokenInfoResponseBody } from "@gusto/embedded-api-v2025-11-15/models/operations/getv1tokeninfo.js";

let value: GetV1TokenInfoResponseBody = {
  scope: "<value>",
  resource: {
    type: "<value>",
    uuid: "e2908c1f-60fd-4585-95d7-9b312adf6c16",
  },
  resourceOwner: {
    type: "CompanyAdmin",
    uuid: "94f0f169-e640-4083-a58b-c109cf2774d9",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `scope`                                                              | *string*                                                             | :heavy_check_mark:                                                   | Space delimited string of accessible scopes.                         |
| `resource`                                                           | [operations.Resource](../../models/operations/resource.md)           | :heavy_check_mark:                                                   | Information about the token resource.                                |
| `resourceOwner`                                                      | [operations.ResourceOwner](../../models/operations/resourceowner.md) | :heavy_check_mark:                                                   | Information about the token owner                                    |