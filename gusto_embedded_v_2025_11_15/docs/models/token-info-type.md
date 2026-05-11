# TokenInfoType

The type of resource owner:
- `CompanyAdmin`: A company administrator
- `Employee`: An employee
- `Contractor`: A contractor


## Example Usage

```typescript
import { TokenInfoType } from "openapi/models";

let value: TokenInfoType = "CompanyAdmin";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"CompanyAdmin" | "Employee" | "Contractor" | Unrecognized<string>
```