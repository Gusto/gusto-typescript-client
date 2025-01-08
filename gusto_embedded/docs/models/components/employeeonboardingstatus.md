# EmployeeOnboardingStatus

The representation of an employee's onboarding status.

## Example Usage

```typescript
import { EmployeeOnboardingStatus } from "gusto_embedded/models/components";

let value: EmployeeOnboardingStatus = {
  uuid: "635baedd-e456-48a4-8064-feda58d1c0dc",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `uuid`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Unique identifier for this employee.                                                                                     |
| `onboardingStatus`                                                                                                       | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | One of the "onboarding_status" enum values.                                                                              |
| `onboardingSteps`                                                                                                        | [components.EmployeeOnboardingStatusOnboardingStep](../../models/components/employeeonboardingstatusonboardingstep.md)[] | :heavy_minus_sign:                                                                                                       | List of steps required to onboard an employee.                                                                           |