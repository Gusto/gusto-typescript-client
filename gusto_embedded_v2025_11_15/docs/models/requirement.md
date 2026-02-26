# Requirement

## Example Usage

```typescript
import { Requirement } from "openapi/models";

let value: Requirement = "state_setup";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"add_addresses" | "federal_tax_setup" | "select_industry" | "add_bank_info" | "add_employees" | "state_setup" | "payroll_schedule" | "sign_all_forms" | "verify_bank_info" | "external_payroll" | Unrecognized<string>
```