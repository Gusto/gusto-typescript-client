# PaymentPeriod

How often the agency collects the withholding amount. e.g. $500 monthly -> `Monthly`.

## Example Usage

```typescript
import { PaymentPeriod } from "@gusto/embedded-api-v2025-11-15/models/components/garnishmentchildsupport.js";

let value: PaymentPeriod = "Monthly";
```

## Values

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly"
```