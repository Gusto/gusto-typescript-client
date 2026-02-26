# EmployeeOnboardingStatus

The representation of an employee's onboarding status.

## Example Usage

```typescript
import { EmployeeOnboardingStatus } from "openapi/models";

let value: EmployeeOnboardingStatus = {
  uuid: "c40e1cec-4015-49d2-826f-6b5615851726",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Unique identifier for this employee.                                                                       |
| `onboardingStatus`                                                                                         | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | One of the "onboarding_status" enum values.                                                                |
| `onboardingSteps`                                                                                          | [models.EmployeeOnboardingStatusOnboardingStep](../models/employee-onboarding-status-onboarding-step.md)[] | :heavy_minus_sign:                                                                                         | List of steps required to onboard an employee.                                                             |