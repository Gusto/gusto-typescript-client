# OauthAccessTokenResponse

## Example Usage

```typescript
import { OauthAccessTokenResponse } from "@gusto/embedded-api/models/operations/oauthaccesstoken.js";

let value: OauthAccessTokenResponse = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `authentication`                                                   | *components.Authentication*                                        | :heavy_minus_sign:                                                 | Refresh access token                                               |