# CompanyCustomField

A custom field on a company

## Example Usage

```typescript
import { CompanyCustomField } from "openapi/models";

let value: CompanyCustomField = {
  uuid: "73769bbc-a26a-439e-a167-9eb29246330c",
  name: "<value>",
  type: "radio",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the company custom field                               |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | Name of the company custom field                               |
| `type`                                                         | [models.CustomFieldType](../models/custom-field-type.md)       | :heavy_check_mark:                                             | Input type for the custom field.                               |
| `description`                                                  | *string*                                                       | :heavy_minus_sign:                                             | Description of the company custom field                        |
| `selectionOptions`                                             | *string*[]                                                     | :heavy_minus_sign:                                             | An array of options for fields of type radio. Otherwise, null. |