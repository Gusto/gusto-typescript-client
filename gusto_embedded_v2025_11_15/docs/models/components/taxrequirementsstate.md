# TaxRequirementsState

## Example Usage

```typescript
import { TaxRequirementsState } from "@gusto/embedded-api-v2025-11-15/models/components/taxrequirementsstate.js";

let value: TaxRequirementsState = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                           | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `state`                                                                                                 | *string*                                                                                                | :heavy_minus_sign:                                                                                      | One of the two-letter state abbreviations for the fifty United States and the District of Columbia (DC) |
| `requirementSets`                                                                                       | [components.TaxRequirementSet](../../models/components/taxrequirementset.md)[]                          | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |