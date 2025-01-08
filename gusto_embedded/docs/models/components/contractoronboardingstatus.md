# ContractorOnboardingStatus

The representation of an contractor's onboarding status.

## Example Usage

```typescript
import { ContractorOnboardingStatus } from "gusto_embedded/models/components";

let value: ContractorOnboardingStatus = {
  uuid: "47a7eeb7-26b4-41eb-b9cd-7ee4988f4fe7",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `uuid`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Unique identifier for this contractor.                                                                                         |
| `onboardingStatus`                                                                                                             | [components.ContractorOnboardingStatusOnboardingStatus](../../models/components/contractoronboardingstatusonboardingstatus.md) | :heavy_minus_sign:                                                                                                             | One of the "onboarding_status" enum values.                                                                                    |
| `onboardingSteps`                                                                                                              | [components.ContractorOnboardingStatusOnboardingStep](../../models/components/contractoronboardingstatusonboardingstep.md)[]   | :heavy_minus_sign:                                                                                                             | List of steps required to onboard a contractor.                                                                                |