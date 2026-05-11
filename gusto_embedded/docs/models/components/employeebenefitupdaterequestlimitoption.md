# EmployeeBenefitUpdateRequestLimitOption

Some benefits require additional information to determine
their limit.

`Family` or `Individual`: Applicable to HSA benefit.

`Joint Filing or Single` or `Married and Filing Separately`: Applicable to Dependent Care FSA benefit.

## Example Usage

```typescript
import { EmployeeBenefitUpdateRequestLimitOption } from "@gusto/embedded-api/models/components/employeebenefitupdaterequest.js";

let value: EmployeeBenefitUpdateRequestLimitOption = "Individual";
```

## Values

```typescript
"Family" | "Individual" | "Joint Filing or Single" | "Married and Filing Separately"
```