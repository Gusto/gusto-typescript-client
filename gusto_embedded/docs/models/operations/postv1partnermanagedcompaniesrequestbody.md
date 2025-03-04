# PostV1PartnerManagedCompaniesRequestBody

## Example Usage

```typescript
import { PostV1PartnerManagedCompaniesRequestBody } from "@gusto/embedded-api/models/operations";

let value: PostV1PartnerManagedCompaniesRequestBody = {
  user: {
    firstName: "Fredrick",
    lastName: "Toy",
    email: "Mckenna_VonRueden99@hotmail.com",
  },
  company: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `user`                                                                                      | [operations.User](../../models/operations/user.md)                                          | :heavy_check_mark:                                                                          | Information for the user who will be the primary payroll administrator for the new company. |
| `company`                                                                                   | [operations.Company](../../models/operations/company.md)                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |