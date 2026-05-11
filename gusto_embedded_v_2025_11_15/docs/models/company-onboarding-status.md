# CompanyOnboardingStatus

The representation of a company's onboarding status

## Example Usage

```typescript
import { CompanyOnboardingStatus } from "openapi/models";

let value: CompanyOnboardingStatus = {
  uuid: "83e7e39c-7232-4978-aeae-30938756a40c",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | the UUID of the company                                                                                  |
| `onboardingCompleted`                                                                                    | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | a boolean flag for the company's onboarding status                                                       |
| `onboardingSteps`                                                                                        | [models.CompanyOnboardingStatusOnboardingStep](../models/company-onboarding-status-onboarding-step.md)[] | :heavy_minus_sign:                                                                                       | a list of company onboarding steps                                                                       |