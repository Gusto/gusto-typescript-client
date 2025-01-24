# RefreshAccessTokenRequestBody

## Example Usage

```typescript
import { RefreshAccessTokenRequestBody } from "gusto-embedded/models/operations";

let value: RefreshAccessTokenRequestBody = {
  clientId: "<id>",
  clientSecret: "<value>",
  refreshToken: "<value>",
  grantType: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `clientId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Your client id                                               |
| `clientSecret`                                               | *string*                                                     | :heavy_check_mark:                                           | Your client secret                                           |
| `redirectUri`                                                | *string*                                                     | :heavy_minus_sign:                                           | The redirect URI you set up via the Developer Portal         |
| `refreshToken`                                               | *string*                                                     | :heavy_check_mark:                                           | The `refresh_token` being exchanged for an access token code |
| `grantType`                                                  | *string*                                                     | :heavy_check_mark:                                           | this should be the literal string 'refresh_token'            |