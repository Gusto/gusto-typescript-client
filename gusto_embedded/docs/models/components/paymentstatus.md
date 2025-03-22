# PaymentStatus

The status of the ACH transaction

## Example Usage

```typescript
import { PaymentStatus } from "@gusto/embedded-api/models/components/achtransaction.js";

let value: PaymentStatus = "submitted";
```

## Values

```typescript
"unsubmitted" | "submitted" | "successful" | "failed"
```