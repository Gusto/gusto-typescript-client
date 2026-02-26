# Person

## Example Usage

```typescript
import { Person } from "@gusto/embedded-api-v2025-11-15/models/operations/postv1companiescompanyidpeoplebatches.js";

let value: Person = {
  externalId: "<id>",
  firstName: "Aniyah",
  lastName: "Schaden",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `externalId`                                            | *string*                                                | :heavy_check_mark:                                      | External identifier for the person                      |
| `firstName`                                             | *string*                                                | :heavy_check_mark:                                      | Legal first name                                        |
| `lastName`                                              | *string*                                                | :heavy_check_mark:                                      | Legal last name                                         |
| `middleInitial`                                         | *string*                                                | :heavy_minus_sign:                                      | Middle initial                                          |
| `preferredFirstName`                                    | *string*                                                | :heavy_minus_sign:                                      | Preferred first name                                    |
| `email`                                                 | *string*                                                | :heavy_minus_sign:                                      | Personal email address                                  |
| `workEmail`                                             | *string*                                                | :heavy_minus_sign:                                      | Work email address                                      |
| `ssn`                                                   | *string*                                                | :heavy_minus_sign:                                      | Social Security Number (format: xxx-xx-xxxx)            |
| `dateOfBirth`                                           | [RFCDate](../../types/rfcdate.md)                       | :heavy_minus_sign:                                      | Date of birth (YYYY-MM-DD)                              |
| `selfOnboarding`                                        | *boolean*                                               | :heavy_minus_sign:                                      | Whether the employee will complete their own onboarding |