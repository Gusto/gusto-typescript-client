# DocumentType

The type of document an employee holds, based on their authorization status.

  * This is unused for authorization status `citizen` or `noncitizen`.
  * If the authorization status is `permanent_resident`, this must be `uscis_alien_registration_number`.
  * If the authorization status is `alien`, this is required and may be any of the valid values.


## Example Usage

```typescript
import { DocumentType } from "@gusto/embedded-api-v2025-11-15/models/operations/putv1employeesemployeeidi9authorization.js";

let value: DocumentType = "foreign_passport";
```

## Values

```typescript
"uscis_alien_registration_number" | "form_i94" | "foreign_passport"
```