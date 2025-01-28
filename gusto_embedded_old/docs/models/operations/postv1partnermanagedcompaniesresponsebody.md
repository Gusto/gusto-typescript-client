# PostV1PartnerManagedCompaniesResponseBody

Object returned when creating a partner managed company

## Example Usage

```typescript
import { PostV1PartnerManagedCompaniesResponseBody } from "openapi/models/operations";

let value: PostV1PartnerManagedCompaniesResponseBody = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `accessToken`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Access token that can be used for OAuth access to the account. Access tokens expire 2 hours after they are issued. |
| `refreshToken`                                                                                                     | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Refresh token that can be exchanged for a new access token.                                                        |
| `companyUuid`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Gusto’s UUID for the company                                                                                       |
| `expiresIn`                                                                                                        | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | Time of access_token expiration in seconds                                                                         |