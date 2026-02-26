# NotificationEntityType

The type of entity being described.

## Example Usage

```typescript
import { NotificationEntityType } from "openapi/models";

let value: NotificationEntityType = "ContractorPayment";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"BankAccount" | "Contractor" | "ContractorPayment" | "Employee" | "Payroll" | "PaySchedule" | "RecoveryCase" | "Signatory" | "Wire In Request" | Unrecognized<string>
```