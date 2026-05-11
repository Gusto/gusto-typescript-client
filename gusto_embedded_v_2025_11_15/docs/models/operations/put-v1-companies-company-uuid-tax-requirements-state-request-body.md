# PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody

## Example Usage

```typescript
import { PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody } from "openapi/models/operations";

let value: PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody = {
  requirementSets: [
    {
      key: "registrations",
      state: "GA",
      effectiveFrom: "2022-01-01",
      requirements: [
        {
          key: "71653ec0-00b5-4c66-a58b-22ecf21704c5",
          value: "1233214-AB",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `requirementSets`                                                                                      | [models.TaxRequirementSetUpdate](../../models/tax-requirement-set-update.md)[]                         | :heavy_minus_sign:                                                                                     | Array of requirement sets to update. Each set corresponds to a category of requirements for the state. |