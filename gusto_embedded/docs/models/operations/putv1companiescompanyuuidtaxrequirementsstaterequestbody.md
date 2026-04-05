# PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody

## Example Usage

```typescript
import { PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody } from "@gusto/embedded-api/models/operations/putv1companiescompanyuuidtaxrequirementsstate.js";

let value: PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `requirementSets`                                                                                      | [components.TaxRequirementSetUpdate](../../models/components/taxrequirementsetupdate.md)[]             | :heavy_minus_sign:                                                                                     | Array of requirement sets to update. Each set corresponds to a category of requirements for the state. |