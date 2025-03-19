# CompanyOnboardingStatus

The representation of a company's onboarding status

## Example Usage

```typescript
import { CompanyOnboardingStatus } from "@gusto/embedded-api/models/components/companyonboardingstatus.js";

let value: CompanyOnboardingStatus = {
  uuid: "16cbe4c7-9ffd-45ea-b60c-8cbc4c87a014",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | the UUID of the company                                                  |
| `onboardingCompleted`                                                    | *boolean*                                                                | :heavy_minus_sign:                                                       | a boolean flag for the company's onboarding status                       |
| `onboardingSteps`                                                        | [components.OnboardingStep](../../models/components/onboardingstep.md)[] | :heavy_minus_sign:                                                       | a list of company onboarding steps                                       |