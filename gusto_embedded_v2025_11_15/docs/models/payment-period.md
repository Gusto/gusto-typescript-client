# PaymentPeriod

How often the agency collects the withholding amount. e.g. $500 monthly -> `Monthly`.

## Example Usage

```typescript
import { PaymentPeriod } from "openapi/models";

let value: PaymentPeriod = "Monthly";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly" | Unrecognized<string>
```