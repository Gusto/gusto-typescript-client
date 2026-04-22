# TaxRequirementsState

## Example Usage

```typescript
import { TaxRequirementsState } from "@gusto/embedded-api-v-2025-11-15/models/components/taxrequirementsstate.js";

let value: TaxRequirementsState = {
  state: "GA",
  requirementSets: [
    {
      state: "GA",
      key: "registrations",
      effectiveFrom: "2022-01-01",
      requirements: [
        {
          key: "71653ec0-00b5-4c66-a58b-22ecf21704c5",
          applicableIf: [
            {
              key: "71653ec0-00b5-4c66-a58b-22ecf21704c5",
            },
          ],
          value: "1233214-AB",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                           | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `state`                                                                                                 | *string*                                                                                                | :heavy_minus_sign:                                                                                      | One of the two-letter state abbreviations for the fifty United States and the District of Columbia (DC) | GA                                                                                                      |
| `requirementSets`                                                                                       | [components.TaxRequirementSet](../../models/components/taxrequirementset.md)[]                          | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |