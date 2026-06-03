# ContractorOnboardingStatusUpdateRequestBody

Request body for updating a contractor's onboarding status.

## Example Usage

```typescript
import { ContractorOnboardingStatusUpdateRequestBody } from "@gusto/embedded-api-v-2026-02-01/models/components/contractoronboardingstatusupdaterequestbody.js";

let value: ContractorOnboardingStatusUpdateRequestBody = {
  onboardingStatus: "self_onboarding_review",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onboardingStatus`                                                                                                                                               | [components.ContractorOnboardingStatusUpdateRequestBodyOnboardingStatus](../../models/components/contractoronboardingstatusupdaterequestbodyonboardingstatus.md) | :heavy_check_mark:                                                                                                                                               | The updated onboarding status for the contractor.                                                                                                                |