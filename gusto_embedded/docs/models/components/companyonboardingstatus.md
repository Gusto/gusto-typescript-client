# CompanyOnboardingStatus

The representation of a company's onboarding status

## Example Usage

```typescript
import { CompanyOnboardingStatus } from "@gusto/embedded-api/models/components";

let value: CompanyOnboardingStatus = {
  uuid: "ebb49cc5-cb2d-4777-8997-da66c530ee15",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | the UUID of the company                                                  |
| `onboardingCompleted`                                                    | *boolean*                                                                | :heavy_minus_sign:                                                       | a boolean flag for the company's onboarding status                       |
| `onboardingSteps`                                                        | [components.OnboardingStep](../../models/components/onboardingstep.md)[] | :heavy_minus_sign:                                                       | a list of company onboarding steps                                       |