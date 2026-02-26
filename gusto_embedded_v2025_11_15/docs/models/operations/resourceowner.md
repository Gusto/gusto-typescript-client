# ResourceOwner

Information about the token owner

## Example Usage

```typescript
import { ResourceOwner } from "@gusto/embedded-api-v2025-11-15/models/operations/getv1tokeninfo.js";

let value: ResourceOwner = {
  type: "Contractor",
  uuid: "d85b8106-da6c-417e-9335-206fa381b655",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [operations.GetV1TokenInfoType](../../models/operations/getv1tokeninfotype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of resource owner                                                         |