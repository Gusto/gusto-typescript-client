# CatchUp

Whether the employee should use a benefit’s 'catch up' rate. Only Roth 401k and 401k benefits use this value for employees over 50.

## Example Usage

```typescript
import { CatchUp } from "@gusto/embedded-api/models/components/benefittyperequirements.js";

let value: CatchUp = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `required`                                                                                                                     | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `editable`                                                                                                                     | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `defaultValue`                                                                                                                 | [components.BenefitTypeRequirementsCatchUpDefaultValue](../../models/components/benefittyperequirementscatchupdefaultvalue.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `choices`                                                                                                                      | *string*[]                                                                                                                     | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |