# GetV1TokenInfoResponseBody

Example response

## Example Usage

```typescript
import { GetV1TokenInfoResponseBody } from "@gusto/embedded-api/models/operations/getv1tokeninfo.js";

let value: GetV1TokenInfoResponseBody = {
  scope: "<value>",
  resource: {
    type: "<value>",
    uuid: "be2908c1-f60f-4d58-955d-79b312adf6c1",
  },
  resourceOwner: {
    type: "CompanyAdmin",
    uuid: "3094f0f1-69e6-4400-b835-8bc109cf2774",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `scope`                                                              | *string*                                                             | :heavy_check_mark:                                                   | Space delimited string of accessible scopes.                         |
| `resource`                                                           | [operations.Resource](../../models/operations/resource.md)           | :heavy_check_mark:                                                   | Information about the token resource.                                |
| `resourceOwner`                                                      | [operations.ResourceOwner](../../models/operations/resourceowner.md) | :heavy_check_mark:                                                   | Information about the token owner                                    |