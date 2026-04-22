# Key

A unique identifier for the payroll blocker reason. For a complete list of blockers and their meanings, see the [Payroll Blockers guide](https://docs.gusto.com/embedded-payroll/docs/payroll-blockers).

## Example Usage

```typescript
import { Key } from "@gusto/embedded-api-v-2025-11-15/models/components/payrollblocker.js";

let value: Key = "needs_approval";
```

## Values

```typescript
"company_ownership_required" | "contractor_only_company" | "eftps_in_error" | "geocode_error" | "geocode_needed" | "invalid_signatory" | "missing_addresses" | "missing_bank_info" | "missing_bank_verification" | "missing_employee_setup" | "missing_federal_tax_setup" | "missing_forms" | "missing_industry_selection" | "missing_pay_schedule" | "missing_signatory" | "missing_state_tax_setup" | "needs_approval" | "needs_onboarding" | "pay_schedule_setup_not_complete" | "pending_information_request" | "pending_payroll_review" | "pending_recovery_case" | "soft_suspended" | "suspended"
```