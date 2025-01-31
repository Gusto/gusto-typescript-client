# EmployeeOnboardingStatusOnboardingStep

## Example Usage

```typescript
import { EmployeeOnboardingStatusOnboardingStep } from "@gusto/embedded-api/models/components";

let value: EmployeeOnboardingStatusOnboardingStep = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `title`                                                 | *string*                                                | :heavy_minus_sign:                                      | User-friendly description of the onboarding step.       |
| `id`                                                    | *string*                                                | :heavy_minus_sign:                                      | String identifier for the onboarding step.              |
| `required`                                              | *boolean*                                               | :heavy_minus_sign:                                      | When true, this step has been completed.                |
| `completed`                                             | *boolean*                                               | :heavy_minus_sign:                                      | When true, this step has been completed.                |
| `requirements`                                          | *string*[]                                              | :heavy_minus_sign:                                      | A list of onboarding steps required to begin this step. |