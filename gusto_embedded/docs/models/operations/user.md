# User

Information for the user who will be the primary payroll administrator for the new company.

## Example Usage

```typescript
import { User } from "gusto_embedded/models/operations";

let value: User = {
  firstName: "Elisha",
  lastName: "Greenfelder",
  email: "Hildegard_Gusikowski@yahoo.com",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `firstName`                                                         | *string*                                                            | :heavy_check_mark:                                                  | The first name of the user who will be the primary payroll admin.   |
| `lastName`                                                          | *string*                                                            | :heavy_check_mark:                                                  | The last name of the user who will be the primary payroll admin.    |
| `email`                                                             | *string*                                                            | :heavy_check_mark:                                                  | The email of the user who will be the primary payroll admin.        |
| `phone`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | The phone number of the user who will be the primary payroll admin. |