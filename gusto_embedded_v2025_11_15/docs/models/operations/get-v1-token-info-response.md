# GetV1TokenInfoResponse

Example response

## Example Usage

```typescript
import { GetV1TokenInfoResponse } from "openapi/models/operations";

let value: GetV1TokenInfoResponse = {
  scope: "<value>",
  resource: {
    type: "<value>",
    uuid: "deeabb38-427b-4bbe-abd0-02a29d36c3e8",
  },
  resourceOwner: null,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `scope`                                                               | *string*                                                              | :heavy_check_mark:                                                    | Space delimited string of accessible scopes.                          |
| `resource`                                                            | [operations.Resource](../../models/operations/resource.md)            | :heavy_check_mark:                                                    | Information about the token resource.                                 |
| `resourceOwner`                                                       | [operations.ResourceOwner](../../models/operations/resource-owner.md) | :heavy_check_mark:                                                    | Information about the token owner                                     |