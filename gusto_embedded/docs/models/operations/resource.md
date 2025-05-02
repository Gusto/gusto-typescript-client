# Resource

Information about the token resource.

## Example Usage

```typescript
import { Resource } from "@gusto/embedded-api/models/operations/getv1tokeninfo.js";

let value: Resource = {
  type: "<value>",
  uuid: "bb4906c9-ddac-4512-97bf-d9db56c3ec92",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *string*           | :heavy_check_mark: | Type of object     |
| `uuid`             | *string*           | :heavy_check_mark: | UUID of object     |