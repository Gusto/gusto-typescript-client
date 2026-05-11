# CompanyBenefitSource

The source of the company benefit. This can be "internal", "external", or "partnered". Company benefits created via the API default to "external". Certain partners can create company benefits with a source of "partnered".

## Example Usage

```typescript
import { CompanyBenefitSource } from "openapi/models";

let value: CompanyBenefitSource = "partnered";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"internal" | "external" | "partnered" | Unrecognized<string>
```