# EmployeeOnboardingStatus

The representation of an employee's onboarding status.

## Example Usage

```typescript
import { EmployeeOnboardingStatus } from "@gusto/embedded-api/models/components/employeeonboardingstatus.js";

let value: EmployeeOnboardingStatus = {
  uuid: "e269f2e1-7735-47df-b8d9-53680293d511",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `uuid`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Unique identifier for this employee.                                                                                     |
| `onboardingStatus`                                                                                                       | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | One of the "onboarding_status" enum values.                                                                              |
| `onboardingSteps`                                                                                                        | [components.EmployeeOnboardingStatusOnboardingStep](../../models/components/employeeonboardingstatusonboardingstep.md)[] | :heavy_minus_sign:                                                                                                       | List of steps required to onboard an employee.                                                                           |