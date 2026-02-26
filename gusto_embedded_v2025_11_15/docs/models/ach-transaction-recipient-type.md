# AchTransactionRecipientType

The type of recipient associated with the ACH transaction

## Example Usage

```typescript
import { AchTransactionRecipientType } from "openapi/models";

let value: AchTransactionRecipientType = "Employee";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Employee" | "Contractor" | Unrecognized<string>
```