# DocumentRecipientType

The type of recipient associated with the document (will be `Contractor` for Contractor Documents)

## Example Usage

```typescript
import { DocumentRecipientType } from "openapi/models";

let value: DocumentRecipientType = "Contractor";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Company" | "Employee" | "Contractor" | Unrecognized<string>
```