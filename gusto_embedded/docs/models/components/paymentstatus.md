# PaymentStatus

The status of the ACH transaction

## Example Usage

```typescript
import { PaymentStatus } from "@gusto/embedded-api/models/components";

let value: PaymentStatus = "unsubmitted";
```

## Values

```typescript
"unsubmitted" | "submitted" | "successful" | "failed"
```