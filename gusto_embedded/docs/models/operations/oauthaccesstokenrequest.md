# OauthAccessTokenRequest

## Example Usage

```typescript
import { OauthAccessTokenRequest } from "@gusto/embedded-api/models/operations/oauthaccesstoken.js";

let value: OauthAccessTokenRequest = {
  requestBody: {
    clientId: "qr6L_9FRkbMVL_GdwvrMW6Ef8tcU6NUxjWpOfqXqOG8",
    clientSecret: "3aQSHRB3596nZhm6NdNBELZ1u9xbZmvCrKpBhbZYq6w",
    grantType: "system_access",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.XGustoAPIVersion](../../models/operations/xgustoapiversion.md)                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `requestBody`                                                                                                                                                                                                                | *operations.OauthAccessTokenRequestBody*                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |