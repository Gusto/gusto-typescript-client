# EarningType

The representation of an earning type in Gusto.

## Example Usage

```typescript
import { EarningType } from "@gusto/embedded-api-v-2025-11-15/models/components/earningtype.js";

let value: EarningType = {
  uuid: "76993122-fd26-4865-9717-4a06f49382ef",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `name`                              | *string*                            | :heavy_minus_sign:                  | The name of the earning type.       |
| `uuid`                              | *string*                            | :heavy_check_mark:                  | The ID of the earning type.         |
| `active`                            | *boolean*                           | :heavy_minus_sign:                  | Whether the earning type is active. |