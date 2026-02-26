# TaxRequirementMetadataOption

## Example Usage

```typescript
import { TaxRequirementMetadataOption } from "openapi/models";

let value: TaxRequirementMetadataOption = {
  label: "<value>",
  value: true,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `label`                                              | *string*                                             | :heavy_check_mark:                                   | A customer facing label for the answer               |
| `value`                                              | *models.TaxRequirementMetadataValue*                 | :heavy_check_mark:                                   | The actual value to be submitted                     |
| `shortLabel`                                         | *string*                                             | :heavy_minus_sign:                                   | A less verbose label that may sometimes be available |