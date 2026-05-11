# PaymentPeriod

How often the agency collects the withholding amount. e.g. $500 monthly -> `Monthly`.

## Example Usage

```typescript
import { PaymentPeriod } from "openapi/models";

let value: PaymentPeriod = "Monthly";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly" | Unrecognized<string>
```