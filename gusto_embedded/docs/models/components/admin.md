# Admin

The representation of an admin user in Gusto.

## Example Usage

```typescript
import { Admin } from "gusto-embedded/models/components";

let value: Admin = {
  uuid: "4f576f25-a197-4438-b575-f2159a6f5bad",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The unique id of the admin.                                                                                                   |
| `email`                                                                                                                       | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The email of the admin for Gusto's system. If the email matches an existing user, this will create an admin account for them. |
| `firstName`                                                                                                                   | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The first name of the admin.                                                                                                  |
| `lastName`                                                                                                                    | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The last name of the admin.                                                                                                   |