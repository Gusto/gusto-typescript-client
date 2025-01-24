# EmployeeOnboardingStatus

The representation of an employee's onboarding status.

## Example Usage

```typescript
import { EmployeeOnboardingStatus } from "gusto-embedded/models/components";

let value: EmployeeOnboardingStatus = {
  uuid: "a822c9ff-f1f3-47c3-b921-1506a61142f2",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `uuid`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Unique identifier for this employee.                                                                                     |
| `onboardingStatus`                                                                                                       | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | One of the "onboarding_status" enum values.                                                                              |
| `onboardingSteps`                                                                                                        | [components.EmployeeOnboardingStatusOnboardingStep](../../models/components/employeeonboardingstatusonboardingstep.md)[] | :heavy_minus_sign:                                                                                                       | List of steps required to onboard an employee.                                                                           |