# PutV1EmployeesEmployeeIdOnboardingStatusRequestBody

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdOnboardingStatusRequestBody } from "@gusto/embedded-api-v-2026-02-01/models/operations/putv1employeesemployeeidonboardingstatus.js";

let value: PutV1EmployeesEmployeeIdOnboardingStatusRequestBody = {
  onboardingStatus: "self_onboarding_invited_started",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `onboardingStatus`                                                         | [operations.OnboardingStatus](../../models/operations/onboardingstatus.md) | :heavy_check_mark:                                                         | Onboarding status value                                                    |