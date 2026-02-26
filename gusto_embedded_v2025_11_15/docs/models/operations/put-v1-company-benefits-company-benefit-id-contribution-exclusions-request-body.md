# PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestBody

## Example Usage

```typescript
import { PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestBody } from "openapi/models/operations";

let value:
  PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestBody = {
    contributionExclusions: [
      {
        contributionUuid: "<id>",
        contributionType: "<value>",
        excluded: false,
      },
    ],
  };
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `contributionExclusions`                                                 | [models.ContributionExclusion](../../models/contribution-exclusion.md)[] | :heavy_check_mark:                                                       | The list of contribution exclusions to update                            |