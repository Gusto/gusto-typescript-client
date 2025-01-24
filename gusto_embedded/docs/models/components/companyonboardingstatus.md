# CompanyOnboardingStatus

The representation of a company's onboarding status

## Example Usage

```typescript
import { CompanyOnboardingStatus } from "gusto-embedded/models/components";

let value: CompanyOnboardingStatus = {
  uuid: "b521368c-f119-4bde-8f66-2aad17932d07",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | the UUID of the company                                                  |
| `onboardingCompleted`                                                    | *boolean*                                                                | :heavy_minus_sign:                                                       | a boolean flag for the company's onboarding status                       |
| `onboardingSteps`                                                        | [components.OnboardingStep](../../models/components/onboardingstep.md)[] | :heavy_minus_sign:                                                       | a list of company onboarding steps                                       |