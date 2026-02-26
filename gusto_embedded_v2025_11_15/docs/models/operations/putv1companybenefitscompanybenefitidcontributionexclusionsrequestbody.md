# PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestBody

## Example Usage

```typescript
import { PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestBody } from "@gusto/embedded-api-v2025-11-15/models/operations/putv1companybenefitscompanybenefitidcontributionexclusions.js";

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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `contributionExclusions`                                                               | [components.ContributionExclusion](../../models/components/contributionexclusion.md)[] | :heavy_check_mark:                                                                     | The list of contribution exclusions to update                                          |