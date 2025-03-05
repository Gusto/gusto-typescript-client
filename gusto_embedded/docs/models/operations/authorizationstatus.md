# AuthorizationStatus

The employee's authorization status

  * `citizen`: A citizen is someone who was born in the United States or is a naturalized citizen living in the United States.
  * `noncitizen`: A noncitizen national is someone born in American Samoa, certain former citizens of the former Trust Territory of the Pacific Islands, and certain children of noncitizen nationals born abroad.
  * `permanent_resident`: A lawful permanent resident is someone who is not a US citizen and who resides under legally recognized and lawfully recorded permanent residence as an immigrant.
  * `alien`: Also referred to as a "noncitizen authorized to work". This includes anyone who is authorized to work in the United States but is not a US citizen, US national or lawful permanent resident.


## Example Usage

```typescript
import { AuthorizationStatus } from "@gusto/embedded-api/models/operations";

let value: AuthorizationStatus = "alien";
```

## Values

```typescript
"citizen" | "noncitizen" | "permanent_resident" | "alien"
```