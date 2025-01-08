# CompanyCustomField

A custom field on a company

## Example Usage

```typescript
import { CompanyCustomField } from "gusto_embedded/models/components";

let value: CompanyCustomField = {
  uuid: "0717f6d1-466a-45ba-a669-1dab816650b1",
  name: "<value>",
  type: "date",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the company custom field                                         |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Name of the company custom field                                         |
| `type`                                                                   | [components.CustomFieldType](../../models/components/customfieldtype.md) | :heavy_check_mark:                                                       | Input type for the custom field.                                         |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | Description of the company custom field                                  |
| `selectionOptions`                                                       | *string*[]                                                               | :heavy_minus_sign:                                                       | An array of options for fields of type radio. Otherwise, null.           |