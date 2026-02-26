# CompanyBenefitCatchUpType

The type of catch-up contribution for this benefit, as required by Section 603 of the SECURE 2.0 Act. Only applicable to pre-tax 401(k) and 403(b) benefits.

## Example Usage

```typescript
import { CompanyBenefitCatchUpType } from "openapi/models";

let value: CompanyBenefitCatchUpType = "deemed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"elective" | "deemed" | Unrecognized<string>
```