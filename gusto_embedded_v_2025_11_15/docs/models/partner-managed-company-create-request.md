# PartnerManagedCompanyCreateRequest

## Example Usage

```typescript
import { PartnerManagedCompanyCreateRequest } from "openapi/models";

let value: PartnerManagedCompanyCreateRequest = {
  user: {
    firstName: "Torey",
    lastName: "Beer",
    email: "Ila_Leannon@yahoo.com",
  },
  company: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `user`                                                                                                          | [models.User](../models/user.md)                                                                                | :heavy_check_mark:                                                                                              | Information for the user who will be the primary payroll administrator for the new company.                     |
| `company`                                                                                                       | [models.PartnerManagedCompanyCreateRequestCompany](../models/partner-managed-company-create-request-company.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |