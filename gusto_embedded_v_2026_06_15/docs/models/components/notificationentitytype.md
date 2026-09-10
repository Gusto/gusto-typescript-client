# NotificationEntityType

The type of entity being described.

## Example Usage

```typescript
import { NotificationEntityType } from "@gusto/embedded-api-v-2026-06-15/models/components/notification.js";

let value: NotificationEntityType = "ContractorPayment";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"BankAccount" | "Contractor" | "ContractorPayment" | "Employee" | "Payroll" | "PaySchedule" | "RecoveryCase" | "Signatory" | "Wire In Request" | Unrecognized<string>
```