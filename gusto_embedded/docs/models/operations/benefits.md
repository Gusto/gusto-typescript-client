# Benefits

An array of benefits for the employee. Depends on your company selections, benefits include 401k, health insurance and more.

## Example Usage

```typescript
import { Benefits } from "gusto-embedded/models/operations";

let value: Benefits = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `companyContributionAmount`                     | *string*                                        | :heavy_minus_sign:                              | Company contribution amount towards the benefit |
| `employeeDeductionAmount`                       | *string*                                        | :heavy_minus_sign:                              | Employee deduction amount towards the benefit   |
| `benefitId`                                     | *number*                                        | :heavy_minus_sign:                              | The ID of the benefit.                          |