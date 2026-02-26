# ContractorOnboardingStatusOnboardingStep

## Example Usage

```typescript
import { ContractorOnboardingStatusOnboardingStep } from "@gusto/embedded-api-v2025-11-15/models/components/contractoronboardingstatus.js";

let value: ContractorOnboardingStatusOnboardingStep = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `title`                                                 | *string*                                                | :heavy_minus_sign:                                      | User-friendly description of the onboarding step.       |
| `id`                                                    | *string*                                                | :heavy_minus_sign:                                      | String identifier for the onboarding step.              |
| `required`                                              | *boolean*                                               | :heavy_minus_sign:                                      | When true, this step is required.                       |
| `completed`                                             | *boolean*                                               | :heavy_minus_sign:                                      | When true, this step has been completed.                |
| `requirements`                                          | *string*[]                                              | :heavy_minus_sign:                                      | A list of onboarding steps required to begin this step. |