# EmployeeCustomField

A custom field of an employee

## Example Usage

```typescript
import { EmployeeCustomField } from "openapi/models/components";

let value: EmployeeCustomField = {
  id: "<id>",
  companyCustomFieldId: "<id>",
  name: "<value>",
  type: "date",
  value: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `companyCustomFieldId`                                                            | *string*                                                                          | :heavy_check_mark:                                                                | This is the id of the response object from when you get the company custom fields |
| `name`                                                                            | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `type`                                                                            | [components.CustomFieldType](../../models/components/customfieldtype.md)          | :heavy_check_mark:                                                                | Input type for the custom field.                                                  |
| `description`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `value`                                                                           | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `selectionOptions`                                                                | *string*[]                                                                        | :heavy_minus_sign:                                                                | An array of options for fields of type radio. Otherwise, null.                    |