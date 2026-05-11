# DocumentSignedRecipientType

The type of recipient associated with the document (will be `Contractor` for Contractor Documents)

## Example Usage

```typescript
import { DocumentSignedRecipientType } from "openapi/models";

let value: DocumentSignedRecipientType = "Company";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Company" | "Employee" | "Contractor" | Unrecognized<string>
```