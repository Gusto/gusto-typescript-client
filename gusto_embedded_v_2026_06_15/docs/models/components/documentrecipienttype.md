# DocumentRecipientType

The type of recipient associated with the document (will be `Contractor` for Contractor Documents)

## Example Usage

```typescript
import { DocumentRecipientType } from "@gusto/embedded-api-v-2026-06-15/models/components/document.js";

let value: DocumentRecipientType = "Contractor";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Company" | "Employee" | "Contractor" | Unrecognized<string>
```