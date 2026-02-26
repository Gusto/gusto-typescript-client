# PayrollCreditBlockerTypeStatus

The status of the credit blocker

## Example Usage

```typescript
import { PayrollCreditBlockerTypeStatus } from "openapi/models";

let value: PayrollCreditBlockerTypeStatus = "unresolved";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"unresolved" | "pending_review" | "resolved" | "failed" | Unrecognized<string>
```