# GetV1EmployeesOnboardingStatus

The current onboarding status of the employee

## Example Usage

```typescript
import { GetV1EmployeesOnboardingStatus } from "@gusto/embedded-api/models/operations/getv1employees.js";

let value: GetV1EmployeesOnboardingStatus =
  "self_onboarding_completed_by_employee";
```

## Values

```typescript
"onboarding_completed" | "admin_onboarding_incomplete" | "self_onboarding_pending_invite" | "self_onboarding_invited" | "self_onboarding_invited_started" | "self_onboarding_invited_overdue" | "self_onboarding_completed_by_employee" | "self_onboarding_awaiting_admin_review"
```