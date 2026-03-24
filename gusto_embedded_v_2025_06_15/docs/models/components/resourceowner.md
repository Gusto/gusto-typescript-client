# ResourceOwner

The resource owner (user) who authorized this access token. Null for
system-level tokens or when the owner cannot be determined.


## Example Usage

```typescript
import { ResourceOwner } from "@gusto/embedded-api-v2025-06-15/models/components/tokeninfo.js";

let value: ResourceOwner = {
  type: "CompanyAdmin",
  uuid: "8fdc31f0-a8a7-4872-a9f1-dcb5e6f876e3",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                        | [components.TokenInfoType](../../models/components/tokeninfotype.md)                                                          | :heavy_minus_sign:                                                                                                            | The type of resource owner:<br/>- `CompanyAdmin`: A company administrator<br/>- `Employee`: An employee<br/>- `Contractor`: A contractor<br/> | CompanyAdmin                                                                                                                  |
| `uuid`                                                                                                                        | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The UUID of the resource owner                                                                                                | 8fdc31f0-a8a7-4872-a9f1-dcb5e6f876e3                                                                                          |