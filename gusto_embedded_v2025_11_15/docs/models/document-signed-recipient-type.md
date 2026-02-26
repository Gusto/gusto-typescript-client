# DocumentSignedRecipientType

The type of recipient associated with the document (will be `Contractor` for Contractor Documents)

## Example Usage

```typescript
import { DocumentSignedRecipientType } from "openapi/models";

let value: DocumentSignedRecipientType = "Company";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Company" | "Employee" | "Contractor" | Unrecognized<string>
```