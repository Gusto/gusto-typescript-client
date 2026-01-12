# CreateTokenAuthentication

## Example Usage

```typescript
import { CreateTokenAuthentication } from "@gusto/embedded-api/models/components/createtokenauthentication.js";

let value: CreateTokenAuthentication = {
  accessToken: "<value>",
  createdAt: 5363.63,
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `accessToken`                                                                                                                            | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | A new access token that can be used for subsequent authenticated requests                                                                |
| `tokenType`                                                                                                                              | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The literal string 'Bearer'                                                                                                              |
| `expiresIn`                                                                                                                              | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The TTL of this token. After this amount of time, you must hit the refresh token endpoint to continue making authenticated requests.     |
| `createdAt`                                                                                                                              | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Datetime for when the new access token is created.                                                                                       |
| `refreshToken`                                                                                                                           | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | A token that must be passed to the refresh token endpoint to get a new authenticated token. Only present when refresh token is provided. |