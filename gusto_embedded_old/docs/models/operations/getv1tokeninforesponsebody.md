# GetV1TokenInfoResponseBody

Example response

## Example Usage

```typescript
import { GetV1TokenInfoResponseBody } from "openapi/models/operations";

let value: GetV1TokenInfoResponseBody = {
  scope: "<value>",
  resource: {
    type: "<value>",
    uuid: "35d1d1f7-f9b0-4414-9156-1b94819e5a2b",
  },
  resourceOwner: {
    type: "CompanyAdmin",
    uuid: "90d0a4bf-3999-43f7-8db4-d6e9ebb8fa69",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `scope`                                                              | *string*                                                             | :heavy_check_mark:                                                   | Space delimited string of accessible scopes.                         |
| `resource`                                                           | [operations.Resource](../../models/operations/resource.md)           | :heavy_check_mark:                                                   | Information about the token resource.                                |
| `resourceOwner`                                                      | [operations.ResourceOwner](../../models/operations/resourceowner.md) | :heavy_check_mark:                                                   | Information about the token owner                                    |