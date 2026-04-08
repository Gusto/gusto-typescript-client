# LimitOption

Some benefits require additional information to determine their limit. For example, for an HSA benefit, the limit option should be either 'Family' or 'Individual'. For a Dependent Care FSA benefit, the limit option should be either 'Joint Filing or Single' or 'Married and Filing Separately'.

## Example Usage

```typescript
import { LimitOption } from "@gusto/embedded-api/models/components/benefittyperequirements.js";

let value: LimitOption = {};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `required`                                                                                                                             | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `editable`                                                                                                                             | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `defaultValue`                                                                                                                         | [components.BenefitTypeRequirementsLimitOptionDefaultValue](../../models/components/benefittyperequirementslimitoptiondefaultvalue.md) | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `choices`                                                                                                                              | *string*[]                                                                                                                             | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |