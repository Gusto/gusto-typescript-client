# ResourceOwner

Information about the token owner

## Example Usage

```typescript
import { ResourceOwner } from "@gusto/embedded-api/models/operations/getv1tokeninfo.js";

let value: ResourceOwner = {
  type: "Employee",
  uuid: "90999fa5-6b0a-4a32-8559-7f132a47321a",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [operations.GetV1TokenInfoType](../../models/operations/getv1tokeninfotype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of resource owner                                                         |