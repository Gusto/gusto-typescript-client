# Validation

[for `tax_rate`] Describes the validation required for the tax rate

## Example Usage

```typescript
import { Validation } from "@gusto/embedded-api/models/components/taxrequirementmetadata.js";

let value: Validation = {
  type: "min_max",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                              | [components.TaxRequirementMetadataValidationType](../../models/components/taxrequirementmetadatavalidationtype.md)  | :heavy_check_mark:                                                                                                  | Describes the type of tax_rate validation rule                                                                      |
| `min`                                                                                                               | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | [for `min_max`] The inclusive lower bound of the tax rate                                                           |
| `max`                                                                                                               | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | [for `min_max`] The inclusive upper bound of the tax rate                                                           |
| `rates`                                                                                                             | *string*[]                                                                                                          | :heavy_minus_sign:                                                                                                  | [for `one_of`] The possible, unformatted tax rates for selection.<br/>- e.g. ["0.0", "0.001"] representing 0% and 0.1%<br/> |