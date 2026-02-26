# EmployeeOnboardingStatus

The representation of an employee's onboarding status.

## Example Usage

```typescript
import { EmployeeOnboardingStatus } from "@gusto/embedded-api-v2025-11-15/models/components/employeeonboardingstatus.js";

let value: EmployeeOnboardingStatus = {
  uuid: "c40e1cec-4015-49d2-826f-6b5615851726",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `uuid`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Unique identifier for this employee.                                                                                     |
| `onboardingStatus`                                                                                                       | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | One of the "onboarding_status" enum values.                                                                              |
| `onboardingSteps`                                                                                                        | [components.EmployeeOnboardingStatusOnboardingStep](../../models/components/employeeonboardingstatusonboardingstep.md)[] | :heavy_minus_sign:                                                                                                       | List of steps required to onboard an employee.                                                                           |