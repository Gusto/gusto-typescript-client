# Resource

The resource associated with this access token. Null when
the token has no associated resource.


## Example Usage

```typescript
import { Resource } from "@gusto/embedded-api-v2025-06-15/models/components/tokeninfo.js";

let value: Resource = {
  type: "Company",
  uuid: "7b1d0df1-6403-4a06-8768-c1dd7d24d27a",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                             | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The type of resource associated with the access token, e.g. `Company` for a company-level token or `Oauth::Application` for a system-level token.<br/> | Company                                                                                                                                            |
| `uuid`                                                                                                                                             | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The UUID of the associated resource                                                                                                                | 7b1d0df1-6403-4a06-8768-c1dd7d24d27a                                                                                                               |