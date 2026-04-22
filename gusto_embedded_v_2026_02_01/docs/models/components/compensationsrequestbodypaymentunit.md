# CompensationsRequestBodyPaymentUnit

The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.

## Example Usage

```typescript
import { CompensationsRequestBodyPaymentUnit } from "@gusto/embedded-api/models/components/compensationsrequestbody.js";

let value: CompensationsRequestBodyPaymentUnit = "Year";
```

## Values

```typescript
"Hour" | "Week" | "Month" | "Year" | "Paycheck"
```