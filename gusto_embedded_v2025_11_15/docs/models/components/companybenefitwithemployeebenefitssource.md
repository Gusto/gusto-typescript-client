# CompanyBenefitWithEmployeeBenefitsSource

The source of the company benefit. This can be "internal", "external", or "partnered". Company benefits created via the API default to "external". Certain partners can create company benefits with a source of "partnered".

## Example Usage

```typescript
import { CompanyBenefitWithEmployeeBenefitsSource } from "@gusto/embedded-api-v2025-11-15/models/components/companybenefitwithemployeebenefits.js";

let value: CompanyBenefitWithEmployeeBenefitsSource = "internal";
```

## Values

```typescript
"internal" | "external" | "partnered"
```