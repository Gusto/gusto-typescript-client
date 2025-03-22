# PaymentPeriod

How often the agency collects the withholding amount. e.g. $500 monthly -> `Monthly`.

## Example Usage

```typescript
import { PaymentPeriod } from "@gusto/embedded-api/models/components/garnishmentchildsupport.js";

let value: PaymentPeriod = "Every other week";
```

## Values

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly"
```