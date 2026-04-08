# TaxRequirementMetadataOptions

## Example Usage

```typescript
import { TaxRequirementMetadataOptions } from "@gusto/embedded-api/models/components/taxrequirementmetadata.js";

let value: TaxRequirementMetadataOptions = {
  label: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `label`                                              | *string*                                             | :heavy_check_mark:                                   | A customer facing label for the answer               |
| `value`                                              | *components.TaxRequirementMetadataValue*             | :heavy_check_mark:                                   | The actual value to be submitted                     |
| `shortLabel`                                         | *string*                                             | :heavy_minus_sign:                                   | A less verbose label that may sometimes be available |