# PartnerManagedCompanyCreateRequest

## Example Usage

```typescript
import { PartnerManagedCompanyCreateRequest } from "@gusto/embedded-api/models/components/partnermanagedcompanycreaterequest.js";

let value: PartnerManagedCompanyCreateRequest = {
  user: {
    firstName: "Luella",
    lastName: "Kemmer",
    email: "Lori.Ward@yahoo.com",
  },
  company: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `user`                                                                                                                       | [components.User](../../models/components/user.md)                                                                           | :heavy_check_mark:                                                                                                           | Information for the user who will be the primary payroll administrator for the new company.                                  |
| `company`                                                                                                                    | [components.PartnerManagedCompanyCreateRequestCompany](../../models/components/partnermanagedcompanycreaterequestcompany.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |