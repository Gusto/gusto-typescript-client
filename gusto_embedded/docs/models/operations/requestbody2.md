# RequestBody2

## Example Usage

```typescript
import { RequestBody2 } from "@gusto/embedded-api/models/operations/oauthaccesstoken.js";

let value: RequestBody2 = {
  clientId: "qr6L_9FRkbMVL_GdwvrMW6Ef8tcU6NUxjWpOfqXqOG8",
  clientSecret: "3aQSHRB3596nZhm6NdNBELZ1u9xbZmvCrKpBhbZYq6w",
  grantType: "system_access",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Your client ID                                                                                | qr6L_9FRkbMVL_GdwvrMW6Ef8tcU6NUxjWpOfqXqOG8                                                   |
| `clientSecret`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Your client secret                                                                            | 3aQSHRB3596nZhm6NdNBELZ1u9xbZmvCrKpBhbZYq6w                                                   |
| `grantType`                                                                                   | *"system_access"*                                                                             | :heavy_check_mark:                                                                            | Set system_access to create a system access token, refresh_token to refresh an existing token |                                                                                               |