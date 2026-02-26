# AchTransactionPaymentStatus

The status of the ACH transaction

## Example Usage

```typescript
import { AchTransactionPaymentStatus } from "openapi/models";

let value: AchTransactionPaymentStatus = "successful";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"unsubmitted" | "submitted" | "successful" | "failed" | Unrecognized<string>
```