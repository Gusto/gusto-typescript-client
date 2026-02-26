# Admin

The representation of an admin user in Gusto.

## Example Usage

```typescript
import { Admin } from "@gusto/embedded-api-v2025-11-15/models/components/admin.js";

let value: Admin = {
  uuid: "d64f9b7f-e849-41cf-9dd7-fcc067bd9495",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `uuid`                                     | *string*                                   | :heavy_check_mark:                         | The unique id of the admin.                |
| `email`                                    | *string*                                   | :heavy_minus_sign:                         | The email of the admin for Gusto's system. |
| `firstName`                                | *string*                                   | :heavy_minus_sign:                         | The first name of the admin.               |
| `lastName`                                 | *string*                                   | :heavy_minus_sign:                         | The last name of the admin.                |
| `phone`                                    | *string*                                   | :heavy_minus_sign:                         | The phone number of the admin.             |