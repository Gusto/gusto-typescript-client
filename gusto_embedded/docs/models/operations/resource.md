# Resource

Information about the token resource.

## Example Usage

```typescript
import { Resource } from "@gusto/embedded-api/models/operations";

let value: Resource = {
  type: "<value>",
  uuid: "8b986a7e-f6c8-49e1-910d-cdfc7c1a2f86",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *string*           | :heavy_check_mark: | Type of object     |
| `uuid`             | *string*           | :heavy_check_mark: | UUID of object     |