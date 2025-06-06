# SplitBy

How the payment is split. This field is applicable when `payment_method` is "Direct Deposit".

## Example Usage

```typescript
import { SplitBy } from "@gusto/embedded-api/models/components/employeepaymentdetail.js";

let value: SplitBy = "Percentage";
```

## Values

```typescript
"Percentage" | "Amount"
```