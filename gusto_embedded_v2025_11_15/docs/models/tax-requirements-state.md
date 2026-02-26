# TaxRequirementsState

## Example Usage

```typescript
import { TaxRequirementsState } from "openapi/models";

let value: TaxRequirementsState = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                           | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `state`                                                                                                 | *string*                                                                                                | :heavy_minus_sign:                                                                                      | One of the two-letter state abbreviations for the fifty United States and the District of Columbia (DC) |
| `requirementSets`                                                                                       | [models.TaxRequirementSet](../models/tax-requirement-set.md)[]                                          | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |