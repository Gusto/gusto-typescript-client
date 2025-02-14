# PaymentSpeedParam

Gusto Embedded supports three payment speeds (1-day, 2-day, and 4-day). For next-day payments, funds are deposited in your team's bank account by the end of the next business day. Most people will see the funds arrive the next afternoon, but payments may arrive as late as the end of the business day.

## Example Usage

```typescript
import { PaymentSpeedParam } from "@gusto/embedded-api/models/components";

let value: PaymentSpeedParam = "4-day";
```

## Values

```typescript
"1-day" | "2-day" | "4-day"
```