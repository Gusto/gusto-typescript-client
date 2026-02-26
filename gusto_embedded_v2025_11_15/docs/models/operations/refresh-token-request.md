# RefreshTokenRequest

## Example Usage

```typescript
import { RefreshTokenRequest } from "openapi/models/operations";

let value: RefreshTokenRequest = {
  clientId: "qr6L_9FRkbMVL_GdwvrMW6Ef8tcU6NUxjWpOfqXqOG8",
  clientSecret: "3aQSHRB3596nZhm6NdNBELZ1u9xbZmvCrKpBhbZYq6w",
  grantType: "refresh_token",
  refreshToken: "iEjL96L9Pndwmi-xVX3Q-xbrvvhnjHYGX87sopgGJ8E",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Your client ID                                                                                | qr6L_9FRkbMVL_GdwvrMW6Ef8tcU6NUxjWpOfqXqOG8                                                   |
| `clientSecret`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Your client secret                                                                            | 3aQSHRB3596nZhm6NdNBELZ1u9xbZmvCrKpBhbZYq6w                                                   |
| `grantType`                                                                                   | *"refresh_token"*                                                                             | :heavy_check_mark:                                                                            | Set system_access to create a system access token, refresh_token to refresh an existing token |                                                                                               |
| `refreshToken`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | iEjL96L9Pndwmi-xVX3Q-xbrvvhnjHYGX87sopgGJ8E                                                   |
| `redirectUri`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The redirect URI you set up via the Developer Portal                                          |                                                                                               |