# CompanyOnboardingStatus

The representation of a company's onboarding status

## Example Usage

```typescript
import { CompanyOnboardingStatus } from "@gusto/embedded-api/models/components/companyonboardingstatus.js";

let value: CompanyOnboardingStatus = {
  uuid: "d60da2f1-d46c-4af9-81ec-b062dbefcf90",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | the UUID of the company                                                  |
| `onboardingCompleted`                                                    | *boolean*                                                                | :heavy_minus_sign:                                                       | a boolean flag for the company's onboarding status                       |
| `onboardingSteps`                                                        | [components.OnboardingStep](../../models/components/onboardingstep.md)[] | :heavy_minus_sign:                                                       | a list of company onboarding steps                                       |