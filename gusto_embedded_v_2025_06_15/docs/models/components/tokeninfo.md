# TokenInfo

## Example Usage

```typescript
import { TokenInfo } from "@gusto/embedded-api-v2025-06-15/models/components/tokeninfo.js";

let value: TokenInfo = {
  scope: "companies:read public",
  resource: {
    type: "Company",
    uuid: "7b1d0df1-6403-4a06-8768-c1dd7d24d27a",
  },
  resourceOwner: {
    type: "CompanyAdmin",
    uuid: "8fdc31f0-a8a7-4872-a9f1-dcb5e6f876e3",
  },
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `scope`                                                                                                                           | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | Space-separated list of OAuth scopes granted to this access token.<br/>                                                           | companies:read public                                                                                                             |
| `resource`                                                                                                                        | [components.Resource](../../models/components/resource.md)                                                                        | :heavy_minus_sign:                                                                                                                | The resource associated with this access token. Null when<br/>the token has no associated resource.<br/>                          |                                                                                                                                   |
| `resourceOwner`                                                                                                                   | [components.ResourceOwner](../../models/components/resourceowner.md)                                                              | :heavy_minus_sign:                                                                                                                | The resource owner (user) who authorized this access token. Null for<br/>system-level tokens or when the owner cannot be determined.<br/> |                                                                                                                                   |