# PrimarySignatory

The primary signatory of the company.

## Example Usage

```typescript
import { PrimarySignatory } from "openapi/models";

let value: PrimarySignatory = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | The UUID of the company's primary signatory.                   |
| `firstName`                                                    | *string*                                                       | :heavy_minus_sign:                                             | The company's primary signatory's first name.                  |
| `middleInitial`                                                | *string*                                                       | :heavy_minus_sign:                                             | The company's primary signatory's middle initial.              |
| `lastName`                                                     | *string*                                                       | :heavy_minus_sign:                                             | The company's primary signatory's last name.                   |
| `phone`                                                        | *string*                                                       | :heavy_minus_sign:                                             | The company's primary signatory's phone number.                |
| `email`                                                        | *string*                                                       | :heavy_minus_sign:                                             | The company's primary signatory's email address.               |
| `homeAddress`                                                  | [models.CompanyHomeAddress](../models/company-home-address.md) | :heavy_minus_sign:                                             | The company's primary signatory's home address.                |