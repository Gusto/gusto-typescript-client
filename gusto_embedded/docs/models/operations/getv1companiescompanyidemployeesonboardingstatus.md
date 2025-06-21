# GetV1CompaniesCompanyIdEmployeesOnboardingStatus

The current onboarding status of the employee

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdEmployeesOnboardingStatus } from "@gusto/embedded-api/models/operations/getv1companiescompanyidemployees.js";

let value: GetV1CompaniesCompanyIdEmployeesOnboardingStatus =
  "self_onboarding_invited_overdue";
```

## Values

```typescript
"onboarding_completed" | "admin_onboarding_incomplete" | "self_onboarding_pending_invite" | "self_onboarding_invited" | "self_onboarding_invited_started" | "self_onboarding_invited_overdue" | "self_onboarding_completed_by_employee" | "self_onboarding_awaiting_admin_review"
```