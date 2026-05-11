# ContractorOnboardingStatus

The representation of an contractor's onboarding status.

## Example Usage

```typescript
import { ContractorOnboardingStatus } from "openapi/models";

let value: ContractorOnboardingStatus = {
  uuid: "c5a3a886-653d-4d81-926b-6770362e613c",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Unique identifier for this contractor.                                                                           |
| `onboardingStatus`                                                                                               | [models.ContractorOnboardingStatusOnboardingStatus](../models/contractor-onboarding-status-onboarding-status.md) | :heavy_minus_sign:                                                                                               | One of the "onboarding_status" enum values.                                                                      |
| `onboardingSteps`                                                                                                | [models.ContractorOnboardingStatusOnboardingStep](../models/contractor-onboarding-status-onboarding-step.md)[]   | :heavy_minus_sign:                                                                                               | List of steps required to onboard a contractor.                                                                  |