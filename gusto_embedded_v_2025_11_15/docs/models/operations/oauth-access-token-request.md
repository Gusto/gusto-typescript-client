# OauthAccessTokenRequest

## Example Usage

```typescript
import { OauthAccessTokenRequest } from "openapi/models/operations";

let value: OauthAccessTokenRequest = {
  body: {
    clientId: "qr6L_9FRkbMVL_GdwvrMW6Ef8tcU6NUxjWpOfqXqOG8",
    clientSecret: "3aQSHRB3596nZhm6NdNBELZ1u9xbZmvCrKpBhbZYq6w",
    grantType: "system_access",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.OauthAccessTokenXGustoAPIVersion](../../models/operations/oauth-access-token-x-gusto-api-version.md)                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `body`                                                                                                                                                                                                                       | *operations.OauthAccessTokenRequestBody*                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |