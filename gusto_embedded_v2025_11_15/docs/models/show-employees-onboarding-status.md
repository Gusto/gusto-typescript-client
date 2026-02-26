# ShowEmployeesOnboardingStatus

## Example Usage

```typescript
import { ShowEmployeesOnboardingStatus } from "openapi/models";

let value: ShowEmployeesOnboardingStatus = "self_onboarding_invited_started";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"onboarding_completed" | "admin_onboarding_incomplete" | "self_onboarding_pending_invite" | "self_onboarding_invited" | "self_onboarding_invited_started" | "self_onboarding_invited_overdue" | "self_onboarding_completed_by_employee" | "self_onboarding_awaiting_admin_review" | Unrecognized<string>
```