# TokenInfoType

The type of resource owner:
- `CompanyAdmin`: A company administrator
- `Employee`: An employee
- `Contractor`: A contractor


## Example Usage

```typescript
import { TokenInfoType } from "@gusto/embedded-api/models/components/tokeninfo.js";

let value: TokenInfoType = "CompanyAdmin";
```

## Values

```typescript
"CompanyAdmin" | "Employee" | "Contractor"
```