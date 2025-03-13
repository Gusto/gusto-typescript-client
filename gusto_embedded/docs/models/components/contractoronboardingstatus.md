# ContractorOnboardingStatus

The representation of an contractor's onboarding status.

## Example Usage

```typescript
import { ContractorOnboardingStatus } from "@gusto/embedded-api/models/components/contractoronboardingstatus.js";

let value: ContractorOnboardingStatus = {
  uuid: "bd72d9bb-f4b5-4635-9f43-947d3698fabf",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `uuid`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Unique identifier for this contractor.                                                                                         |
| `onboardingStatus`                                                                                                             | [components.ContractorOnboardingStatusOnboardingStatus](../../models/components/contractoronboardingstatusonboardingstatus.md) | :heavy_minus_sign:                                                                                                             | One of the "onboarding_status" enum values.                                                                                    |
| `onboardingSteps`                                                                                                              | [components.ContractorOnboardingStatusOnboardingStep](../../models/components/contractoronboardingstatusonboardingstep.md)[]   | :heavy_minus_sign:                                                                                                             | List of steps required to onboard a contractor.                                                                                |