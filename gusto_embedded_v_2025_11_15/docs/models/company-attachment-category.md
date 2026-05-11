# CompanyAttachmentCategory

The category of the company attachment.
- `gep_notice`: A tax notice attachment
- `compliance`: A compliance attachment
- `other`: Any other attachment type


## Example Usage

```typescript
import { CompanyAttachmentCategory } from "openapi/models";

let value: CompanyAttachmentCategory = "other";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"gep_notice" | "compliance" | "other" | Unrecognized<string>
```