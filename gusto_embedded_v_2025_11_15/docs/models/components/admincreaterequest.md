# AdminCreateRequest

The request body for creating a company admin.

## Example Usage

```typescript
import { AdminCreateRequest } from "@gusto/embedded-api-v-2025-11-15/models/components/admincreaterequest.js";

let value: AdminCreateRequest = {
  firstName: "John",
  lastName: "Smith",
  email: "jsmith99@gmail.com",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `firstName`                                                                                                                   | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The first name of the admin.                                                                                                  | John                                                                                                                          |
| `lastName`                                                                                                                    | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The last name of the admin.                                                                                                   | Smith                                                                                                                         |
| `email`                                                                                                                       | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The email of the admin for Gusto's system. If the email matches an existing user, this will create an admin account for them. | jsmith99@gmail.com                                                                                                            |