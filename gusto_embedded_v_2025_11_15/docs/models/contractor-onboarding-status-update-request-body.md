# ContractorOnboardingStatusUpdateRequestBody

Request body for updating a contractor's onboarding status.

## Example Usage

```typescript
import { ContractorOnboardingStatusUpdateRequestBody } from "openapi/models";

let value: ContractorOnboardingStatusUpdateRequestBody = {
  onboardingStatus: "self_onboarding_review",
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onboardingStatus`                                                                                                                                    | [models.ContractorOnboardingStatusUpdateRequestBodyOnboardingStatus](../models/contractor-onboarding-status-update-request-body-onboarding-status.md) | :heavy_check_mark:                                                                                                                                    | The updated onboarding status for the contractor.                                                                                                     |